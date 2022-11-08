import { waffle } from 'hardhat';

import { describe, it } from 'mocha';
import { expect } from 'chai';

import * as mainnetPools from '../../pool-addresses/mainnet.json';
import { getPosition } from '../utils/getPosition';

const { provider } = waffle;

describe('position', () => {
  it('LP position', async () => {
    const poolName = 'aUSDC_v3';
    const item = mainnetPools[poolName as keyof typeof mainnetPools];

    const userAddress = '0xf8f6b70a36f4398f0853a311dc6699aba8333cc1';
    const tickLower = -4680;
    const tickUpper = -3360;

    const position = await getPosition({
      vammAddress: item.vamm,
      marginEngineAddress: item.marginEngine,
      provider,
      signer: userAddress,
      tickLower,
      tickUpper,
    });

    const expectedPositionId = `${item.marginEngine.toLowerCase()}#${userAddress.toLowerCase()}#${tickLower}#${tickUpper}`;

    expect(position?.id).to.be.eq(expectedPositionId);
    expect(position?.owner).to.be.eq(userAddress);
    expect(position?.fixedLow).to.be.closeTo(1.4, 0.01);
    expect(position?.fixedHigh).to.be.closeTo(1.6, 0.01);

    expect(position?.positionType).to.be.eq(3);

    expect(position?.liquidity).to.be.closeTo(1010, 0.01);
    expect(position?.accumulatedFees).to.be.closeTo(0.13, 0.01);

    expect(position?.margin).to.be.closeTo(3.13, 0.01);
    expect(position?.fixedTokenBalance).to.be.closeTo(-737.63, 0.01);
    expect(position?.variableTokenBalance).to.be.closeTo(513.33, 0.01);

    expect(position?.timestamp).to.be.eq(0);
    expect(position?.isSettled).to.be.eq(false);

    expect(position?.requirements.liquidation).to.be.greaterThan(0);
    expect(position?.requirements.safety).to.be.greaterThan(0);

    expect(position?.inRange).to.be.eq('RED');
    expect(position?.healthFactor).to.be.eq('GREEN');
  });

  it('Trader position', async () => {
    const poolName = 'borrow_aUSDC_v1';
    const item = mainnetPools[poolName as keyof typeof mainnetPools];

    const userAddress = '0xf8f6b70a36f4398f0853a311dc6699aba8333cc1';
    const tickLower = -69060;
    const tickUpper = 0;

    const position = await getPosition({
      vammAddress: item.vamm,
      marginEngineAddress: item.marginEngine,
      provider,
      signer: userAddress,
      tickLower,
      tickUpper,
    });

    const expectedPositionId = `${item.marginEngine.toLowerCase()}#${userAddress.toLowerCase()}#${tickLower}#${tickUpper}`;

    expect(position?.id).to.be.eq(expectedPositionId);
    expect(position?.owner).to.be.eq(userAddress);

    expect(position?.positionType).to.be.eq(2);

    expect(position?.liquidity).to.be.closeTo(0, 0.01);
    expect(position?.accumulatedFees).to.be.closeTo(0, 0.01);

    expect(position?.margin).to.be.closeTo(9.18, 0.01);
    expect(position?.fixedTokenBalance).to.be.closeTo(-1441.36, 0.01);
    expect(position?.variableTokenBalance).to.be.closeTo(1000, 0.01);

    expect(position?.timestamp).to.be.eq(0);
    expect(position?.isSettled).to.be.eq(false);

    expect(position?.requirements.liquidation).to.be.greaterThan(0);
    expect(position?.requirements.safety).to.be.greaterThan(0);

    expect(position?.healthFactor).to.be.eq('GREEN');
  });
});
