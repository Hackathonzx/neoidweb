import { ethers, ContractTransaction } from 'ethers';
import { neoIDContract, reputationManagerContract, accessControlContract, neoIDGovernanceContract } from '@/utils/web3';
import { BigNumberish } from 'ethers';


export async function registerUser(did: string, signer: ethers.Signer): Promise<void> {
    const contractWithSigner = neoIDContract.connect(signer);
    const tx: ContractTransaction = await contractWithSigner.registerUser(did);
    console.log('Transaction sent');
  
    // Listen for the event emitted by the contract
    neoIDContract.once('UserRegistered', (eventDid: string) => {
      if (eventDid === did) {
        console.log('User registered:', did);
      }
    });
  }



// Function to update reputation
export async function updateReputation(userAddress: string, newReputation: BigNumberish, signer: ethers.Signer): Promise<void> {
    const contractWithSigner = neoIDContract.connect(signer);
    const tx: ContractTransaction = await contractWithSigner.updateReputation(userAddress, newReputation);
    console.log('Transaction sent');
  
    // Convert newReputation to BigInt
    const bigNewReputation = BigInt(newReputation.toString());
  
    // Listen for the event emitted by the contract
    neoIDContract.once('ReputationUpdated', (eventUserAddress: string, eventNewReputation: BigNumberish) => {
      const bigEventNewReputation = BigInt(eventNewReputation.toString()); // Convert eventNewReputation to BigInt
  
      if (eventUserAddress === userAddress && bigEventNewReputation === bigNewReputation) {
        console.log('Reputation updated for:', userAddress);
      }
    });
  }


export async function increaseReputation(userAddress: string, amount: BigNumberish, signer: ethers.Signer): Promise<void> {
    const contractWithSigner = reputationManagerContract.connect(signer);
    const tx: ContractTransaction = await contractWithSigner.increaseReputation(userAddress, amount);
    console.log('Transaction sent');

    // Convert amount to BigInt
    const bigAmount = BigInt(amount.toString());

    // Listen for the event emitted by the contract
    reputationManagerContract.once('ReputationIncreased', (eventUserAddress: string, eventAmount: BigNumberish) => {
        const bigEventAmount = BigInt(eventAmount.toString()); // Convert eventAmount to BigInt

        if (eventUserAddress === userAddress && bigEventAmount === bigAmount) {
            console.log('Reputation increased for:', userAddress);
        }
    });
}







