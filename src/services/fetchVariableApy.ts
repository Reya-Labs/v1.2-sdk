import { BigNumber, Contract, ethers, providers } from 'ethers';
import { AaveLendingPoolABI, CTokenABI } from '../ABIs';
import { exponentialBackoff } from '../utils/retry';
import { descale } from '../utils/scaling';

export const fetchVariableApy = async (args: {
  rateOracle: Contract;
  rateOracleID: number;
  tokenAddress: string;
  provider: providers.Provider;
}): Promise<number> => {
  switch (args.rateOracleID) {
    case 1: {
      // Aave Lending Rate Oracle

      const lendingPoolAddress = await exponentialBackoff(() => args.rateOracle.aaveLendingPool());
      const lendingPool = new ethers.Contract(
        lendingPoolAddress,
        AaveLendingPoolABI,
        args.provider,
      );

      const reservesData = await exponentialBackoff(() =>
        lendingPool.getReserveData(args.tokenAddress),
      );
      return descale(25)(reservesData.currentLiquidityRate);
    }

    case 2: {
      // Compound Lending Rate Oracle

      const daysPerYear = 365;
      const blocksPerDay = 6570;

      const cTokenAddress = await exponentialBackoff(() => args.rateOracle.ctoken());
      const cTokenContract = new ethers.Contract(cTokenAddress, CTokenABI, args.provider);

      const ratePerBlock = await exponentialBackoff(() => cTokenContract.supplyRatePerBlock());
      return ((descale(18)(ratePerBlock) * blocksPerDay + 1) ** daysPerYear - 1) * 100;
    }

    case 3:
    case 4: {
      // Lido Rate Oracle
      // Rocket Rate Oracle

      const apyWindow = 28 * 60 * 60;

      const lastBlock = await exponentialBackoff(() => args.provider.getBlockNumber());
      const to = BigNumber.from(
        (await exponentialBackoff(() => args.provider.getBlock(lastBlock - 1))).timestamp,
      );
      const from = to.sub(apyWindow);

      const apy = await exponentialBackoff(() => args.rateOracle.getApyFromTo(from, to));
      return descale(16)(apy);
    }

    case 5: {
      // Aave Borrowing Rate Oracle

      const lendingPoolAddress = await exponentialBackoff(() => args.rateOracle.aaveLendingPool());
      const lendingPool = new ethers.Contract(
        lendingPoolAddress,
        AaveLendingPoolABI,
        args.provider,
      );

      const reservesData = await exponentialBackoff(() =>
        lendingPool.getReserveData(args.tokenAddress),
      );
      return descale(25)(reservesData.currentVariableBorrowRate);
    }

    case 6: {
      // Compound Borrowing Rate Oracle

      const daysPerYear = 365;
      const blocksPerDay = 6570;

      const cTokenAddress = await exponentialBackoff(() => args.rateOracle.ctoken());
      const cTokenContract = new ethers.Contract(cTokenAddress, CTokenABI, args.provider);

      const ratePerBlock = await exponentialBackoff(() => cTokenContract.borrowRatePerBlock());
      return ((descale(18)(ratePerBlock) * blocksPerDay + 1) ** daysPerYear - 1) * 100;
    }

    default: {
      return 0;
    }
  }
};
