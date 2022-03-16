/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { AaveFCM, AaveFCMInterface } from "../AaveFCM";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "CannotSettleBeforeMaturity",
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
    name: "MarginRequirementNotMet",
    type: "error",
  },
  {
    inputs: [],
    name: "OnlyMarginEngine",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "int256",
        name: "x",
        type: "int256",
      },
    ],
    name: "PRBMathSD59x18__FromIntOverflow",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "int256",
        name: "x",
        type: "int256",
      },
    ],
    name: "PRBMathSD59x18__FromIntUnderflow",
    type: "error",
  },
  {
    inputs: [],
    name: "PRBMathSD59x18__MulInputTooSmall",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "rAbs",
        type: "uint256",
      },
    ],
    name: "PRBMathSD59x18__MulOverflow",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "x",
        type: "uint256",
      },
    ],
    name: "PRBMathUD60x18__FromUintOverflow",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "prod1",
        type: "uint256",
      },
    ],
    name: "PRBMath__MulDivFixedPointOverflow",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "prod1",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "denominator",
        type: "uint256",
      },
    ],
    name: "PRBMath__MulDivOverflow",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "previousAdmin",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "newAdmin",
        type: "address",
      },
    ],
    name: "AdminChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "beacon",
        type: "address",
      },
    ],
    name: "BeaconUpgraded",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "marginInScaledYieldBearingTokens",
        type: "uint256",
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
    ],
    name: "InitiateFullyCollateralisedSwap",
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
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "Paused",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "Unpaused",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "implementation",
        type: "address",
      },
    ],
    name: "Upgraded",
    type: "event",
  },
  {
    inputs: [],
    name: "aaveLendingPool",
    outputs: [
      {
        internalType: "contract IAaveV2LendingPool",
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
        name: "traderAddress",
        type: "address",
      },
    ],
    name: "getTraderMarginInATokens",
    outputs: [
      {
        internalType: "uint256",
        name: "marginInYieldBearingTokens",
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
        name: "trader",
        type: "address",
      },
    ],
    name: "getTraderWithYieldBearingAssets",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "marginInScaledYieldBearingTokens",
            type: "uint256",
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
            internalType: "bool",
            name: "isSettled",
            type: "bool",
          },
        ],
        internalType: "struct TraderWithYieldBearingAssets.Info",
        name: "traderInfo",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_vammAddress",
        type: "address",
      },
      {
        internalType: "address",
        name: "_marginEngineAddress",
        type: "address",
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
        internalType: "uint256",
        name: "notional",
        type: "uint256",
      },
      {
        internalType: "uint160",
        name: "sqrtPriceLimitX96",
        type: "uint160",
      },
    ],
    name: "initiateFullyCollateralisedFixedTakerSwap",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "marginEngine",
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
    name: "paused",
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
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "settleTrader",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "traders",
    outputs: [
      {
        internalType: "uint256",
        name: "marginInScaledYieldBearingTokens",
        type: "uint256",
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
        internalType: "bool",
        name: "isSettled",
        type: "bool",
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
        name: "marginDeltaInUnderlyingTokens",
        type: "uint256",
      },
    ],
    name: "transferMarginToMarginEngineTrader",
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
    inputs: [],
    name: "underlyingYieldBearingToken",
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
        internalType: "uint256",
        name: "notionalToUnwind",
        type: "uint256",
      },
      {
        internalType: "uint160",
        name: "sqrtPriceLimitX96",
        type: "uint160",
      },
    ],
    name: "unwindFullyCollateralisedFixedTakerSwap",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newImplementation",
        type: "address",
      },
    ],
    name: "upgradeTo",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newImplementation",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "upgradeToAndCall",
    outputs: [],
    stateMutability: "payable",
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