// Function to decrease reputation
export async function decreaseReputation(userAddress: string, amount: BigNumberish, signer: ethers.Signer): Promise<void> {
    const contractWithSigner = reputationManagerContract.connect(signer);
    const tx: ContractTransaction = await contractWithSigner.decreaseReputation(userAddress, amount);
    console.log('Transaction sent');
  
    // Convert amount to BigInt
    const bigAmount = BigInt(amount.toString());
  
    // Listen for the event emitted by the contract
    reputationManagerContract.once('ReputationDecreased', (eventUserAddress: string, eventAmount: BigNumberish) => {
      const bigEventAmount = BigInt(eventAmount.toString()); // Convert eventAmount to BigInt
  
      if (eventUserAddress === userAddress && bigEventAmount === bigAmount) {
        console.log('Reputation decreased for:', userAddress);
      }
    });
  }
  
  // Function to access premium service
  export async function accessPremiumService(signer: ethers.Signer): Promise<void> {
    const contractWithSigner = accessControlContract.connect(signer);
    const tx: ContractTransaction = await contractWithSigner.accessPremiumService();
    console.log('Transaction sent');
  
    // Listen for the event emitted by the contract
    accessControlContract.once('PremiumServiceAccessed', async (eventUserAddress: string) => {
      if (eventUserAddress === await signer.getAddress()) {
        console.log('Accessed premium service');
      }
    });
  }
  
  // Function to create a proposal
  export async function createProposal(description: string, signer: ethers.Signer): Promise<void> {
    const contractWithSigner = neoIDGovernanceContract.connect(signer);
    const tx: ContractTransaction = await contractWithSigner.createProposal(description);
    console.log('Transaction sent');
  
    // Listen for the event emitted by the contract
    neoIDGovernanceContract.once('ProposalCreated', (eventDescription: string) => {
      if (eventDescription === description) {
        console.log('Proposal created:', description);
      }
    });
  }
  
  // Function to vote on a proposal
  export async function vote(proposalId: BigNumberish, support: boolean, signer: ethers.Signer): Promise<void> {
    const contractWithSigner = neoIDGovernanceContract.connect(signer);
    const tx: ContractTransaction = await contractWithSigner.vote(proposalId, support);
    console.log('Transaction sent');
  
    // Convert proposalId to BigInt
    const bigProposalId = BigInt(proposalId.toString());
  
    // Listen for the event emitted by the contract
    neoIDGovernanceContract.once('Voted', (eventProposalId: BigNumberish, eventSupport: boolean) => {
      const bigEventProposalId = BigInt(eventProposalId.toString()); // Convert eventProposalId to BigInt
  
      if (bigEventProposalId === bigProposalId && eventSupport === support) {
        console.log('Voted on proposal:', proposalId);
      }
    });
  }
  
  // Function to execute a proposal
  export async function executeProposal(proposalId: BigNumberish, signer: ethers.Signer): Promise<void> {
    const contractWithSigner = neoIDGovernanceContract.connect(signer);
    const tx: ContractTransaction = await contractWithSigner.executeProposal(proposalId);
    console.log('Transaction sent');
  
    // Convert proposalId to BigInt
    const bigProposalId = BigInt(proposalId.toString());
  
    // Listen for the event emitted by the contract
    neoIDGovernanceContract.once('ProposalExecuted', (eventProposalId: BigNumberish) => {
      const bigEventProposalId = BigInt(eventProposalId.toString()); // Convert eventProposalId to BigInt
  
      if (bigEventProposalId === bigProposalId) {
        console.log('Executed proposal:', proposalId);
      }
    });
  }








// export async function updateReputation(userAddress: string, newReputation: BigNumberish, signer: ethers.Signer): Promise<void> {
//     const contractWithSigner = neoIDContract.connect(signer);
//     const tx: ContractTransaction = await contractWithSigner.updateReputation(userAddress, newReputation);
//     console.log('Transaction sent');
  
//     // Listen for the event emitted by the contract
//     neoIDContract.once('ReputationUpdated', (eventUserAddress: string, eventNewReputation: BigNumberish) => {
//       if (eventUserAddress === userAddress && eventNewReputation.eq(newReputation)) {
//         console.log('Reputation updated for:', userAddress);
//       }
//     });
//   }


//   // Function to decrease reputation
//   export async function decreaseReputation(userAddress: string, amount: BigNumberish, signer: ethers.Signer): Promise<void> {
//     const contractWithSigner = reputationManagerContract.connect(signer);
//     const tx: ContractTransaction = await contractWithSigner.decreaseReputation(userAddress, amount);
//     console.log('Transaction sent');
  
//     // Listen for the event emitted by the contract
//     reputationManagerContract.once('ReputationDecreased', (eventUserAddress: string, eventAmount: BigNumberish) => {
//       if (eventUserAddress === userAddress && eventAmount.eq(amount)) {
//         console.log('Reputation decreased for:', userAddress);
//       }
//     });
//   }
  
//   // Function to access premium service
//   export async function accessPremiumService(signer: ethers.Signer): Promise<void> {
//     const contractWithSigner = accessControlContract.connect(signer);
//     const tx: ContractTransaction = await contractWithSigner.accessPremiumService();
//     console.log('Transaction sent');
  
//     // Listen for the event emitted by the contract
//     accessControlContract.once('PremiumServiceAccessed', (eventUserAddress: string) => {
//       if (eventUserAddress === await signer.getAddress()) {
//         console.log('Accessed premium service');
//       }
//     });
//   }
  
