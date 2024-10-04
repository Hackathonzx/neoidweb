import { BaseContract, BigNumberish, Signer, ethers, ContractTransaction } from 'ethers';

export interface ReputationManager extends BaseContract {
  increaseReputation(userAddress: string, amount: BigNumberish): Promise<ContractTransaction>;
  decreaseReputation(userAddress: string, amount: BigNumberish): Promise<ContractTransaction>;
  connect(signerOrProvider: Signer | ethers.Provider): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: ethers.Interface;

  functions: {
    increaseReputation(userAddress: string, amount: BigNumberish): Promise<ContractTransaction>;
    decreaseReputation(userAddress: string, amount: BigNumberish): Promise<ContractTransaction>;
  };
}