import { providers, Signer } from 'ethers';
import { isUndefined } from 'lodash';
import { BorrowAMM } from '../BorrowAMM/borrowAMM';
import { Position } from '../Position/position';
import { AMM } from '../AMM/amm';
import { getGraphAMMs } from '../../graph-queries/amms';
import { getGraphPositions } from '../../graph-queries/positions';

import { graphAMMsResponseToAMMs, graphPositionsResponseToPositions } from './mappings';
import { ONE_DAY_IN_SECONDS } from '../../constants';

// This class creates and initialized all objects of the protocol in phases:
// - Phase 1 [onLand()]: this initializer needs to be triggered when the user lands on the page
//    -> after this phase:
//        1. all AMMs are generally initialised
// - Phase 2 [onConnect(signer)]: this initializer needs to be triggered when the user connects
//    -> after this phase:
//        1. all AMMs are initialised with the user
//        2. all positions are fully initialised
//        3. all borrow AMMs are fully initialised

export class Protocol {
  // whitelisted vamm addresses for LP pools
  public readonly lpWhitelistedAmms: Set<string>;
  // whitelisted vamm addresses for Trader pools
  public readonly traderWhitelistedAmms: Set<string>;
  // whitelisted vamm addresses
  public readonly allAmms: Set<string>;
  // factory address of the protocol
  public readonly factoryAddress: string;
  // JSON RPC provider
  public readonly provider?: providers.Provider;
  // coingecko premium API key
  public readonly coingeckoApiKey: string;
  // endpoint query URL of the graph
  public readonly graphEndpoint: string;

  // list of all AMM objects
  private amms: AMM[] = [];
  // list of all Position objects
  private positions: Position[] = [];
  // list of all Borrow AMMs
  private borrowAmms: BorrowAMM[] = [];

  public constructor({
    factoryAddress,
    provider,
    coingeckoApiKey,
    lpWhitelistedAmms,
    traderWhitelistedAmms,
    graphEndpoint,
  }: {
    factoryAddress: string;
    provider?: providers.Provider;
    coingeckoApiKey: string;
    lpWhitelistedAmms: string[];
    traderWhitelistedAmms: string[];
    graphEndpoint: string;
  }) {
    this.lpWhitelistedAmms = new Set<string>(lpWhitelistedAmms.map((item) => item.toLowerCase()));
    this.traderWhitelistedAmms = new Set<string>(
      traderWhitelistedAmms.map((item) => item.toLowerCase()),
    );
    this.allAmms = new Set<string>(
      lpWhitelistedAmms.concat(traderWhitelistedAmms).map((item) => item.toLowerCase()),
    );
    this.factoryAddress = factoryAddress;
    this.provider = provider;
    this.coingeckoApiKey = coingeckoApiKey;
    this.graphEndpoint = graphEndpoint;
  }

  // initializer triggered on land
  onLand = async (): Promise<void> => {
    // 1. Prepare the graph query condition
    const ammAddresses = Array.from(this.allAmms).reduce(
      (bag: string, val: string, i) => (i === 0 ? `"${val}"` : `${bag},"${val}"`),
      '',
    );
    const cond = `where: {id_in:[${ammAddresses}]}`;

    // 2. Fetch the AMM information from the graph
    const graphAMMs = await getGraphAMMs({
      graphEndpoint: this.graphEndpoint,
      cond,
    });

    // 3. Map the graph response to AMM objects
    this.amms = graphAMMsResponseToAMMs(
      graphAMMs,
      this.factoryAddress,
      this.coingeckoApiKey,
      this.provider,
    );

    // 4. Await for all general initializers of the AMMs
    await Promise.allSettled(this.amms.map((amm) => amm.init()));

    // 5. Sort the amms descending in terms of expiration
    this.amms = this.amms.sort((a, b) => b.termEndTimestamp - a.termEndTimestamp);
  };

  // initializer triggered when the user connects with their wallet
  // (the UI needs to use signer here)
  onConnect = async (signer: Signer | string): Promise<void> => {
    // 1. Await for all user-specific initializers of the AMMs
    await Promise.allSettled(this.amms.map((amm) => amm.init(signer)));

    // 2. Fetch the user address
    const userAddress = typeof signer === 'string' ? signer : await signer.getAddress();

    // 3. Prepare the graph query condition
    const ammAddresses = Array.from(this.allAmms).reduce(
      (bag: string, val: string, i) => (i === 0 ? `"${val}"` : `${bag},"${val}"`),
      '',
    );
    const cond = `where: {owner: "${userAddress.toLowerCase()}", amm_in: [${ammAddresses}]}`;

    // 4. Fetch the Position information from the graph
    const graphPositions = await getGraphPositions({
      graphEndpoint: this.graphEndpoint,
      cond,
    });

    // 5. Map the graph response to Position objects
    this.positions = graphPositionsResponseToPositions(graphPositions, this);

    // 6. Await for all initializers of the Positions
    await Promise.allSettled(this.positions.map((position) => position.init()));

    // 7. Sort the positions descending in terms of entry timestamp
    this.positions = this.positions.sort((a, b) => b.timestamp - a.timestamp);

    // 8. Build the Borrow Amms around the current Amms
    this.borrowAmms = this.amms
      .filter((amm) => amm.isBorrowing)
      .map((amm) => {
        return new BorrowAMM({
          id: amm.id,
          amm,
        });
      });

    // 9. Await for all initializers of the Borrow Amms
    await Promise.allSettled(
      this.borrowAmms.map((borrowAMM) => {
        const borrowPositionId = `${
          borrowAMM.amm.id
        }#${userAddress.toLowerCase()}#${-69000}#${69060}`;

        const borrowPosition = this.findPosition(borrowPositionId);
        return borrowAMM.init(borrowPosition);
      }),
    );
  };