//   // Function to create a proposal
//   export async function createProposal(description: string, signer: ethers.Signer): Promise<void> {
//     const contractWithSigner = neoIDGovernanceContract.connect(signer);
//     const tx: ContractTransaction = await contractWithSigner.createProposal(description);
//     console.log('Transaction sent');
  
//     // Listen for the event emitted by the contract
//     neoIDGovernanceContract.once('ProposalCreated', (eventDescription: string) => {
//       if (eventDescription === description) {
//         console.log('Proposal created:', description);
//       }
//     });
//   }
  
//   // Function to vote on a proposal
//   export async function vote(proposalId: BigNumberish, support: boolean, signer: ethers.Signer): Promise<void> {
//     const contractWithSigner = neoIDGovernanceContract.connect(signer);
//     const tx: ContractTransaction = await contractWithSigner.vote(proposalId, support);
//     console.log('Transaction sent');
  
//     // Listen for the event emitted by the contract
//     neoIDGovernanceContract.once('Voted', (eventProposalId: BigNumberish, eventSupport: boolean) => {
//       if (eventProposalId.eq(proposalId) && eventSupport === support) {
//         console.log('Voted on proposal:', proposalId);
//       }
//     });
//   }
  
//   // Function to execute a proposal
//   export async function executeProposal(proposalId: BigNumberish, signer: ethers.Signer): Promise<void> {
//     const contractWithSigner = neoIDGovernanceContract.connect(signer);
//     const tx: ContractTransaction = await contractWithSigner.executeProposal(proposalId);
//     console.log('Transaction sent');
  
//     // Listen for the event emitted by the contract
//     neoIDGovernanceContract.once('ProposalExecuted', (eventProposalId: BigNumberish) => {
//       if (eventProposalId.eq(proposalId)) {
//         console.log('Executed proposal:', proposalId);
//       }
//     });
//   }












// Function to register a user
// export async function registerUser(did: string, signer: ethers.Signer): Promise<void> {
//     const contractWithSigner = neoIDContract.connect(signer);
//     const tx: ContractTransaction = await contractWithSigner.registerUser(did);
//     console.log('Transaction sent:', tx.hash); // Ensure tx is of type ContractTransaction
  
//     // Wait for the transaction to be mined
//     const receipt = await signer.provider?.waitForTransaction(tx.hash, 1, 150000);
//     if (receipt) {
//       console.log('Transaction mined:', receipt.transactionHash);
//       console.log('User registered:', did);
//     } else {
//       console.error('Transaction was not mined within the timeout period');
//     }
//   }

  

// Function to update reputation
// export async function updateReputation(userAddress: string, newReputation: BigNumberish, signer: ethers.Signer): Promise<void> {
//   const contractWithSigner = neoIDContract.connect(signer);
//   const tx: ContractTransaction = await contractWithSigner.updateReputation(userAddress, newReputation);
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









//   export async function increaseReputation(userAddress: string, amount: BigNumberish, signer: ethers.Signer): Promise<void> {
//     const contractWithSigner = reputationManagerContract.connect(signer);
//     const tx: ContractTransaction = await contractWithSigner.increaseReputation(userAddress, amount);
//     console.log('Transaction sent');
  
//     // Convert amount to BigNumber
//     const bigAmount = Number.(amount as any);

//     // Listen for the event emitted by the contract
//     reputationManagerContract.once('ReputationIncreased', (eventUserAddress: string, eventAmount: BigNumberish) => {
//         const bigEventAmount = BigNumber.from(eventAmount); // Convert eventAmount to BigNumber

//         if (eventUserAddress === userAddress && bigEventAmount.eq(bigAmount)) {
//             console.log('Reputation increased for:', userAddress);
//         }
//     });
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





// Function to register a user
// export async function registerUser(did: string, signer: ethers.Signer): Promise<void> {
//   const contractWithSigner = neoIDContract.connect(signer);
//   const tx: ContractTransaction = await contractWithSigner.registerUser(did);
// //   await tx.wait();

