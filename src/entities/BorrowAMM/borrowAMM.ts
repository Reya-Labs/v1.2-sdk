import { ethers } from 'ethers';
import { isUndefined } from 'lodash';
import { AaveLendingPoolABI, CTokenABI, IERC20MinimalABI } from '../../ABIs';
import { ONE_YEAR_IN_SECONDS } from '../../constants';
import { UserSwapInfoArgs } from '../../flows/swap';
import { getAdditionalMargin } from '../../services/getAdditionalMargin';
import { exponentialBackoff } from '../../utils/retry';
import { descale } from '../../utils/scaling';
import { AMM } from '../AMM/amm';
import { Position } from '../Position/position';
import { BorrowAMMConstructorArgs, BorrowSwapInfo } from './types';

export class BorrowAMM {
  public readonly id: string;
  public readonly amm: AMM;

  public borrowBalance = 0;
  public position?: Position;

  public initialized = false;

  public constructor({ id, amm }: BorrowAMMConstructorArgs) {
    this.id = id;
    this.amm = amm;

    if (!this.amm.isBorrowing) {
      throw new Error('This pool is not on a borrow market');
    }
  }

  init = async (position?: Position): Promise<void> => {
    this.position = position;
    await this.refreshBorrowBalance();

    this.initialized = true;
  };

  refreshBorrowBalance = async (): Promise<void> => {
    if (
      isUndefined(this.amm.readOnlyContracts) ||
      isUndefined(this.amm.provider) ||
      isUndefined(this.amm.userAddress)
    ) {
      return;
    }

    if (this.amm.rateOracleID === 5) {
      // Aave
      const rateOracleContract = this.amm.readOnlyContracts.rateOracle;
      const lendingPoolAddress = await exponentialBackoff(() =>
        rateOracleContract.aaveLendingPool(),
      );
      const lendingPool = new ethers.Contract(
        lendingPoolAddress,
        AaveLendingPoolABI,
        this.amm.provider,
      );

      const reservesData = await exponentialBackoff(() =>
        lendingPool.getReserveData(this.amm.underlyingTokenAddress),
      );

      const variableDebtTokenAddress = reservesData.variableDebtTokenAddress;
      const variableDebtToken = new ethers.Contract(
        variableDebtTokenAddress,
        IERC20MinimalABI,
        this.amm.provider,
      );

      const balance = await exponentialBackoff(() =>
        variableDebtToken.balanceOf(this.amm.userAddress),
      );
      const decimals = await exponentialBackoff(() => variableDebtToken.decimals());
      this.borrowBalance = descale(decimals)(balance);
    }

    if (this.amm.rateOracleID === 6) {
      // Compound

      const rateOracleContract = this.amm.readOnlyContracts.rateOracle;
      const cTokenAddress = await exponentialBackoff(() => rateOracleContract.ctoken());
      const cTokenContract = new ethers.Contract(cTokenAddress, CTokenABI, this.amm.provider);

      const balance = await exponentialBackoff(() =>
        cTokenContract.callStatic.borrowBalanceCurrent(this.amm.userAddress),
      );
      const decimals = await exponentialBackoff(() => cTokenContract.decimals());
      this.borrowBalance = descale(decimals)(balance);
    }
  };

  getBorrowInfo = async (args: UserSwapInfoArgs): Promise<BorrowSwapInfo | undefined> => {
    const swapInfo = await this.amm.getSwapInfo(args);

    if (isUndefined(this.amm.readOnlyContracts) || isUndefined(swapInfo)) {
      return;
    }

    const rateOracleContract = this.amm.readOnlyContracts?.rateOracle;
    const variableFactor = await exponentialBackoff(() =>
      rateOracleContract.getVariableFactor(
        this.amm.termStartTimestampWad,
        this.amm.termEndTimestampWad,
      ),
    );

    const fixedFactor =
      ((this.amm.termEndTimestamp - this.amm.termStartTimestamp) / ONE_YEAR_IN_SECONDS) * 0.01;

    const fcMargin = -(
      swapInfo.fixedTokenDelta * fixedFactor +
      swapInfo.variableTokenDelta * variableFactor
    );

    return {
      borrowMarginRequirement: getAdditionalMargin({
        requiredMargin: Math.max(fcMargin, 0),
        currentMargin: 0,
        fee: swapInfo.fee,
      }),
      ...swapInfo,
    };
  };

  public get fixedBorrowBalance(): number {
    if (isUndefined(this.position)) {
      return 0;
    }
    return (
      this.position.variableTokenBalance -
      (this.position._cashflowInfo.lockedCashflow.fixed +
        this.position._cashflowInfo.accruingCashflow.fixed)
    );
  }

  public get variableBorrowBalance(): number {
    if (isUndefined(this.position)) {
      return this.borrowBalance;
    }

    return Math.max(
      0,
      this.borrowBalance -
        (this.position.variableTokenBalance +
          (this.position._cashflowInfo.lockedCashflow.variable +
            this.position._cashflowInfo.accruingCashflow.variable)),
    );
  }
}