  // Given an AMM ID, find the corresponding AMM
  findAMM = (ammId: string): AMM | undefined => {
    return this.amms.find((item) => item.id.toLowerCase() === ammId.toLowerCase());
  };

  // Given a position ID, find the corresponding Position
  findPosition = (positionId: string): Position | undefined => {
    return this.positions.find((item) => item.id.toLowerCase() === positionId.toLowerCase());
  };

  // Given an AMM ID, find the corresponding Borrow AMM
  findBorrowAMM = (borrowAMMId: string): BorrowAMM | undefined => {
    return this.borrowAmms.find((item) => item.id.toLowerCase() === borrowAMMId.toLowerCase());
  };

  // Given the AMM, find the associated latest position
  findPositionByAMM = ({
    amm,
    filterBy,
  }: {
    amm: AMM;
    filterBy?: 'TRADER' | 'LP' | 'FT' | 'VT' | 'BORROWER';
  }): Position | undefined => {
    const candidates = this.getPositions({ filterBy, active: true })
      .filter((position) => position.amm.id === amm.id)
      .sort((a, b) => a.timestamp - b.timestamp);

    if (candidates.length === 0) {
      return;
    }

    return candidates[0];
  };

  // Given the position, find latest rollover amm
  findRolloverAMM = (position: Position): AMM | undefined => {
    const candidates = this.getAMMs()
      .filter((amm) => amm.rateOracleID === position.amm.rateOracleID)
      .filter((amm) => amm.underlyingTokenAddress === position.amm.underlyingTokenAddress)
      .sort((a, b) => b.termEndTimestamp - a.termEndTimestamp);

    if (candidates.length === 0) {
      return;
    }

    if (candidates[0].termEndTimestamp < position.amm.latestBlockTimestamp + ONE_DAY_IN_SECONDS) {
      return;
    }

    return candidates[0];
  };

  // return AMMs
  public getAMMs(
    params: {
      filterBy?: 'TRADER' | 'LP' | 'BORROW';
      active?: boolean;
    } = {
      filterBy: undefined,
      active: undefined,
    },
  ): AMM[] {
    let candidates = this.amms;

    const { filterBy, active } = params;

    if (!isUndefined(active) && active) {
      candidates = candidates.filter((amm) => !amm.matured);
    }

    if (!isUndefined(filterBy)) {
      switch (filterBy) {
        case 'TRADER': {
          candidates = candidates.filter((amm) => this.traderWhitelistedAmms.has(amm.id));
          break;
        }

        case 'LP': {
          candidates = candidates.filter((amm) => this.lpWhitelistedAmms.has(amm.id));
          break;
        }

        case 'BORROW': {
          candidates = candidates
            .filter((amm) => this.traderWhitelistedAmms.has(amm.id))
            .filter((amm) => amm.isBorrowing);
          break;
        }

        default: {
          break;
        }
      }
    }

    candidates = candidates.sort((a, b) => {
      if (Number(a.matured) === Number(b.matured)) {
        return a.tokenName > b.tokenName ? -1 : 1;
      }

      return Number(a.matured) - Number(b.matured);
    });

    return candidates;
  }

  // return all positions
  public getPositions(
    params: {
      filterBy?: 'TRADER' | 'LP' | 'FT' | 'VT' | 'BORROWER';
      active?: boolean;
    } = {
      filterBy: undefined,
      active: undefined,
    },
  ): Position[] {
    let candidates = this.positions;

    const { filterBy, active } = params;

    if (!isUndefined(active) && active) {
      candidates = candidates.filter((position) => !position.amm.matured);
    }

    if (!isUndefined(filterBy)) {
      switch (filterBy) {
        case 'TRADER': {
          candidates = candidates
            .filter((position) => position.positionType === 1 || position.positionType === 2)
            .filter((position) => !position.isBorrowing);
          break;
        }

        case 'LP': {
          candidates = candidates.filter((position) => position.positionType === 3);
          break;
        }

        case 'FT': {
          candidates = candidates.filter((position) => position.positionType === 1);
          break;
        }

        case 'VT': {
          candidates = candidates
            .filter((position) => position.positionType === 2)
            .filter((position) => !position.isBorrowing);
          break;
        }

        case 'BORROWER': {
          candidates = candidates.filter((position) => position.isBorrowing);
          break;
        }

        default: {
          break;
        }
      }
    }

    candidates = candidates.sort((a, b) => {
      if (Number(a.isSettled) === Number(b.isSettled)) {
        if (Number(a.amm.matured) === Number(b.amm.matured)) {
          return Number(b.amm.matured) - Number(a.amm.matured);
        }

        return b.timestamp - a.timestamp;
      }

      return Number(a.isSettled) - Number(b.isSettled);
    });

    return candidates;
  }
}
