import { ethers } from 'ethers';
import { NeoID } from '@/app/types/NeoID';
import { ReputationManager } from '@/app/types/ReputationManager';
import { AccessControl } from '@/app/types/AccessControl';
import { NeoIDGovernance } from '@/app/types/NeoIDGovernance';

// Set up the provider (e.g., using Infura or Alchemy)
const provider = new ethers.JsonRpcProvider('https://mainnet.infura.io/v3/YOUR_INFURA_PROJECT_ID');

// Contract addresses
const neoIDAddress = '0x7c9D4E3769FD085566de1DB20E5703D3Ec50d37f';
const reputationManagerAddress = '0xe34c86A03F17E29F77beeE7c898Adae4dD578006';
const accessControlAddress = '0x7516abedc7e8ca01143ad636a6963B9887FC7Cf6';
const neoIDGovernanceAddress = '0xA0BF7F60ec762cc7b88dEc415D46F12cFF130a55';

// Contract ABIs (replace with actual ABIs)
const neoIDAbi = [
  "function registerUser(string did) public",
  "function updateReputation(address userAddress, uint256 newReputation) public",
  "function getUser(address userAddress) public view returns (string, uint256)",
  "function addToWhitelist(address account) public",
  "function removeFromWhitelist(address account) public",
];
const reputationManagerAbi = [
  "function increaseReputation(address userAddress, uint256 amount) public",
  "function decreaseReputation(address userAddress, uint256 amount) public",
];
const accessControlAbi = [
  "function accessPremiumService() public",
  "function updateRequiredReputation(uint256 newReputation) public",
];
const neoIDGovernanceAbi = [
  "function createProposal(string description) public",
  "function vote(uint256 proposalId, bool support) public",
  "function executeProposal(uint256 proposalId) public",
];

// Create contract instances
const neoIDContract = new ethers.Contract(neoIDAddress, neoIDAbi, provider) as unknown as NeoID;
const reputationManagerContract = new ethers.Contract(reputationManagerAddress, reputationManagerAbi, provider) as unknown as ReputationManager;
const accessControlContract = new ethers.Contract(accessControlAddress, accessControlAbi, provider) as unknown as AccessControl;
const neoIDGovernanceContract = new ethers.Contract(neoIDGovernanceAddress, neoIDGovernanceAbi, provider) as unknown as NeoIDGovernance;

export {
  provider,
  neoIDContract,
  reputationManagerContract,
  accessControlContract,
  neoIDGovernanceContract,
};






























// // utils/web3.ts
// import { NeoID } from '@/app/types/NeoID';
// import { ethers } from 'ethers';
// // import { NeoID } from '@/types/NeoID';

// const url = 'https://mainnet.infura.io/v3/YOUR_INFURA_PROJECT_ID'

// const provider = new (ethers as any).providers.JsonRpcProvider(url);

// // Contract addresses
// const neoIDAddress = '0x7c9D4E3769FD085566de1DB20E5703D3Ec50d37f';
// const reputationManagerAddress = '0xe34c86A03F17E29F77beeE7c898Adae4dD578006';
// const accessControlAddress = '0x7516abedc7e8ca01143ad636a6963B9887FC7Cf6';
// const neoIDGovernanceAddress = '0xA0BF7F60ec762cc7b88dEc415D46F12cFF130a55';

// // Contract ABIs (replace with actual ABIs)
// const neoIDAbi = [
//     // ABI for NeoID contract
//     "function registerUser(string did) public",
//     "function updateReputation(address userAddress, uint256 newReputation) public",
//   ];
//   const reputationManagerAbi: ethers.Interface | ethers.InterfaceAbi = [/* ABI for ReputationManager contract */];
//   const accessControlAbi: ethers.Interface | ethers.InterfaceAbi = [/* ABI for AccessControl contract */];
//   const neoIDGovernanceAbi: ethers.Interface | ethers.InterfaceAbi = [/* ABI for NeoIDGovernance contract */];
  
//   // Create contract instances
//   const neoIDContract = new ethers.Contract(neoIDAddress, neoIDAbi, provider) as unknown as NeoID;
//   const reputationManagerContract = new ethers.Contract(reputationManagerAddress, reputationManagerAbi, provider);
//   const accessControlContract = new ethers.Contract(accessControlAddress, accessControlAbi, provider);
//   const neoIDGovernanceContract = new ethers.Contract(neoIDGovernanceAddress, neoIDGovernanceAbi, provider);
  
//   export {
//     provider,
//     neoIDContract,
//     reputationManagerContract,
//     accessControlContract,
//     neoIDGovernanceContract,
//   };


  // Set up the provider (e.g., using Infura or Alchemy)
// const provider = new ethers.providers.JsonRpcProvider('https://mainnet.infura.io/v3/YOUR_INFURA_PROJECT_ID');


// Contract ABIs (replace with actual ABIs)
// const neoIDAbi: ethers.Interface | ethers.InterfaceAbi = [/* ABI for NeoID contract */];
// const reputationManagerAbi: ethers.Interface | ethers.InterfaceAbi = [/* ABI for ReputationManager contract */];
// const accessControlAbi: ethers.Interface | ethers.InterfaceAbi = [/* ABI for AccessControl contract */];
// const neoIDGovernanceAbi: ethers.Interface | ethers.InterfaceAbi = [/* ABI for NeoIDGovernance contract */];

// // Create contract instances
// const neoIDContract = new ethers.Contract(neoIDAddress, neoIDAbi, provider);
// const reputationManagerContract = new ethers.Contract(reputationManagerAddress, reputationManagerAbi, provider);
// const accessControlContract = new ethers.Contract(accessControlAddress, accessControlAbi, provider);
// const neoIDGovernanceContract = new ethers.Contract(neoIDGovernanceAddress, neoIDGovernanceAbi, provider);

// export {
//   provider,
//   neoIDContract,
//   reputationManagerContract,
//   accessControlContract,
//   neoIDGovernanceContract,
// };
