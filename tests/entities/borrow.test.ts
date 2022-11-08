import { waffle } from 'hardhat';

import { describe, it } from 'mocha';

import * as mainnetPools from '../../pool-addresses/mainnet.json';
import { getBorrowAMM } from '../utils/getBorrowAMM';

const { provider } = waffle;

describe('borrow amm', () => {
  const userAddress = '0xf8f6b70a36f4398f0853a311dc6699aba8333cc1';

  ['borrow_aUSDC_v1', 'borrow_aETH_v1', 'borrow_cUSDT_v1', 'borrow_aETH_v2'].forEach((poolName) => {
    const item = mainnetPools[poolName as keyof typeof mainnetPools];

    it(`initialisation ${poolName}`, async () => {
      await getBorrowAMM({
        vammAddress: item.vamm,
        marginEngineAddress: item.marginEngine,
        provider,
        signer: userAddress,
      });
    });
  });
});
