import { BaseContract, BigNumberish, Signer, ethers, ContractTransaction } from 'ethers';

export interface AccessControl extends BaseContract {
  accessPremiumService(): Promise<ContractTransaction>;
  updateRequiredReputation(newReputation: BigNumberish): Promise<ContractTransaction>;
  connect(signerOrProvider: Signer | ethers.Provider): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: ethers.Interface;

  functions: {
    accessPremiumService(): Promise<ContractTransaction>;
    updateRequiredReputation(newReputation: BigNumberish): Promise<ContractTransaction>;
  };
}