const _bytecode =
  "0x60a06040523060601b6080523480156200001857600080fd5b50606354610100900460ff16620000365760635460ff161562000040565b62000040620000e5565b620000a85760405162461bcd60e51b815260206004820152602e60248201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160448201526d191e481a5b9a5d1a585b1a5e995960921b606482015260840160405180910390fd5b606354610100900460ff16158015620000cb576063805461ffff19166101011790555b8015620000de576063805461ff00191690555b5062000109565b6000620000fd306200010360201b620017361760201c565b15905090565b3b151590565b60805160601c6132b46200013d6000396000818161065b0152818161069b01528181610b330152610b7301526132b46000f3fe6080604052600436106100ee5760003560e01c80624006e0146100f357806303742274146101235780632495a59914610145578063357d8b5e146101655780633659cfe6146101835780634342891f146101a3578063485cc955146101d15780634f1ef286146101f157806355468a8b146102045780635c975abb14610224578063715018a6146102475780638da5cb5b1461025c57806392a88fa21461027157806398f4b1b2146102da5780639a2f48f5146102f8578063c1ccfa681461034d578063e098372c1461036d578063e9d337b81461038b578063ebc9b02e146103a9578063f2fde38b146103be575b600080fd5b3480156100ff57600080fd5b506001546001600160a01b03165b60405161011a9190612e23565b60405180910390f35b34801561012f57600080fd5b5061014361013e366004612db7565b6103de565b005b34801561015157600080fd5b5060045461010d906001600160a01b031681565b34801561017157600080fd5b506032546001600160a01b031661010d565b34801561018f57600080fd5b5061014361019e366004612b17565b610650565b3480156101af57600080fd5b506101c36101be366004612b17565b610719565b60405190815260200161011a565b3480156101dd57600080fd5b506101436101ec366004612b4f565b610741565b6101436101ff366004612b87565b610b28565b34801561021057600080fd5b5061014361021f366004612db7565b610be2565b34801561023057600080fd5b5060c85460ff16604051901515815260200161011a565b34801561025357600080fd5b50610143610ee7565b34801561026857600080fd5b5061010d610f22565b34801561027d57600080fd5b506102b861028c366004612b17565b600360208190526000918252604090912080546001820154600283015492909301549092919060ff1684565b604080519485526020850193909352918301521515606082015260800161011a565b3480156102e657600080fd5b506000546001600160a01b031661010d565b34801561030457600080fd5b50610318610313366004612b17565b610f31565b60405161011a919081518152602080830151908201526040808301519082015260609182015115159181019190915260800190565b34801561035957600080fd5b50610143610368366004612c28565b610fae565b34801561037957600080fd5b506002546001600160a01b031661010d565b34801561039757600080fd5b506031546001600160a01b031661010d565b3480156103b557600080fd5b50610143611154565b3480156103ca57600080fd5b506101436103d9366004612b17565b611699565b336000908152600360205260409020600281015483906103fd90613168565b10156104505760405162461bcd60e51b815260206004820152601d60248201527f6e6f74696f6e616c20746f20756e77696e64203e206e6f74696f6e616c00000060448201526064015b60405180910390fd5b60006040518060a00160405280306001600160a01b031681526020018561047690613168565b81526001600160a01b03851660208201526001546040909101906104a390600160a01b900460020b613147565b600290810b8252600154600160a01b9004810b810b602090920191909152546040516333bac73760e11b8152919250600091829182916001600160a01b03909116906367758e6e906104f9908790600401612f88565b60a060405180830381600087803b15801561051357600080fd5b505af1158015610527573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061054b9190612c74565b509295509093509150610561905085848461173c565b6031546004805460405163d15e005360e01b81526000936001600160a01b039081169363d15e0053936105979392169101612e23565b60206040518083038186803b1580156105af57600080fd5b505afa1580156105c3573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105e79190612d9f565b905060006105f584836117ab565b87546106019190613104565b808855905061060f87611889565b60015460045461062e916001600160a01b039182169133911686611959565b603254610645906001600160a01b031633866119ed565b505050505050505050565b306001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001614156106995760405162461bcd60e51b815260040161044790612e94565b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03166106cb611a66565b6001600160a01b0316146106f15760405162461bcd60e51b815260040161044790612ece565b6106fa81611a82565b6040805160008082526020820190925261071691839190611ab1565b50565b6001600160a01b038116600090815260036020526040812061073a81611bf1565b9392505050565b606354610100900460ff1661075c5760635460ff1615610760565b303b155b6107c35760405162461bcd60e51b815260206004820152602e60248201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160448201526d191e481a5b9a5d1a585b1a5e995960921b6064820152608401610447565b606354610100900460ff161580156107e5576063805461ffff19166101011790555b600280546001600160a01b038086166001600160a01b03199283161790925560018054928516929091168217905560408051634c7a58d960e11b815290516398f4b1b291600480820192602092909190829003018186803b15801561084957600080fd5b505afa15801561085d573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108819190612b33565b600080546001600160a01b0319166001600160a01b0392909216918217905560408051631d3a66f760e31b8152905163e9d337b891600480820192602092909190829003018186803b1580156108d657600080fd5b505afa1580156108ea573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061090e9190612b33565b603180546001600160a01b0319166001600160a01b0392831617905560015460408051632495a59960e01b815290516000939290921691632495a59991600480820192602092909190829003018186803b15801561096b57600080fd5b505afa15801561097f573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906109a39190612b33565b600480546001600160a01b0319166001600160a01b038381169190911782556031546040516335ea6a7560e01b81529394506000939116916335ea6a75916109ed91869101612e23565b6101806040518083038186803b158015610a0657600080fd5b505afa158015610a1a573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610a3e9190612cb3565b60e0810151603280546001600160a01b0319166001600160a01b03928316179055600254604080516334324e9f60e21b8152905193945091169163d0c93a7c91600480820192602092909190829003018186803b158015610a9e57600080fd5b505afa158015610ab2573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610ad69190612c53565b600160146101000a81548162ffffff021916908360020b62ffffff160217905550610aff611cfb565b610b07611d32565b610b0f611d69565b50508015610b23576063805461ff00191690555b505050565b306001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000161415610b715760405162461bcd60e51b815260040161044790612e94565b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316610ba3611a66565b6001600160a01b031614610bc95760405162461bcd60e51b815260040161044790612ece565b610bd282611a82565b610bde82826001611ab1565b5050565b81610c1e5760405162461bcd60e51b815260206004820152600c60248201526b06e6f74696f6e616c203d20360a41b6044820152606401610447565b60006040518060a00160405280306001600160a01b03168152602001848152602001836001600160a01b03168152602001600160149054906101000a900460020b610c6890613147565b600290810b8252600154600160a01b9004810b810b602090920191909152546040516333bac73760e11b8152919250600091829182916001600160a01b03909116906367758e6e90610cbe908790600401612f88565b60a060405180830381600087803b158015610cd857600080fd5b505af1158015610cec573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610d109190612c74565b50503360009081526003602090815260408083206031546001548351632495a59960e01b81529351989b509699509497509592946001600160a01b039485169463d15e005394911692632495a5999260048082019391829003018186803b158015610d7a57600080fd5b505afa158015610d8e573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610db29190612b33565b6040518263ffffffff1660e01b8152600401610dce9190612e23565b60206040518083038186803b158015610de657600080fd5b505afa158015610dfa573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610e1e9190612d9f565b90506000610e3582610e2f87613168565b906117ab565b8354610e41919061306e565b8084559050610e5183878761173c565b610e733330610e5f88613168565b6032546001600160a01b0316929190611959565b600154600454610e92916001600160a01b039182169133911687611959565b82546001840154600285015460408051938452602084019290925282820152517f49a6df809efcd0c8ca0f075e38d001d328110e3e0c419ea639e7fead98f1e43b9181900360600190a1505050505050505050565b33610ef0610f22565b6001600160a01b031614610f165760405162461bcd60e51b815260040161044790612f08565b610f206000611da0565b565b6096546001600160a01b031690565b610f5e60405180608001604052806000815260200160008152602001600081526020016000151581525090565b506001600160a01b031660009081526003602081815260409283902083516080810185528154815260018201549281019290925260028101549382019390935291015460ff161515606082015290565b6001546001600160a01b03163314610fd957604051630a0d349f60e21b815260040160405180910390fd5b60c85460ff161561101f5760405162461bcd60e51b815260206004820152601060248201526f14185d5cd8589b194e881c185d5cd95960821b6044820152606401610447565b600480546032546040516370a0823160e01b815284936001600160a01b03938416936370a08231936110549391169101612e23565b60206040518083038186803b15801561106c57600080fd5b505afa158015611080573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906110a49190612d9f565b1061113d5760315460048054604051631a4ca37b60e21b81526001600160a01b0391821692810192909252602482018490528481166044830152909116906369328dec90606401602060405180830381600087803b15801561110557600080fd5b505af1158015611119573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610b239190612d9f565b603254610bde906001600160a01b031683836119ed565b61115c611df2565b600160009054906101000a90046001600160a01b03166001600160a01b03166393edb4546040518163ffffffff1660e01b815260040160206040518083038186803b1580156111aa57600080fd5b505afa1580156111be573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906111e29190612d9f565b1115611201576040516301730b8160e11b815260040160405180910390fd5b33600090815260036020908152604080832060018082015460028301549154845163652c30b760e01b815294519396956114aa9592946001600160a01b039092169263652c30b79260048083019392829003018186803b15801561126457600080fd5b505afa158015611278573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061129c9190612d9f565b600160009054906101000a90046001600160a01b03166001600160a01b03166393edb4546040518163ffffffff1660e01b815260040160206040518083038186803b1580156112ea57600080fd5b505afa1580156112fe573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906113229190612d9f565b6000546001546040805163652c30b760e01b815290516001600160a01b03938416936325f258dd93169163652c30b7916004808301926020929190829003018186803b15801561137157600080fd5b505afa158015611385573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906113a99190612d9f565b600160009054906101000a90046001600160a01b03166001600160a01b03166393edb4546040518163ffffffff1660e01b815260040160206040518083038186803b1580156113f757600080fd5b505afa15801561140b573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061142f9190612d9f565b6040516001600160e01b031960e085901b16815260048101929092526024820152604401602060405180830381600087803b15801561146d57600080fd5b505af1158015611481573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906114a59190612d9f565b611e02565b90506114d382600101546114bd90613168565b83600201546114cb90613168565b84919061173c565b60008112156115f65760315460015460408051632495a59960e01b815290516000936001600160a01b039081169363d15e005393911691632495a59991600480820192602092909190829003018186803b15801561153057600080fd5b505afa158015611544573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906115689190612b33565b6040518263ffffffff1660e01b81526004016115849190612e23565b60206040518083038186803b15801561159c57600080fd5b505afa1580156115b0573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906115d49190612d9f565b905060006115e582610e2f85613168565b84546115f19190613104565b845550505b600061160183611bf1565b60008455905061161083611e6a565b603254611627906001600160a01b031633836119ed565b6000821315610b235760015460405163efcfc3f960e01b8152336004820152602481018490526001600160a01b039091169063efcfc3f990604401600060405180830381600087803b15801561167c57600080fd5b505af1158015611690573d6000803e3d6000fd5b50505050505050565b336116a2610f22565b6001600160a01b0316146116c85760405162461bcd60e51b815260040161044790612f08565b6001600160a01b03811661172d5760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b6064820152608401610447565b61071681611da0565b3b151590565b6040805160808101825284548152600185015460208201819052600286015492820192909252600385015460ff16151560608201529060009061178090859061302d565b90506000838360400151611794919061302d565b600187019290925550600290940193909355505050565b604080518082019091526002815261035360f41b6020820152600090826117e55760405162461bcd60e51b81526004016104479190612e37565b5060006117f3600284613086565b9050676765c793fa10079d601b1b61180d82600019613104565b6118179190613086565b84111560405180604001604052806002815260200161068760f31b815250906118535760405162461bcd60e51b81526004016104479190612e37565b50828161186b676765c793fa10079d601b1b876130a6565b611875919061306e565b61187f9190613086565b9150505b92915050565b6000816002015461189990613168565b90506118c56040518060600160405280602b815260200161322d602b91396118c084611bf1565b611ec1565b6118e76040518060600160405280602981526020016131c46029913982611ec1565b6118ef611f0f565b6000816118fb84611bf1565b61190591906130c5565b9050600061191284611f27565b90506000811215611953578161192782613168565b131561195357611937818461302d565b604051636d0163ff60e11b815260040161044791815260200190565b50505050565b60006040516323b872dd60e01b81526001600160a01b03851660048201526001600160a01b038416602482015282604482015260008060648360008a5af19150506119a381612226565b6119e65760405162461bcd60e51b81526020600482015260146024820152731514905394d1915497d19493d357d1905253115160621b6044820152606401610447565b5050505050565b600060405163a9059cbb60e01b81526001600160a01b03841660048201528260248201526000806044836000895af1915050611a2881612226565b6119535760405162461bcd60e51b815260206004820152600f60248201526e1514905394d1915497d19052531151608a1b6044820152606401610447565b60008051602061320d833981519152546001600160a01b031690565b33611a8b610f22565b6001600160a01b0316146107165760405162461bcd60e51b815260040161044790612f08565b6000611abb611a66565b9050611ac68461226d565b600083511180611ad35750815b15611ae457611ae28484612300565b505b7f4910fdfa16fed3260ed0e7147f7cc6da11a60208b5b9406d12a635614ffd9143805460ff166119e657805460ff19166001178155604051611b5f908690611b30908590602401612e23565b60408051601f198184030181529190526020810180516001600160e01b0316631b2ce7f360e11b179052612300565b50805460ff19168155611b70611a66565b6001600160a01b0316826001600160a01b031614611be85760405162461bcd60e51b815260206004820152602f60248201527f45524331393637557067726164653a207570677261646520627265616b73206660448201526e75727468657220757067726164657360881b6064820152608401610447565b6119e6856123eb565b60315460015460408051632495a59960e01b8152905160009384936001600160a01b039182169363d15e0053939190921691632495a599916004808301926020929190829003018186803b158015611c4857600080fd5b505afa158015611c5c573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611c809190612b33565b6040518263ffffffff1660e01b8152600401611c9c9190612e23565b60206040518083038186803b158015611cb457600080fd5b505afa158015611cc8573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611cec9190612d9f565b835490915061073a908261242b565b606354610100900460ff16611d225760405162461bcd60e51b815260040161044790612f3d565b611d2a6124e4565b610f2061250b565b606354610100900460ff16611d595760405162461bcd60e51b815260040161044790612f3d565b611d616124e4565b610f2061253b565b606354610100900460ff16611d905760405162461bcd60e51b815260040161044790612f3d565b611d986124e4565b610f206124e4565b609680546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b6000611dfd4261256e565b905090565b600080611e0e876125bb565b90506000611e1b876125bb565b90506000611e3483611e2f60018a8a612638565b61271c565b90506000611e42838761271c565b90506000611e50828461302d565b670de0b6b3a764000090059b9a5050505050505050505050565b600381015460ff1615611eb15760405162461bcd60e51b815260206004820152600f60248201526e185b1c9958591e481cd95d1d1b1959608a1b6044820152606401610447565b600301805460ff19166001179055565b610bde82604051806040016040528060018152602001601d60f91b81525083604051806040016040528060118152602001700102da32927a69021a7a72a2920a1aa2e9607d1b8152506127de565b610f2060405180602001604052806000815250612827565b600080611f3783600101546125bb565b90506000611f4884600201546125bb565b9050600061206583611e2f60018060009054906101000a90046001600160a01b03166001600160a01b031663652c30b76040518163ffffffff1660e01b815260040160206040518083038186803b158015611fa257600080fd5b505afa158015611fb6573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611fda9190612d9f565b600160009054906101000a90046001600160a01b03166001600160a01b03166393edb4546040518163ffffffff1660e01b815260040160206040518083038186803b15801561202857600080fd5b505afa15801561203c573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906120609190612d9f565b612638565b600080546001546040805163652c30b760e01b8152905194955092936001600160a01b03928316936325f258dd939092169163652c30b7916004808301926020929190829003018186803b1580156120bc57600080fd5b505afa1580156120d0573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906120f49190612d9f565b600160009054906101000a90046001600160a01b03166001600160a01b03166393edb4546040518163ffffffff1660e01b815260040160206040518083038186803b15801561214257600080fd5b505afa158015612156573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061217a9190612d9f565b6040516001600160e01b031960e085901b16815260048101929092526024820152604401602060405180830381600087803b1580156121b857600080fd5b505af11580156121cc573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906121f09190612d9f565b905060006121fe848361271c565b9050600061220c828561302d565b9050670de0b6b3a764000081055b98975050505050505050565b60003d8261223857806000803e806000fd5b80602081146122505780156122615760009250612266565b816000803e60005115159250612266565b600192505b5050919050565b803b6122d15760405162461bcd60e51b815260206004820152602d60248201527f455243313936373a206e657720696d706c656d656e746174696f6e206973206e60448201526c1bdd08184818dbdb9d1c9858dd609a1b6064820152608401610447565b60008051602061320d83398151915280546001600160a01b0319166001600160a01b0392909216919091179055565b6060823b61235f5760405162461bcd60e51b815260206004820152602660248201527f416464726573733a2064656c65676174652063616c6c20746f206e6f6e2d636f6044820152651b9d1c9858dd60d21b6064820152608401610447565b600080846001600160a01b03168460405161237a9190612e07565b600060405180830381855af49150503d80600081146123b5576040519150601f19603f3d011682016040523d82523d6000602084013e6123ba565b606091505b50915091506123e282826040518060600160405280602781526020016132586027913961286a565b95945050505050565b6123f48161226d565b6040516001600160a01b038216907fbc7cd75a20ee27fd9adebab32041f755214dbc6bffa90cc0225b39da2e5c2d3b90600090a250565b6000821580612438575081155b1561244557506000611883565b8161245c6002676765c793fa10079d601b1b613086565b61246890600019613104565b6124729190613086565b83111560405180604001604052806002815260200161068760f31b815250906124ae5760405162461bcd60e51b81526004016104479190612e37565b50676765c793fa10079d601b1b6124c6600282613086565b6124d084866130a6565b6124da919061306e565b61073a9190613086565b606354610100900460ff16610f205760405162461bcd60e51b815260040161044790612f3d565b606354610100900460ff166125325760405162461bcd60e51b815260040161044790612f3d565b610f2033611da0565b606354610100900460ff166125625760405162461bcd60e51b815260040161044790612f3d565b60c8805460ff19169055565b60007812725dd1d243aba0e75fe645cc4873f9e65afe688c928e1f218211156125ad57604051633492ffd960e01b815260048101839052602401610447565b50670de0b6b3a76400000290565b60007809392ee8e921d5d073aff322e62439fcf32d7f344649470f8f198212156125fb5760405163e608e18b60e01b815260048101839052602401610447565b7809392ee8e921d5d073aff322e62439fcf32d7f344649470f908213156125ad576040516371f72a3160e01b815260048101839052602401610447565b60008282116126725760405162461bcd60e51b815260040161044790602080825260049082015263453c3d5360e01b604082015260600190565b8261267b611df2565b10156126b15760405162461bcd60e51b8152602060048201526005602482015264422e543c5360d81b6044820152606401610447565b600084806126c65750826126c3611df2565b10155b156126dc576126d58484613104565b90506126f2565b836126e5611df2565b6126ef9190613104565b90505b60006126fd826128a3565b90506127128168056bc75e2d631000006128b6565b9695505050505050565b6000600160ff1b8314806127335750600160ff1b82145b1561275157604051630d01a11b60e21b815260040160405180910390fd5b600080600085126127625784612767565b846000035b915060008412612777578361277c565b836000035b9050600061278a83836128cb565b90506001600160ff1b038111156127b75760405163bf79e8d960e01b815260048101829052602401610447565b6000198087139086138082186001146127d0578261221a565b505060000395945050505050565b611953848484846040516024016127f89493929190612e4a565b60408051601f198184030181529190526020810180516001600160e01b0316638d142cdd60e01b17905261298d565b6107168160405160240161283b9190612e37565b60408051601f198184030181529190526020810180516001600160e01b031663104c13eb60e21b17905261298d565b6060831561287957508161073a565b8251156128895782518084602001fd5b8160405162461bcd60e51b81526004016104479190612e37565b6000611883826a1a1601fc4ea7109e0000005b600061073a83670de0b6b3a7640000846129ae565b60008080600019848609848602925082811083820303915050670de0b6b3a7640000811061290f5760405163698d9a0160e11b815260048101829052602401610447565b600080670de0b6b3a76400008688099150506706f05b59d3b1ffff8111826129495780670de0b6b3a7640000850401945050505050611883565b620400008285030493909111909103600160ee1b02919091177faccb18165bd6fe31ae1cf318dc5b51eee0e1ba569b88cd74c1773b91fac106690201905092915050565b80516a636f6e736f6c652e6c6f67602083016000808483855afa5050505050565b6000808060001985870985870292508281108382030391505080600014156129f7578382816129ed57634e487b7160e01b600052601260045260246000fd5b049250505061073a565b838110612a2157604051631dcf306360e21b81526004810182905260248101859052604401610447565b60008486880960026001871981018816978890046003810283188082028403028082028403028082028403028082028403028082028403029081029092039091026000889003889004909101858311909403939093029303949094049190911702949350505050565b8051612a95816131ae565b919050565b600060208284031215612aab578081fd5b604051602081016001600160401b0381118282101715612acd57612acd613198565b6040529151825250919050565b80516001600160801b0381168114612a9557600080fd5b805164ffffffffff81168114612a9557600080fd5b805160ff81168114612a9557600080fd5b600060208284031215612b28578081fd5b813561073a816131ae565b600060208284031215612b44578081fd5b815161073a816131ae565b60008060408385031215612b61578081fd5b8235612b6c816131ae565b91506020830135612b7c816131ae565b809150509250929050565b60008060408385031215612b99578182fd5b8235612ba4816131ae565b91506020838101356001600160401b0380821115612bc0578384fd5b818601915086601f830112612bd3578384fd5b813581811115612be557612be5613198565b612bf7601f8201601f19168501612ffd565b91508082528784828501011115612c0c578485fd5b8084840185840137810190920192909252919491935090915050565b60008060408385031215612c3a578182fd5b8235612c45816131ae565b946020939093013593505050565b600060208284031215612c64578081fd5b81518060020b811461073a578182fd5b600080600080600060a08688031215612c8b578081fd5b5050835160208501516040860151606087015160809097015192989197509594509092509050565b60006101808284031215612cc5578081fd5b612ccd612fd4565b612cd78484612a9a565b8152612ce560208401612ada565b6020820152612cf660408401612ada565b6040820152612d0760608401612ada565b6060820152612d1860808401612ada565b6080820152612d2960a08401612ada565b60a0820152612d3a60c08401612af1565b60c0820152612d4b60e08401612a8a565b60e0820152610100612d5e818501612a8a565b90820152610120612d70848201612a8a565b90820152610140612d82848201612a8a565b90820152610160612d94848201612b06565b908201529392505050565b600060208284031215612db0578081fd5b5051919050565b60008060408385031215612dc9578182fd5b823591506020830135612b7c816131ae565b60008151808452612df381602086016020860161311b565b601f01601f19169290920160200192915050565b60008251612e1981846020870161311b565b9190910192915050565b6001600160a01b0391909116815260200190565b60208152600061073a6020830184612ddb565b608081526000612e5d6080830187612ddb565b8281036020840152612e6f8187612ddb565b90508460408401528281036060840152612e898185612ddb565b979650505050505050565b6020808252602c908201526000805160206131ed83398151915260408201526b19195b1959d85d1958d85b1b60a21b606082015260800190565b6020808252602c908201526000805160206131ed83398151915260408201526b6163746976652070726f787960a01b606082015260800190565b6020808252818101527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604082015260600190565b6020808252602b908201527f496e697469616c697a61626c653a20636f6e7472616374206973206e6f74206960408201526a6e697469616c697a696e6760a81b606082015260800190565b600060a08201905060018060a01b038084511683526020840151602084015280604085015116604084015250606083015160020b6060830152608083015160020b608083015292915050565b60405161018081016001600160401b0381118282101715612ff757612ff7613198565b60405290565b604051601f8201601f191681016001600160401b038111828210171561302557613025613198565b604052919050565b600080821280156001600160ff1b038490038513161561304f5761304f613182565b600160ff1b839003841281161561306857613068613182565b50500190565b6000821982111561308157613081613182565b500190565b6000826130a157634e487b7160e01b81526012600452602481fd5b500490565b60008160001904831182151516156130c0576130c0613182565b500290565b60008083128015600160ff1b8501841216156130e3576130e3613182565b6001600160ff1b03840183138116156130fe576130fe613182565b50500390565b60008282101561311657613116613182565b500390565b60005b8381101561313657818101518382015260200161311e565b838111156119535750506000910152565b60008160020b627fffff1981141561316157613161613182565b9003919050565b6000600160ff1b82141561317e5761317e613182565b0390565b634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052604160045260246000fd5b6001600160a01b038116811461071657600080fdfe6d617267696e546f436f7665725661726961626c654c656746726f6d4e6f77546f4d6174757269747946756e6374696f6e206d7573742062652063616c6c6564207468726f75676820360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc6765745472616465724d617267696e496e5969656c6442656172696e67546f6b656e732874726164657229416464726573733a206c6f772d6c6576656c2064656c65676174652063616c6c206661696c6564a2646970667358221220fa70e60a85be31c328a80a9985948e43f5df08db888b12ab50f4bec157200e3e64736f6c63430008040033";

export class AaveFCM__factory extends ContractFactory {
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
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<AaveFCM> {
    return super.deploy(overrides || {}) as Promise<AaveFCM>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): AaveFCM {
    return super.attach(address) as AaveFCM;
  }
  connect(signer: Signer): AaveFCM__factory {
    return super.connect(signer) as AaveFCM__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): AaveFCMInterface {
    return new utils.Interface(_abi) as AaveFCMInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): AaveFCM {
    return new Contract(address, _abi, signerOrProvider) as AaveFCM;
  }
}