// // console.log('Transaction sent:', tx.hash);

//   console.log('User registered:', did);
// }





// // Function to increase reputation
// export async function increaseReputation(userAddress: string, amount: BigNumberish, signer: ethers.Signer): Promise<void> {
//   const contractWithSigner = reputationManagerContract.connect(signer);
//   const tx: ContractTransaction = await contractWithSigner.increaseReputation(userAddress, amount);
//   await tx.wait();
//   console.log('Reputation increased for:', userAddress);
// }

// // Function to decrease reputation
// export async function decreaseReputation(userAddress: string, amount: BigNumberish, signer: ethers.Signer): Promise<void> {
//   const contractWithSigner = reputationManagerContract.connect(signer);
//   const tx: ContractTransaction = await contractWithSigner.decreaseReputation(userAddress, amount);
//   await tx.wait();
//   console.log('Reputation decreased for:', userAddress);
// }

// // Function to access premium service
// export async function accessPremiumService(signer: ethers.Signer): Promise<void> {
//   const contractWithSigner = accessControlContract.connect(signer);
//   const tx: ContractTransaction = await contractWithSigner.accessPremiumService();
//   await tx.wait();
//   console.log('Accessed premium service');
// }

// // Function to create a proposal
// export async function createProposal(description: string, signer: ethers.Signer): Promise<void> {
//   const contractWithSigner = neoIDGovernanceContract.connect(signer);
//   const tx: ContractTransaction = await contractWithSigner.createProposal(description);
//   await tx.wait();
//   console.log('Proposal created:', description);
// }

// // Function to vote on a proposal
// export async function vote(proposalId: BigNumberish, support: boolean, signer: ethers.Signer): Promise<void> {
//   const contractWithSigner = neoIDGovernanceContract.connect(signer);
//   const tx: ContractTransaction = await contractWithSigner.vote(proposalId, support);
//   await tx.wait();
//   console.log('Voted on proposal:', proposalId);
// }

// // Function to execute a proposal
// export async function executeProposal(proposalId: BigNumberish, signer: ethers.Signer): Promise<void> {
//   const contractWithSigner = neoIDGovernanceContract.connect(signer);
//   const tx: ContractTransaction = await contractWithSigner.executeProposal(proposalId);
//   await tx.wait();
//   console.log('Executed proposal:', proposalId);
// }









// Function to increase reputation
// export async function increaseReputation(userAddress: string, amount: BigNumberish, signer: ethers.Signer): Promise<void> {
//     const contractWithSigner = reputationManagerContract.connect(signer);
//     const tx: ContractTransaction = await contractWithSigner.increaseReputation(userAddress, amount);
//     console.log('Transaction sent');
  
//     // Listen for the event emitted by the contract
//     reputationManagerContract.once('ReputationIncreased', (eventUserAddress: string, eventAmount: BigNumberish) => {
//       if (eventUserAddress === userAddress && eventAmount.eq(amount)) {
//         console.log('Reputation increased for:', userAddress);
//       }
//     });
//   }
  


//   export async function increaseReputation(userAddress: string, amount: BigNumberish, signer: ethers.Signer): Promise<void> {
//     const contractWithSigner = reputationManagerContract.connect(signer);
//     const tx: ContractTransaction = await contractWithSigner.increaseReputation(userAddress, amount);
//     console.log('Transaction sent');
  
//     // Convert amount to BigNumber
//     const bigAmount = BigNumberish.from(amount);

//     // Listen for the event emitted by the contract
//     reputationManagerContract.once('ReputationIncreased', (eventUserAddress: string, eventAmount: BigNumberish) => {
//         const bigEventAmount = BigNumber.from(eventAmount); // Convert eventAmount to BigNumber

//         if (eventUserAddress === userAddress && bigEventAmount.eq(bigAmount)) {
//             console.log('Reputation increased for:', userAddress);
//         }
//     });
// }




