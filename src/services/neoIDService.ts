// import { ethers, ContractTransaction } from 'ethers';
// import { neoIDContract, reputationManagerContract, accessControlContract, neoIDGovernanceContract } from '@/utils/web3';
// import { BigNumberish } from 'ethers';

// // Function to register a user
// export async function registerUser(did: string, signer: ethers.Signer): Promise<void> {
//   const contractWithSigner = neoIDContract.connect(signer);
//   const tx: ContractTransaction = await contractWithSigner.registerUser(did);
//   await tx.wait();
//   console.log('User registered:', did);
// }


// import { ethers, ContractTransaction, BigNumberish } from 'ethers';
// import { accessControlContract, neoIDContract, neoIDGovernanceContract, reputationManagerContract } from '@/utils/web3';

// // Function to register a user
// export async function registerUser(did: string, signer: ethers.Signer): Promise<void> {
//   const contractWithSigner = neoIDContract.connect(signer);
//   const tx: ContractTransaction = await contractWithSigner.registerUser(did);
  
//   // Use waitForTransaction instead of tx.wait()
//   const receipt = await signer.provider?.waitForTransaction(tx.hash); // Ensure provider is available
  
//   if (receipt) {
//     console.log('Transaction receipt:', receipt);
//     console.log('User registered:', did);
//   } else {
//     console.error('Transaction not confirmed');
//   }
// }



// import { ethers } from 'ethers';
// import { neoIDContract } from '@/utils/web3';

// import { ethers, ContractTransaction, BigNumberish } from 'ethers';
// import { accessControlContract, neoIDContract, neoIDGovernanceContract, reputationManagerContract } from '@/utils/web3';

// // Function to register a user
// export async function registerUser(did: string, signer: ethers.Signer): Promise<void> {
//   const contractWithSigner = neoIDContract.connect(signer);


//   const tx = await contractWithSigner.registerUser(did);

//   // Use waitForTransaction instead of accessing tx.hash directly
//   const receipt = await signer.provider?.waitForTransaction(tx.hash); // Ensure provider is available
  
//   if (receipt) {
//     console.log('Transaction receipt:', receipt);
//     console.log('User registered:', did);
//   } else {
//     console.error('Transaction not confirmed');
//   }
// }



import { BigNumberish, ContractTransaction, ethers } from 'ethers';
import { accessControlContract, neoIDContract, neoIDGovernanceContract, reputationManagerContract } from '@/utils/web3';

// Function to register a user
export async function registerUser(did: string, signer: ethers.Signer): Promise<void> {
  const contractWithSigner = neoIDContract.connect(signer);
  
  // Call the contract method and get the transaction response
  const tx: ethers.TransactionResponse = await contractWithSigner.registerUser(did);
  
  // Use waitForTransaction instead of accessing tx.hash directly
  const receipt = await signer.provider?.waitForTransaction(tx.hash); // Ensure provider is available
  
  if (receipt) {
    console.log('Transaction receipt:', receipt);
    console.log('User registered:', did);
  } else {
    console.error('Transaction not confirmed');
  }
}

//   const tx: ethers.TransactionResponse = await contractWithSigner.registerUser(did);

  
  // Use TransactionResponse instead of ContractTransaction
//   const tx: ethers.TransactionResponse = await contractWithSigner.registerUser(did);
  

// Function to update reputation
export async function updateReputation(userAddress: string, newReputation: BigNumberish, signer: ethers.Signer): Promise<void> {
  const contractWithSigner = neoIDContract.connect(signer);
  const tx: ContractTransaction = await contractWithSigner.updateReputation(userAddress, newReputation);
  await tx.wait();
  console.log('Reputation updated for:', userAddress);
}

// Function to increase reputation
export async function increaseReputation(userAddress: string, amount: BigNumberish, signer: ethers.Signer): Promise<void> {
  const contractWithSigner = reputationManagerContract.connect(signer);
  const tx: ContractTransaction = await contractWithSigner.increaseReputation(userAddress, amount);
  await tx.wait();
  console.log('Reputation increased for:', userAddress);
}

