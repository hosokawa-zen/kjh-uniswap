/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
} from "ethers";
import {
  Contract,
  ContractTransaction,
  Overrides,
  CallOverrides,
} from "@ethersproject/contracts";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";

interface Multicall2Interface extends ethers.utils.Interface {
  functions: {
    "aggregate(tuple[])": FunctionFragment;
    "blockAndAggregate(tuple[])": FunctionFragment;
    "getBlockHash(uint256)": FunctionFragment;
    "getBlockNumber()": FunctionFragment;
    "getCurrentBlockCoinbase()": FunctionFragment;
    "getCurrentBlockDifficulty()": FunctionFragment;
    "getCurrentBlockGasLimit()": FunctionFragment;
    "getCurrentBlockTimestamp()": FunctionFragment;
    "getEthBalance(address)": FunctionFragment;
    "getLastBlockHash()": FunctionFragment;
    "tryAggregate(bool,tuple[])": FunctionFragment;
    "tryBlockAndAggregate(bool,tuple[])": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "aggregate",
    values: [{ target: string; callData: BytesLike }[]]
  ): string;
  encodeFunctionData(
    functionFragment: "blockAndAggregate",
    values: [{ target: string; callData: BytesLike }[]]
  ): string;
  encodeFunctionData(
    functionFragment: "getBlockHash",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getBlockNumber",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getCurrentBlockCoinbase",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getCurrentBlockDifficulty",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getCurrentBlockGasLimit",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getCurrentBlockTimestamp",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getEthBalance",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "getLastBlockHash",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "tryAggregate",
    values: [boolean, { target: string; callData: BytesLike }[]]
  ): string;
  encodeFunctionData(
    functionFragment: "tryBlockAndAggregate",
    values: [boolean, { target: string; callData: BytesLike }[]]
  ): string;

  decodeFunctionResult(functionFragment: "aggregate", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "blockAndAggregate",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getBlockHash",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getBlockNumber",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getCurrentBlockCoinbase",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getCurrentBlockDifficulty",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getCurrentBlockGasLimit",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getCurrentBlockTimestamp",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getEthBalance",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getLastBlockHash",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "tryAggregate",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "tryBlockAndAggregate",
    data: BytesLike
  ): Result;

  events: {};
}

