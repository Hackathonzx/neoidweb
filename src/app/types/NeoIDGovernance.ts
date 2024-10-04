import { BaseContract, BigNumberish, Signer, ethers, ContractTransaction } from 'ethers';

export interface NeoIDGovernance extends BaseContract {
  createProposal(description: string): Promise<ContractTransaction>;
  vote(proposalId: BigNumberish, support: boolean): Promise<ContractTransaction>;
  executeProposal(proposalId: BigNumberish): Promise<ContractTransaction>;
  connect(signerOrProvider: Signer | ethers.Provider): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: ethers.Interface;

  functions: {
    createProposal(description: string): Promise<ContractTransaction>;
    vote(proposalId: BigNumberish, support: boolean): Promise<ContractTransaction>;
    executeProposal(proposalId: BigNumberish): Promise<ContractTransaction>;
  };
}