// Function to decrease reputation
export async function decreaseReputation(userAddress: string, amount: BigNumberish, signer: ethers.Signer): Promise<void> {
  const contractWithSigner = reputationManagerContract.connect(signer);
  const tx: ContractTransaction = await contractWithSigner.decreaseReputation(userAddress, amount);
  await tx.wait();
  console.log('Reputation decreased for:', userAddress);
}

// Function to access premium service
export async function accessPremiumService(signer: ethers.Signer): Promise<void> {
  const contractWithSigner = accessControlContract.connect(signer);
  const tx: ContractTransaction = await contractWithSigner.accessPremiumService();
  await tx.wait();
  console.log('Accessed premium service');
}

// Function to create a proposal
export async function createProposal(description: string, signer: ethers.Signer): Promise<void> {
  const contractWithSigner = neoIDGovernanceContract.connect(signer);
  const tx: ContractTransaction = await contractWithSigner.createProposal(description);
  await tx.wait();
  console.log('Proposal created:', description);
}

// Function to vote on a proposal
export async function vote(proposalId: BigNumberish, support: boolean, signer: ethers.Signer): Promise<void> {
  const contractWithSigner = neoIDGovernanceContract.connect(signer);
  const tx: ContractTransaction = await contractWithSigner.vote(proposalId, support);
  await tx.wait();
  console.log('Voted on proposal:', proposalId);
}

// Function to execute a proposal
export async function executeProposal(proposalId: BigNumberish, signer: ethers.Signer): Promise<void> {
  const contractWithSigner = neoIDGovernanceContract.connect(signer);
  const tx: ContractTransaction = await contractWithSigner.executeProposal(proposalId);
  await tx.wait();
  console.log('Executed proposal:', proposalId);
}






















// // services/neoIDService.ts


// import { ethers } from 'ethers';
// import { neoIDContract } from '@/utils/web3';

// // Function to register a user
// export async function registerUser(did: string, signer: ethers.Signer) {
//   const contractWithSigner = neoIDContract.connect(signer);
//   const tx = await contractWithSigner.registerUser(did);
  
//   // Use waitForTransaction instead of tx.wait()
//   await signer.provider?.waitForTransaction(tx.hash); // Ensure provider is available
  
//   console.log('User registered:', did);
// }

// // Function to update reputation
// export async function updateReputation(userAddress: string, newReputation: number, signer: ethers.Signer) {
//   const contractWithSigner = neoIDContract.connect(signer);
//   const tx = await contractWithSigner.updateReputation(userAddress, newReputation);
  
//   // Use waitForTransaction instead of tx.wait()
//   await signer.provider?.waitForTransaction(tx.hash); // Ensure provider is available
  
//   console.log('Reputation updated for:', userAddress);
// }










// // services/neoIDService.ts

// import { ethers, ContractTransaction } from 'ethers';
// import { neoIDContract } from '@/utils/web3';

// // Function to register a user
// export async function registerUser(did: string, signer: ethers.Signer) {
//   const contractWithSigner = neoIDContract.connect(signer);
//   const tx = await contractWithSigner.registerUser(did) as ContractTransaction; // Type assertion (optional)
//   await tx.wait();
//   console.log('User registered:', did);
// }

// // Function to update reputation
// export async function updateReputation(userAddress: string, newReputation: number, signer: ethers.Signer) {
//   const contractWithSigner = neoIDContract.connect(signer);
//   const tx = await contractWithSigner.updateReputation(userAddress, newReputation) as ContractTransaction; // Type assertion (optional)
//   await tx.wait();
//   console.log('Reputation updated for:', userAddress);
// }










// // services/neoIDService.ts

// import { ethers } from 'ethers';
// import { neoIDContract } from '@/utils/web3';

// // Function to register a user
// export async function registerUser(did: string, signer: ethers.Signer) {
//   const contractWithSigner = neoIDContract.connect(signer);
//   const tx = await contractWithSigner.registerUser(did);
//   await tx.wait();
//   console.log('User registered:', did);
// }

// // Function to update reputation
// export async function updateReputation(userAddress: string, newReputation: number, signer: ethers.Signer) {
//   const contractWithSigner = neoIDContract.connect(signer);
//   const tx = await contractWithSigner.updateReputation(userAddress, newReputation);
//   await tx.wait();
//   console.log('Reputation updated for:', userAddress);
// }   