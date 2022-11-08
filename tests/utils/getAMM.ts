import { ethers, providers, Signer } from 'ethers';
import * as dotenv from 'dotenv';
import { BaseRateOracleABI, MarginEngineABI, VammABI } from '../../src/ABIs';
import { AMM } from '../../src/entities/AMM/amm';
import { exponentialBackoff } from '../../src/utils/retry';

dotenv.config();

export const getAMM = async ({
  vammAddress,
  provider,
  signer,
}: {
  vammAddress: string;
  provider: providers.Provider;
  signer?: Signer | string;
}): Promise<AMM> => {
  const vammContract = new ethers.Contract(vammAddress, VammABI, provider);

  const marginEngineAddress = await exponentialBackoff(() => vammContract.marginEngine());
  const tick = (await exponentialBackoff(() => vammContract.vammVars()))[1];
  const tickSpacing = await exponentialBackoff(() => vammContract.tickSpacing());

  const marginEngineContract = new ethers.Contract(marginEngineAddress, MarginEngineABI, provider);

  const factoryAddress = await exponentialBackoff(() => marginEngineContract.factory());

  const rateOracleAddress = await exponentialBackoff(() => marginEngineContract.rateOracle());

  const underlyingTokenAddress = await exponentialBackoff(() =>
    marginEngineContract.underlyingToken(),
  );

  const termStartTimestampWad = await exponentialBackoff(() =>
    marginEngineContract.termStartTimestampWad(),
  );

  const termEndTimestampWad = await exponentialBackoff(() =>
    marginEngineContract.termEndTimestampWad(),
  );

  const rateOracleContract = new ethers.Contract(rateOracleAddress, BaseRateOracleABI, provider);

  const rateOracleID = await exponentialBackoff(() =>
    rateOracleContract.UNDERLYING_YIELD_BEARING_PROTOCOL_ID(),
  );

  const amm = new AMM({
    id: vammAddress,
    provider,
    coingeckoApiKey: process.env.COINGECKO_API_KEY || '',

    factoryAddress,
    marginEngineAddress,
    rateOracleAddress,
    underlyingTokenAddress,

    termStartTimestampWad,
    termEndTimestampWad,

    rateOracleID,

    tick,
    tickSpacing,
  });

  await amm.init(signer);

  return amm;
};
