/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { IMarginEngine, IMarginEngineInterface } from "../IMarginEngine";

const _abi = [
  {
    inputs: [],
    name: "AavePoolGetReserveNormalizedIncomeReturnedZero",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "bool",
        name: "unlocked",
        type: "bool",
      },
    ],
    name: "CanOnlyTradeIfUnlocked",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "marginRequirement",
        type: "uint256",
      },
    ],
    name: "CannotLiquidate",
    type: "error",
  },
  {
    inputs: [],
    name: "CannotSettleBeforeMaturity",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "uint160",
        name: "sqrtPriceX96",
        type: "uint160",
      },
    ],
    name: "ExpectedSqrtPriceZeroBeforeInit",
    type: "error",
  },
  {
    inputs: [],
    name: "IRSNotionalAmountSpecifiedMustBeNonZero",
    type: "error",
  },
  {
    inputs: [],
    name: "InvalidMarginDelta",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "uint128",
        name: "amount",
        type: "uint128",
      },
    ],
    name: "LiquidityDeltaMustBePositiveInBurn",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "uint128",
        name: "amount",
        type: "uint128",
      },
    ],
    name: "LiquidityDeltaMustBePositiveInMint",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "int256",
        name: "marginRequirement",
        type: "int256",
      },
    ],
    name: "MarginLessThanMinimum",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "int256",
        name: "marginRequirement",
        type: "int256",
      },
      {
        internalType: "int24",
        name: "tick",
        type: "int24",
      },
      {
        internalType: "int256",
        name: "fixedTokenDelta",
        type: "int256",
      },
      {
        internalType: "int256",
        name: "variableTokenDelta",
        type: "int256",
      },
      {
        internalType: "uint256",
        name: "cumulativeFeeIncurred",
        type: "uint256",
      },
      {
        internalType: "int256",
        name: "fixedTokenDeltaUnbalanced",
        type: "int256",
      },
    ],
    name: "MarginRequirementNotMet",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "int256",
        name: "marginRequirement",
        type: "int256",
      },
    ],
    name: "MarginRequirementNotMetFCM",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "requested",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "available",
        type: "uint256",
      },
    ],
    name: "NotEnoughFunds",
    type: "error",
  },
  {
    inputs: [],
    name: "OOO",
    type: "error",
  },
  {
    inputs: [],
    name: "OnlyFCM",
    type: "error",
  },
  {
    inputs: [],
    name: "OnlyMarginEngine",
    type: "error",
  },
  {
    inputs: [],
    name: "OnlyOwnerCanUpdatePosition",
    type: "error",
  },
  {
    inputs: [],
    name: "OnlyVAMM",
    type: "error",
  },
  {
    inputs: [],
    name: "PositionNotSettled",
    type: "error",
  },
  {
    inputs: [],
    name: "WithdrawalExceedsCurrentMargin",
    type: "error",
  },
  {
    inputs: [],
    name: "closeToOrBeyondMaturity",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "cacheMaxAgeInSeconds",
        type: "uint256",
      },
    ],
    name: "CacheMaxAgeSetting",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "contract IFCM",
        name: "fcm",
        type: "address",
      },
    ],
    name: "FCMSetting",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "secondsAgo",
        type: "uint256",
      },
    ],
    name: "HistoricalApyWindowSetting",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "liquidatorRewardWad",
        type: "uint256",
      },
    ],
    name: "LiquidatorRewardSetting",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "apyUpperMultiplierWad",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "apyLowerMultiplierWad",
            type: "uint256",
          },
          {
            internalType: "int256",
            name: "sigmaSquaredWad",
            type: "int256",
          },
          {
            internalType: "int256",
            name: "alphaWad",
            type: "int256",
          },
          {
            internalType: "int256",
            name: "betaWad",
            type: "int256",
          },
          {
            internalType: "int256",
            name: "xiUpperWad",
            type: "int256",
          },
          {
            internalType: "int256",
            name: "xiLowerWad",
            type: "int256",
          },
          {
            internalType: "int256",
            name: "tMaxWad",
            type: "int256",
          },
          {
            internalType: "uint256",
            name: "devMulLeftUnwindLMWad",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "devMulRightUnwindLMWad",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "devMulLeftUnwindIMWad",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "devMulRightUnwindIMWad",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "fixedRateDeviationMinLeftUnwindLMWad",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "fixedRateDeviationMinRightUnwindLMWad",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "fixedRateDeviationMinLeftUnwindIMWad",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "fixedRateDeviationMinRightUnwindIMWad",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "gammaWad",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "minMarginToIncentiviseLiquidators",
            type: "uint256",
          },
        ],
        indexed: false,
        internalType: "struct IMarginEngine.MarginCalculatorParameters",
        name: "marginCalculatorParameters",
        type: "tuple",
      },
    ],
    name: "MarginCalculatorParametersSetting",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "int24",
        name: "tickLower",
        type: "int24",
      },
      {
        indexed: true,
        internalType: "int24",
        name: "tickUpper",
        type: "int24",
      },
      {
        indexed: false,
        internalType: "int256",
        name: "fixedTokenBalance",
        type: "int256",
      },
      {
        indexed: false,
        internalType: "int256",
        name: "variableTokenBalance",
        type: "int256",
      },
      {
        indexed: false,
        internalType: "int256",
        name: "margin",
        type: "int256",
      },
      {
        indexed: false,
        internalType: "uint128",
        name: "liquidity",
        type: "uint128",
      },
    ],
    name: "PositionLiquidation",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "int24",
        name: "tickLower",
        type: "int24",
      },
      {
        indexed: true,
        internalType: "int24",
        name: "tickUpper",
        type: "int24",
      },
      {
        indexed: false,
        internalType: "int256",
        name: "positionMargin",
        type: "int256",
      },
    ],
    name: "PositionMarginUpdate",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "int24",
        name: "tickLower",
        type: "int24",
      },
      {
        indexed: true,
        internalType: "int24",
        name: "tickUpper",
        type: "int24",
      },
      {
        indexed: false,
        internalType: "uint128",
        name: "liquidity",
        type: "uint128",
      },
    ],
    name: "PositionPostMintBurnUpdate",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "int24",
        name: "tickLower",
        type: "int24",
      },
      {
        indexed: true,
        internalType: "int24",
        name: "tickUpper",
        type: "int24",
      },
      {
        indexed: false,
        internalType: "int256",
        name: "fixedTokenBalance",
        type: "int256",
      },
      {
        indexed: false,
        internalType: "int256",
        name: "variableTokenBalance",
        type: "int256",
      },
      {
        indexed: false,
        internalType: "int256",
        name: "margin",
        type: "int256",
      },
    ],
    name: "PositionPostSwapUpdate",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "int24",
        name: "tickLower",
        type: "int24",
      },
      {
        indexed: true,
        internalType: "int24",
        name: "tickUpper",
        type: "int24",
      },
      {
        indexed: false,
        internalType: "int256",
        name: "fixedTokenBalance",
        type: "int256",
      },
      {
        indexed: false,
        internalType: "int256",
        name: "variableTokenBalance",
        type: "int256",
      },
      {
        indexed: false,
        internalType: "int256",
        name: "margin",
        type: "int256",
      },
      {
        indexed: false,
        internalType: "int256",
        name: "settlementCashflow",
        type: "int256",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "isSettled",
        type: "bool",
      },
    ],
    name: "PositionSettlement",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "ProtocolCollection",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "contract IVAMM",
        name: "vamm",
        type: "address",
      },
    ],
    name: "VAMMSetting",
    type: "event",
  },
  {
    inputs: [],
    name: "cacheMaxAgeInSeconds",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "collectProtocol",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "factory",
    outputs: [
      {
        internalType: "contract IFactory",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "fcm",
    outputs: [
      {
        internalType: "contract IFCM",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getHistoricalApy",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_owner",
        type: "address",
      },
      {
        internalType: "int24",
        name: "_tickLower",
        type: "int24",
      },
      {
        internalType: "int24",
        name: "_tickUpper",
        type: "int24",
      },
    ],
    name: "getPosition",
    outputs: [
      {
        components: [
          {
            internalType: "bool",
            name: "isSettled",
            type: "bool",
          },
          {
            internalType: "uint128",
            name: "_liquidity",
            type: "uint128",
          },
          {
            internalType: "int256",
            name: "margin",
            type: "int256",
          },
          {
            internalType: "int256",
            name: "fixedTokenGrowthInsideLastX128",
            type: "int256",
          },
          {
            internalType: "int256",
            name: "variableTokenGrowthInsideLastX128",
            type: "int256",
          },
          {
            internalType: "int256",
            name: "fixedTokenBalance",
            type: "int256",
          },
          {
            internalType: "int256",
            name: "variableTokenBalance",
            type: "int256",
          },
          {
            internalType: "uint256",
            name: "feeGrowthInsideLastX128",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "rewardPerAmount",
            type: "uint256",
          },
        ],
        internalType: "struct Position.Info",
        name: "position",
        type: "tuple",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_recipient",
        type: "address",
      },
      {
        internalType: "int24",
        name: "_tickLower",
        type: "int24",
      },
      {
        internalType: "int24",
        name: "_tickUpper",
        type: "int24",
      },
      {
        internalType: "bool",
        name: "_isLM",
        type: "bool",
      },
    ],
    name: "getPositionMarginRequirement",
    outputs: [
      {
        internalType: "uint256",
        name: "_margin",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract IERC20Minimal",
        name: "__underlyingToken",
        type: "address",
      },
      {
        internalType: "contract IRateOracle",
        name: "__rateOracle",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "__termStartTimestampWad",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "__termEndTimestampWad",
        type: "uint256",
      },
    ],
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_owner",
        type: "address",
      },
      {
        internalType: "int24",
        name: "_tickLower",
        type: "int24",
      },
      {
        internalType: "int24",
        name: "_tickUpper",
        type: "int24",
      },
    ],
    name: "liquidatePosition",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "liquidatorRewardWad",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "lookbackWindowInSeconds",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "rateOracle",
    outputs: [
      {
        internalType: "contract IRateOracle",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_cacheMaxAgeInSeconds",
        type: "uint256",
      },
    ],
    name: "setCacheMaxAgeInSeconds",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract IFCM",
        name: "_newFCM",
        type: "address",
      },
    ],
    name: "setFCM",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_liquidatorRewardWad",
        type: "uint256",
      },
    ],
    name: "setLiquidatorReward",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_secondsAgo",
        type: "uint256",
      },
    ],
    name: "setLookbackWindowInSeconds",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "apyUpperMultiplierWad",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "apyLowerMultiplierWad",
            type: "uint256",
          },
          {
            internalType: "int256",
            name: "sigmaSquaredWad",
            type: "int256",
          },
          {
            internalType: "int256",
            name: "alphaWad",
            type: "int256",
          },
          {
            internalType: "int256",
            name: "betaWad",
            type: "int256",
          },
          {
            internalType: "int256",
            name: "xiUpperWad",
            type: "int256",
          },
          {
            internalType: "int256",
            name: "xiLowerWad",
            type: "int256",
          },
          {
            internalType: "int256",
            name: "tMaxWad",
            type: "int256",
          },
          {
            internalType: "uint256",
            name: "devMulLeftUnwindLMWad",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "devMulRightUnwindLMWad",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "devMulLeftUnwindIMWad",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "devMulRightUnwindIMWad",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "fixedRateDeviationMinLeftUnwindLMWad",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "fixedRateDeviationMinRightUnwindLMWad",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "fixedRateDeviationMinLeftUnwindIMWad",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "fixedRateDeviationMinRightUnwindIMWad",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "gammaWad",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "minMarginToIncentiviseLiquidators",
            type: "uint256",
          },
        ],
        internalType: "struct IMarginEngine.MarginCalculatorParameters",
        name: "_marginCalculatorParameters",
        type: "tuple",
      },
    ],
    name: "setMarginCalculatorParameters",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract IVAMM",
        name: "_vAMM",
        type: "address",
      },
    ],
    name: "setVAMM",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_owner",
        type: "address",
      },
      {
        internalType: "int24",
        name: "_tickLower",
        type: "int24",
      },
      {
        internalType: "int24",
        name: "_tickUpper",
        type: "int24",
      },
    ],
    name: "settlePosition",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "termEndTimestampWad",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "termStartTimestampWad",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_account",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_marginDelta",
        type: "uint256",
      },
    ],
    name: "transferMarginToFCMTrader",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "underlyingToken",
    outputs: [
      {
        internalType: "contract IERC20Minimal",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_owner",
        type: "address",
      },
      {
        internalType: "int24",
        name: "_tickLower",
        type: "int24",
      },
      {
        internalType: "int24",
        name: "_tickUpper",
        type: "int24",
      },
      {
        internalType: "int256",
        name: "marginDelta",
        type: "int256",
      },
    ],
    name: "updatePositionMargin",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "address",
            name: "owner",
            type: "address",
          },
          {
            internalType: "int24",
            name: "tickLower",
            type: "int24",
          },
          {
            internalType: "int24",
            name: "tickUpper",
            type: "int24",
          },
          {
            internalType: "int128",
            name: "liquidityDelta",
            type: "int128",
          },
        ],
        internalType: "struct IPositionStructs.ModifyPositionParams",
        name: "_params",
        type: "tuple",
      },
    ],
    name: "updatePositionPostVAMMInducedMintBurn",
    outputs: [
      {
        internalType: "int256",
        name: "_positionMarginRequirement",
        type: "int256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_owner",
        type: "address",
      },
      {
        internalType: "int24",
        name: "_tickLower",
        type: "int24",
      },
      {
        internalType: "int24",
        name: "_tickUpper",
        type: "int24",
      },
      {
        internalType: "int256",
        name: "_fixedTokenDelta",
        type: "int256",
      },
      {
        internalType: "int256",
        name: "_variableTokenDelta",
        type: "int256",
      },
      {
        internalType: "uint256",
        name: "_cumulativeFeeIncurred",
        type: "uint256",
      },
      {
        internalType: "int256",
        name: "_fixedTokenDeltaUnbalanced",
        type: "int256",
      },
    ],
    name: "updatePositionPostVAMMInducedSwap",
    outputs: [
      {
        internalType: "int256",
        name: "_positionMarginRequirement",
        type: "int256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "vamm",
    outputs: [
      {
        internalType: "contract IVAMM",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

export class IMarginEngine__factory {
  static readonly abi = _abi;
  static createInterface(): IMarginEngineInterface {
    return new utils.Interface(_abi) as IMarginEngineInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IMarginEngine {
    return new Contract(address, _abi, signerOrProvider) as IMarginEngine;
  }
}
