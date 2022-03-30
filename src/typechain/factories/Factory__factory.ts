/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { Factory, FactoryInterface } from "../Factory";

const _abi = [
  {
    inputs: [
      {
        internalType: "contract IMarginEngine",
        name: "_masterMarginEngine",
        type: "address",
      },
      {
        internalType: "contract IVAMM",
        name: "_masterVAMM",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
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
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "intAddress",
        type: "address",
      },
      {
        indexed: true,
        internalType: "bool",
        name: "isApproved",
        type: "bool",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "contract IERC20Minimal",
        name: "underlyingToken",
        type: "address",
      },
      {
        indexed: true,
        internalType: "contract IRateOracle",
        name: "rateOracle",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "termStartTimestampWad",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "termEndTimestampWad",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "int24",
        name: "tickSpacing",
        type: "int24",
      },
      {
        indexed: false,
        internalType: "contract IMarginEngine",
        name: "marginEngine",
        type: "address",
      },
      {
        indexed: false,
        internalType: "contract IVAMM",
        name: "vamm",
        type: "address",
      },
      {
        indexed: false,
        internalType: "contract IFCM",
        name: "fcm",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint8",
        name: "yieldBearingProtocolID",
        type: "uint8",
      },
      {
        indexed: false,
        internalType: "uint8",
        name: "underlyingTokenDecimals",
        type: "uint8",
      },
    ],
    name: "IrsInstance",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "contract IFCM",
        name: "masterFCMAddress",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint8",
        name: "yieldBearingProtocolID",
        type: "uint8",
      },
    ],
    name: "MasterFCM",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "contract IPeriphery",
        name: "periphery",
        type: "address",
      },
    ],
    name: "PeripheryUpdate",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "contract IERC20Minimal",
        name: "_underlyingToken",
        type: "address",
      },
      {
        internalType: "contract IRateOracle",
        name: "_rateOracle",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_termStartTimestampWad",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_termEndTimestampWad",
        type: "uint256",
      },
      {
        internalType: "int24",
        name: "_tickSpacing",
        type: "int24",
      },
    ],
    name: "deployIrsInstance",
    outputs: [
      {
        internalType: "contract IMarginEngine",
        name: "marginEngineProxy",
        type: "address",
      },
      {
        internalType: "contract IVAMM",
        name: "vammProxy",
        type: "address",
      },
      {
        internalType: "contract IFCM",
        name: "fcmProxy",
        type: "address",
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
        internalType: "address",
        name: "_intAddress",
        type: "address",
      },
    ],
    name: "isApproved",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    name: "masterFCMs",
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
    name: "masterMarginEngine",
    outputs: [
      {
        internalType: "contract IMarginEngine",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "masterVAMM",
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
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "periphery",
    outputs: [
      {
        internalType: "contract IPeriphery",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "intAddress",
        type: "address",
      },
      {
        internalType: "bool",
        name: "allowIntegration",
        type: "bool",
      },
    ],
    name: "setApproval",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract IFCM",
        name: "_masterFCM",
        type: "address",
      },
      {
        internalType: "uint8",
        name: "_yieldBearingProtocolID",
        type: "uint8",
      },
    ],
    name: "setMasterFCM",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract IMarginEngine",
        name: "_masterMarginEngine",
        type: "address",
      },
    ],
    name: "setMasterMarginEngine",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract IVAMM",
        name: "_masterVAMM",
        type: "address",
      },
    ],
    name: "setMasterVAMM",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract IPeriphery",
        name: "_periphery",
        type: "address",
      },
    ],
    name: "setPeriphery",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50604051611a21380380611a2183398101604081905261002f916100b9565b61003833610069565b600180546001600160a01b039384166001600160a01b0319918216179091556002805492909316911617905561010a565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b600080604083850312156100cb578182fd5b82516100d6816100f2565b60208401519092506100e7816100f2565b809150509250929050565b6001600160a01b038116811461010757600080fd5b50565b611908806101196000396000f3fe60806040523480156200001157600080fd5b5060043610620000ca5760003560e01c80630e8a064814620000cf578063715018a6146200011557806377aace1a14620001215780638da5cb5b146200014457806394a9b1f7146200014e57806395858f981462000165578063973cd931146200017c5780639fe1b3541462000193578063a389783e14620001a7578063aeb2293414620001cf578063ca5183b714620001e6578063db9b71701462000212578063f2fde38b1462000229578063febfe75e1462000240575b600080fd5b620000e6620000e036600462000fe4565b62000254565b604080516001600160a01b03948516815292841660208401529216918101919091526060015b60405180910390f35b6200011f62000938565b005b60055462000135906001600160a01b031681565b6040516200010c9190620010be565b620001356200097a565b6200011f6200015f36600462000f2d565b62000989565b6200011f620001763660046200104e565b62000a43565b6200011f6200018d36600462000f2d565b62000b34565b60015462000135906001600160a01b031681565b620001be620001b836600462000f53565b62000bed565b60405190151581526020016200010c565b6200011f620001e036600462000f2d565b62000cdc565b62000135620001f736600462001080565b6003602052600090815260409020546001600160a01b031681565b6200011f6200022336600462000f90565b62000dce565b6200011f6200023a36600462000f2d565b62000e2e565b60025462000135906001600160a01b031681565b6000808033620002636200097a565b6001600160a01b031614620002955760405162461bcd60e51b81526004016200028c90620010f5565b60405180910390fd5b6001546040516000916001600160a01b031690620002b39062000f1f565b620002bf9190620010d2565b604051809103906000f080158015620002dc573d6000803e3d6000fd5b506002546040519192506000916001600160a01b0390911690620003009062000f1f565b6200030c9190620010d2565b604051809103906000f08015801562000329573d6000803e3d6000fd5b5060405163eb990c5960e01b81526001600160a01b038c811660048301528b81166024830152604482018b9052606482018a90529192509083169063eb990c5990608401600060405180830381600087803b1580156200038857600080fd5b505af11580156200039d573d6000803e3d6000fd5b5050604051631b325b2160e31b81526001600160a01b03858116600483015260028a900b60248301528416925063d992d9089150604401600060405180830381600087803b158015620003ef57600080fd5b505af115801562000404573d6000803e3d6000fd5b50506040516331d81ea760e21b81526001600160a01b038516925063c7607a9c915062000436908490600401620010be565b600060405180830381600087803b1580156200045157600080fd5b505af115801562000466573d6000803e3d6000fd5b5050505060008990508a6001600160a01b0316816001600160a01b0316636f307dc36040518163ffffffff1660e01b815260040160206040518083038186803b158015620004b357600080fd5b505afa158015620004c8573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620004ee919062000fc5565b6001600160a01b0316146200053c5760405162461bcd60e51b81526020600482015260136024820152720a8ded6cadce640c8de40dcdee840dac2e8c6d606b1b60448201526064016200028c565b6000816001600160a01b03166322ff65686040518163ffffffff1660e01b815260040160206040518083038186803b1580156200057857600080fd5b505afa1580156200058d573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620005b391906200109f565b60ff81166000908152600360205260408120549192506001600160a01b03909116908115620007435781604051620005eb9062000f1f565b620005f79190620010d2565b604051809103906000f08015801562000614573d6000803e3d6000fd5b5060405163485cc95560e01b81526001600160a01b03878116600483015288811660248301529192509082169063485cc95590604401600060405180830381600087803b1580156200066557600080fd5b505af11580156200067a573d6000803e3d6000fd5b505060405163534d337560e01b81526001600160a01b038916925063534d33759150620006ac908490600401620010be565b600060405180830381600087803b158015620006c757600080fd5b505af1158015620006dc573d6000803e3d6000fd5b505060405163f2fde38b60e01b81526001600160a01b038416925063f2fde38b91506200070e903390600401620010be565b600060405180830381600087803b1580156200072957600080fd5b505af11580156200073e573d6000803e3d6000fd5b505050505b60008e6001600160a01b031663313ce5676040518163ffffffff1660e01b815260040160206040518083038186803b1580156200077f57600080fd5b505afa15801562000794573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620007ba91906200109f565b90508d6001600160a01b03168f6001600160a01b03167fe134804702afa0f02bd7f0687d4c2f662a1790b4904d1c2cd6f41fcffbfc05c38f8f8f8c8c898c8a60405162000854989796959493929190978852602088019690965260029490940b60408701526001600160a01b03928316606087015290821660808601521660a084015260ff90811660c08401521660e08201526101000190565b60405180910390a360405163f2fde38b60e01b81526001600160a01b0387169063f2fde38b906200088a903390600401620010be565b600060405180830381600087803b158015620008a557600080fd5b505af1158015620008ba573d6000803e3d6000fd5b505060405163f2fde38b60e01b81526001600160a01b038a16925063f2fde38b9150620008ec903390600401620010be565b600060405180830381600087803b1580156200090757600080fd5b505af11580156200091c573d6000803e3d6000fd5b50989b5096995091975050505050505050955095509592505050565b33620009436200097a565b6001600160a01b0316146200096c5760405162461bcd60e51b81526004016200028c90620010f5565b62000978600062000ecf565b565b6000546001600160a01b031690565b33620009946200097a565b6001600160a01b031614620009bd5760405162461bcd60e51b81526004016200028c90620010f5565b6001600160a01b03811662000a0e5760405162461bcd60e51b81526020600482015260166024820152751b585cdd195c881d985b5b481b5d5cdd08195e1a5cdd60521b60448201526064016200028c565b6002546001600160a01b0382811691161462000a4057600280546001600160a01b0319166001600160a01b0383161790555b50565b3362000a4e6200097a565b6001600160a01b03161462000a775760405162461bcd60e51b81526004016200028c90620010f5565b6001600160a01b03821662000ac75760405162461bcd60e51b81526020600482015260156024820152741b585cdd195c881998db481b5d5cdd08195e1a5cdd605a1b60448201526064016200028c565b60ff811660008181526003602090815260409182902080546001600160a01b0319166001600160a01b0387169081179091558251908152908101929092527fcece9976caa53e350e3311c87df72b4ed94d768ba03a4688cdf331121bf613c2910160405180910390a15050565b3362000b3f6200097a565b6001600160a01b03161462000b685760405162461bcd60e51b81526004016200028c90620010f5565b6001600160a01b03811662000bb75760405162461bcd60e51b81526020600482015260146024820152731b585cdd195c881b59481b5d5cdd08195e1a5cdd60621b60448201526064016200028c565b6001546001600160a01b0382811691161462000a4057600180546001600160a01b0383166001600160a01b031990911617905550565b60006001600160a01b03831662000c3e5760405162461bcd60e51b81526020600482015260146024820152731bdddb995c88191bd95cc81b9bdd08195e1a5cdd60621b60448201526064016200028c565b6001600160a01b03821662000c8b5760405162461bcd60e51b81526020600482015260126024820152711a5b9d08191bd95cc81b9bdd08195e1a5cdd60721b60448201526064016200028c565b6005546001600160a01b038381169116141562000cab5750600162000cd6565b506001600160a01b0380831660009081526004602090815260408083209385168352929052205460ff165b92915050565b3362000ce76200097a565b6001600160a01b03161462000d105760405162461bcd60e51b81526004016200028c90620010f5565b6001600160a01b03811662000d5f5760405162461bcd60e51b81526020600482015260146024820152731c195c9a5c1a195c9e481b5d5cdd08195e1a5cdd60621b60448201526064016200028c565b6005546001600160a01b0382811691161462000a4057600580546001600160a01b0319166001600160a01b0383169081179091556040517f9d41c928e1b7d55eb20c9906b2cc3223035dd4dc2c59e5fcd2282e857db1b0509162000dc391620010be565b60405180910390a150565b3360008181526004602090815260408083206001600160a01b0387168085529252808320805460ff19168615159081179091559051909391927f1d3e246ebbc933bf65d3290db9f93d67ab91a12d2b19308a35806e04d1c174c591a45050565b3362000e396200097a565b6001600160a01b03161462000e625760405162461bcd60e51b81526004016200028c90620010f5565b6001600160a01b03811662000ec95760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b60648201526084016200028c565b62000a40815b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b610782806200115183390190565b60006020828403121562000f3f578081fd5b813562000f4c816200112a565b9392505050565b6000806040838503121562000f66578081fd5b823562000f73816200112a565b9150602083013562000f85816200112a565b809150509250929050565b6000806040838503121562000fa3578182fd5b823562000fb0816200112a565b91506020830135801515811462000f85578182fd5b60006020828403121562000fd7578081fd5b815162000f4c816200112a565b600080600080600060a0868803121562000ffc578081fd5b853562001009816200112a565b945060208601356200101b816200112a565b935060408601359250606086013591506080860135600281900b811462001040578182fd5b809150509295509295909350565b6000806040838503121562001061578182fd5b82356200106e816200112a565b9150602083013562000f858162001140565b60006020828403121562001092578081fd5b813562000f4c8162001140565b600060208284031215620010b1578081fd5b815162000f4c8162001140565b6001600160a01b0391909116815260200190565b6001600160a01b0391909116815260406020820181905260009082015260600190565b6020808252818101527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604082015260600190565b6001600160a01b038116811462000a4057600080fd5b60ff8116811462000a4057600080fdfe608060405260405161078238038061078283398101604081905261002291610307565b818161004f60017f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbd61041f565b60008051602061073b8339815191521461007957634e487b7160e01b600052600160045260246000fd5b6100858282600061008e565b50505050610484565b610097836100c4565b6000825111806100a45750805b156100bf576100bd838361010460201b6100291760201c565b505b505050565b6100cd81610130565b6040516001600160a01b038216907fbc7cd75a20ee27fd9adebab32041f755214dbc6bffa90cc0225b39da2e5c2d3b90600090a250565b6060610129838360405180606001604052806027815260200161075b602791396101f0565b9392505050565b610143816102c560201b6100551760201c565b6101aa5760405162461bcd60e51b815260206004820152602d60248201527f455243313936373a206e657720696d706c656d656e746174696f6e206973206e60448201526c1bdd08184818dbdb9d1c9858dd609a1b60648201526084015b60405180910390fd5b806101cf60008051602061073b83398151915260001b6102cb60201b61005b1760201c565b80546001600160a01b0319166001600160a01b039290921691909117905550565b6060833b61024f5760405162461bcd60e51b815260206004820152602660248201527f416464726573733a2064656c65676174652063616c6c20746f206e6f6e2d636f6044820152651b9d1c9858dd60d21b60648201526084016101a1565b600080856001600160a01b03168560405161026a91906103d0565b600060405180830381855af49150503d80600081146102a5576040519150601f19603f3d011682016040523d82523d6000602084013e6102aa565b606091505b5090925090506102bb8282866102ce565b9695505050505050565b3b151590565b90565b606083156102dd575081610129565b8251156102ed5782518084602001fd5b8160405162461bcd60e51b81526004016101a191906103ec565b60008060408385031215610319578182fd5b82516001600160a01b038116811461032f578283fd5b60208401519092506001600160401b038082111561034b578283fd5b818501915085601f83011261035e578283fd5b8151818111156103705761037061046e565b604051601f8201601f19908116603f011681019083821181831017156103985761039861046e565b816040528281528860208487010111156103b0578586fd5b6103c1836020830160208801610442565b80955050505050509250929050565b600082516103e2818460208701610442565b9190910192915050565b602081526000825180602084015261040b816040850160208701610442565b601f01601f19169190910160400192915050565b60008282101561043d57634e487b7160e01b81526011600452602481fd5b500390565b60005b8381101561045d578181015183820152602001610445565b838111156100bd5750506000910152565b634e487b7160e01b600052604160045260246000fd5b6102a8806104936000396000f3fe60806040523661001357610011610017565b005b6100115b61002761002261005e565b610096565b565b606061004e838360405180606001604052806027815260200161024c602791396100ba565b9392505050565b3b151590565b90565b60006100917f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc546001600160a01b031690565b905090565b3660008037600080366000845af43d6000803e8080156100b5573d6000f35b3d6000fd5b6060833b61011e5760405162461bcd60e51b815260206004820152602660248201527f416464726573733a2064656c65676174652063616c6c20746f206e6f6e2d636f6044820152651b9d1c9858dd60d21b60648201526084015b60405180910390fd5b600080856001600160a01b03168560405161013991906101cc565b600060405180830381855af49150503d8060008114610174576040519150601f19603f3d011682016040523d82523d6000602084013e610179565b606091505b5091509150610189828286610193565b9695505050505050565b606083156101a257508161004e565b8251156101b25782518084602001fd5b8160405162461bcd60e51b815260040161011591906101e8565b600082516101de81846020870161021b565b9190910192915050565b602081526000825180602084015261020781604085016020870161021b565b601f01601f19169190910160400192915050565b60005b8381101561023657818101518382015260200161021e565b83811115610245576000848401525b5050505056fe416464726573733a206c6f772d6c6576656c2064656c65676174652063616c6c206661696c6564a2646970667358221220c19de60153ce9e819289c474dd5d8ebf657621be2d8b0d4cfc4fea4e35a8e10564736f6c63430008040033360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc416464726573733a206c6f772d6c6576656c2064656c65676174652063616c6c206661696c6564a26469706673582212205862261992263912847ba28ec04429cda0e34ff07c40469a9a4160363f165c2764736f6c63430008040033";

export class Factory__factory extends ContractFactory {
  constructor(
    ...args: [signer: Signer] | ConstructorParameters<typeof ContractFactory>
  ) {
    if (args.length === 1) {
      super(_abi, _bytecode, args[0]);
    } else {
      super(...args);
    }
  }

  deploy(
    _masterMarginEngine: string,
    _masterVAMM: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<Factory> {
    return super.deploy(
      _masterMarginEngine,
      _masterVAMM,
      overrides || {}
    ) as Promise<Factory>;
  }
  getDeployTransaction(
    _masterMarginEngine: string,
    _masterVAMM: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      _masterMarginEngine,
      _masterVAMM,
      overrides || {}
    );
  }
  attach(address: string): Factory {
    return super.attach(address) as Factory;
  }
  connect(signer: Signer): Factory__factory {
    return super.connect(signer) as Factory__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): FactoryInterface {
    return new utils.Interface(_abi) as FactoryInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Factory {
    return new Contract(address, _abi, signerOrProvider) as Factory;
  }
}