export class Multicall2 extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: Multicall2Interface;

  functions: {
    aggregate(
      calls: { target: string; callData: BytesLike }[],
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "aggregate(tuple[])"(
      calls: { target: string; callData: BytesLike }[],
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    blockAndAggregate(
      calls: { target: string; callData: BytesLike }[],
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "blockAndAggregate(tuple[])"(
      calls: { target: string; callData: BytesLike }[],
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    getBlockHash(
      blockNumber: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      blockHash: string;
      0: string;
    }>;

    "getBlockHash(uint256)"(
      blockNumber: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      blockHash: string;
      0: string;
    }>;

    getBlockNumber(overrides?: CallOverrides): Promise<{
      blockNumber: BigNumber;
      0: BigNumber;
    }>;

    "getBlockNumber()"(overrides?: CallOverrides): Promise<{
      blockNumber: BigNumber;
      0: BigNumber;
    }>;

    getCurrentBlockCoinbase(overrides?: CallOverrides): Promise<{
      coinbase: string;
      0: string;
    }>;

    "getCurrentBlockCoinbase()"(overrides?: CallOverrides): Promise<{
      coinbase: string;
      0: string;
    }>;

    getCurrentBlockDifficulty(overrides?: CallOverrides): Promise<{
      difficulty: BigNumber;
      0: BigNumber;
    }>;

    "getCurrentBlockDifficulty()"(overrides?: CallOverrides): Promise<{
      difficulty: BigNumber;
      0: BigNumber;
    }>;

    getCurrentBlockGasLimit(overrides?: CallOverrides): Promise<{
      gaslimit: BigNumber;
      0: BigNumber;
    }>;

    "getCurrentBlockGasLimit()"(overrides?: CallOverrides): Promise<{
      gaslimit: BigNumber;
      0: BigNumber;
    }>;

    getCurrentBlockTimestamp(overrides?: CallOverrides): Promise<{
      timestamp: BigNumber;
      0: BigNumber;
    }>;

    "getCurrentBlockTimestamp()"(overrides?: CallOverrides): Promise<{
      timestamp: BigNumber;
      0: BigNumber;
    }>;

    getEthBalance(
      addr: string,
      overrides?: CallOverrides
    ): Promise<{
      balance: BigNumber;
      0: BigNumber;
    }>;

    "getEthBalance(address)"(
      addr: string,
      overrides?: CallOverrides
    ): Promise<{
      balance: BigNumber;
      0: BigNumber;
    }>;

    getLastBlockHash(overrides?: CallOverrides): Promise<{
      blockHash: string;
      0: string;
    }>;

    "getLastBlockHash()"(overrides?: CallOverrides): Promise<{
      blockHash: string;
      0: string;
    }>;

    tryAggregate(
      requireSuccess: boolean,
      calls: { target: string; callData: BytesLike }[],
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "tryAggregate(bool,tuple[])"(
      requireSuccess: boolean,
      calls: { target: string; callData: BytesLike }[],
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    tryBlockAndAggregate(
      requireSuccess: boolean,
      calls: { target: string; callData: BytesLike }[],
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "tryBlockAndAggregate(bool,tuple[])"(
      requireSuccess: boolean,
      calls: { target: string; callData: BytesLike }[],
      overrides?: Overrides
    ): Promise<ContractTransaction>;
  };

  aggregate(
    calls: { target: string; callData: BytesLike }[],
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "aggregate(tuple[])"(
    calls: { target: string; callData: BytesLike }[],
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  blockAndAggregate(
    calls: { target: string; callData: BytesLike }[],
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "blockAndAggregate(tuple[])"(
    calls: { target: string; callData: BytesLike }[],
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  getBlockHash(
    blockNumber: BigNumberish,
    overrides?: CallOverrides
  ): Promise<string>;

  "getBlockHash(uint256)"(
    blockNumber: BigNumberish,
    overrides?: CallOverrides
  ): Promise<string>;

  getBlockNumber(overrides?: CallOverrides): Promise<BigNumber>;

  "getBlockNumber()"(overrides?: CallOverrides): Promise<BigNumber>;

  getCurrentBlockCoinbase(overrides?: CallOverrides): Promise<string>;

  "getCurrentBlockCoinbase()"(overrides?: CallOverrides): Promise<string>;

  getCurrentBlockDifficulty(overrides?: CallOverrides): Promise<BigNumber>;

  "getCurrentBlockDifficulty()"(overrides?: CallOverrides): Promise<BigNumber>;

  getCurrentBlockGasLimit(overrides?: CallOverrides): Promise<BigNumber>;

  "getCurrentBlockGasLimit()"(overrides?: CallOverrides): Promise<BigNumber>;

  getCurrentBlockTimestamp(overrides?: CallOverrides): Promise<BigNumber>;

  "getCurrentBlockTimestamp()"(overrides?: CallOverrides): Promise<BigNumber>;

  getEthBalance(addr: string, overrides?: CallOverrides): Promise<BigNumber>;

  "getEthBalance(address)"(
    addr: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getLastBlockHash(overrides?: CallOverrides): Promise<string>;

  "getLastBlockHash()"(overrides?: CallOverrides): Promise<string>;

  tryAggregate(
    requireSuccess: boolean,
    calls: { target: string; callData: BytesLike }[],
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "tryAggregate(bool,tuple[])"(
    requireSuccess: boolean,
    calls: { target: string; callData: BytesLike }[],
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  tryBlockAndAggregate(
    requireSuccess: boolean,
    calls: { target: string; callData: BytesLike }[],
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "tryBlockAndAggregate(bool,tuple[])"(
    requireSuccess: boolean,
    calls: { target: string; callData: BytesLike }[],
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  callStatic: {
    aggregate(
      calls: { target: string; callData: BytesLike }[],
      overrides?: CallOverrides
    ): Promise<{
      blockNumber: BigNumber;
      returnData: string[];
      0: BigNumber;
      1: string[];
    }>;

    "aggregate(tuple[])"(
      calls: { target: string; callData: BytesLike }[],
      overrides?: CallOverrides
    ): Promise<{
      blockNumber: BigNumber;
      returnData: string[];
      0: BigNumber;
      1: string[];
    }>;

    blockAndAggregate(
      calls: { target: string; callData: BytesLike }[],
      overrides?: CallOverrides
    ): Promise<{
      blockNumber: BigNumber;
      blockHash: string;
      returnData: {
        success: boolean;
        returnData: string;
        0: boolean;
        1: string;
      }[];
      0: BigNumber;
      1: string;
      2: { success: boolean; returnData: string; 0: boolean; 1: string }[];
    }>;

    "blockAndAggregate(tuple[])"(
      calls: { target: string; callData: BytesLike }[],
      overrides?: CallOverrides
    ): Promise<{
      blockNumber: BigNumber;
      blockHash: string;
      returnData: {
        success: boolean;
        returnData: string;
        0: boolean;
        1: string;
      }[];
      0: BigNumber;
      1: string;
      2: { success: boolean; returnData: string; 0: boolean; 1: string }[];
    }>;

    getBlockHash(
      blockNumber: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    "getBlockHash(uint256)"(
      blockNumber: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    getBlockNumber(overrides?: CallOverrides): Promise<BigNumber>;

    "getBlockNumber()"(overrides?: CallOverrides): Promise<BigNumber>;

    getCurrentBlockCoinbase(overrides?: CallOverrides): Promise<string>;

    "getCurrentBlockCoinbase()"(overrides?: CallOverrides): Promise<string>;

    getCurrentBlockDifficulty(overrides?: CallOverrides): Promise<BigNumber>;

    "getCurrentBlockDifficulty()"(
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getCurrentBlockGasLimit(overrides?: CallOverrides): Promise<BigNumber>;

    "getCurrentBlockGasLimit()"(overrides?: CallOverrides): Promise<BigNumber>;

    getCurrentBlockTimestamp(overrides?: CallOverrides): Promise<BigNumber>;

    "getCurrentBlockTimestamp()"(overrides?: CallOverrides): Promise<BigNumber>;

    getEthBalance(addr: string, overrides?: CallOverrides): Promise<BigNumber>;

    "getEthBalance(address)"(
      addr: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getLastBlockHash(overrides?: CallOverrides): Promise<string>;

    "getLastBlockHash()"(overrides?: CallOverrides): Promise<string>;

    tryAggregate(
      requireSuccess: boolean,
      calls: { target: string; callData: BytesLike }[],
      overrides?: CallOverrides
    ): Promise<
      { success: boolean; returnData: string; 0: boolean; 1: string }[]
    >;

    "tryAggregate(bool,tuple[])"(
      requireSuccess: boolean,
      calls: { target: string; callData: BytesLike }[],
      overrides?: CallOverrides
    ): Promise<
      { success: boolean; returnData: string; 0: boolean; 1: string }[]
    >;

    tryBlockAndAggregate(
      requireSuccess: boolean,
      calls: { target: string; callData: BytesLike }[],
      overrides?: CallOverrides
    ): Promise<{
      blockNumber: BigNumber;
      blockHash: string;
      returnData: {
        success: boolean;
        returnData: string;
        0: boolean;
        1: string;
      }[];
      0: BigNumber;
      1: string;
      2: { success: boolean; returnData: string; 0: boolean; 1: string }[];
    }>;

    "tryBlockAndAggregate(bool,tuple[])"(
      requireSuccess: boolean,
      calls: { target: string; callData: BytesLike }[],
      overrides?: CallOverrides
    ): Promise<{
      blockNumber: BigNumber;
      blockHash: string;
      returnData: {
        success: boolean;
        returnData: string;
        0: boolean;
        1: string;
      }[];
      0: BigNumber;
      1: string;
      2: { success: boolean; returnData: string; 0: boolean; 1: string }[];
    }>;
  };

  filters: {};

  estimateGas: {
    aggregate(
      calls: { target: string; callData: BytesLike }[],
      overrides?: Overrides
    ): Promise<BigNumber>;

    "aggregate(tuple[])"(
      calls: { target: string; callData: BytesLike }[],
      overrides?: Overrides
    ): Promise<BigNumber>;

    blockAndAggregate(
      calls: { target: string; callData: BytesLike }[],
      overrides?: Overrides
    ): Promise<BigNumber>;

    "blockAndAggregate(tuple[])"(
      calls: { target: string; callData: BytesLike }[],
      overrides?: Overrides
    ): Promise<BigNumber>;

    getBlockHash(
      blockNumber: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "getBlockHash(uint256)"(
      blockNumber: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getBlockNumber(overrides?: CallOverrides): Promise<BigNumber>;

    "getBlockNumber()"(overrides?: CallOverrides): Promise<BigNumber>;

    getCurrentBlockCoinbase(overrides?: CallOverrides): Promise<BigNumber>;

    "getCurrentBlockCoinbase()"(overrides?: CallOverrides): Promise<BigNumber>;

    getCurrentBlockDifficulty(overrides?: CallOverrides): Promise<BigNumber>;

    "getCurrentBlockDifficulty()"(
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getCurrentBlockGasLimit(overrides?: CallOverrides): Promise<BigNumber>;

    "getCurrentBlockGasLimit()"(overrides?: CallOverrides): Promise<BigNumber>;

    getCurrentBlockTimestamp(overrides?: CallOverrides): Promise<BigNumber>;

    "getCurrentBlockTimestamp()"(overrides?: CallOverrides): Promise<BigNumber>;

    getEthBalance(addr: string, overrides?: CallOverrides): Promise<BigNumber>;

    "getEthBalance(address)"(
      addr: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getLastBlockHash(overrides?: CallOverrides): Promise<BigNumber>;

    "getLastBlockHash()"(overrides?: CallOverrides): Promise<BigNumber>;

    tryAggregate(
      requireSuccess: boolean,
      calls: { target: string; callData: BytesLike }[],
      overrides?: Overrides
    ): Promise<BigNumber>;

    "tryAggregate(bool,tuple[])"(
      requireSuccess: boolean,
      calls: { target: string; callData: BytesLike }[],
      overrides?: Overrides
    ): Promise<BigNumber>;

    tryBlockAndAggregate(
      requireSuccess: boolean,
      calls: { target: string; callData: BytesLike }[],
      overrides?: Overrides
    ): Promise<BigNumber>;

    "tryBlockAndAggregate(bool,tuple[])"(
      requireSuccess: boolean,
      calls: { target: string; callData: BytesLike }[],
      overrides?: Overrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    aggregate(
      calls: { target: string; callData: BytesLike }[],
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "aggregate(tuple[])"(
      calls: { target: string; callData: BytesLike }[],
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    blockAndAggregate(
      calls: { target: string; callData: BytesLike }[],
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "blockAndAggregate(tuple[])"(
      calls: { target: string; callData: BytesLike }[],
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    getBlockHash(
      blockNumber: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "getBlockHash(uint256)"(
      blockNumber: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getBlockNumber(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "getBlockNumber()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getCurrentBlockCoinbase(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "getCurrentBlockCoinbase()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getCurrentBlockDifficulty(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "getCurrentBlockDifficulty()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getCurrentBlockGasLimit(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "getCurrentBlockGasLimit()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getCurrentBlockTimestamp(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "getCurrentBlockTimestamp()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getEthBalance(
      addr: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "getEthBalance(address)"(
      addr: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getLastBlockHash(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "getLastBlockHash()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    tryAggregate(
      requireSuccess: boolean,
      calls: { target: string; callData: BytesLike }[],
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "tryAggregate(bool,tuple[])"(
      requireSuccess: boolean,
      calls: { target: string; callData: BytesLike }[],
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    tryBlockAndAggregate(
      requireSuccess: boolean,
      calls: { target: string; callData: BytesLike }[],
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "tryBlockAndAggregate(bool,tuple[])"(
      requireSuccess: boolean,
      calls: { target: string; callData: BytesLike }[],
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;
  };
}
