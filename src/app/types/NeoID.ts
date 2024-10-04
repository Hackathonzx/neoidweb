// import { BaseContract, BigNumberish, Signer, ethers, ContractTransaction } from 'ethers';

// export interface NeoID extends BaseContract {
//   registerUser(did: string): Promise<ContractTransaction>;
//   updateReputation(userAddress: string, newReputation: BigNumberish): Promise<ContractTransaction>;
//   getUser(userAddress: string): Promise<[string, BigNumberish]>;
//   addToWhitelist(account: string): Promise<ContractTransaction>;
//   removeFromWhitelist(account: string): Promise<ContractTransaction>;
//   connect(signerOrProvider: Signer | ethers.Provider): this;
//   attach(addressOrName: string): this;
//   deployed(): Promise<this>;

//   interface: ethers.utils.Interface;

//   functions: {
//     registerUser(did: string): Promise<ContractTransaction>;
//     updateReputation(userAddress: string, newReputation: BigNumberish): Promise<ContractTransaction>;
//     getUser(userAddress: string): Promise<[string, BigNumberish]>;
//     addToWhitelist(account: string): Promise<ContractTransaction>;
//     removeFromWhitelist(account: string): Promise<ContractTransaction>;
//   };
// }



import { BaseContract, BigNumberish, Signer, ethers, ContractTransaction } from 'ethers';

export interface NeoID extends BaseContract {
    registerUser(did: string): Promise<ContractTransaction>;
    updateReputation(userAddress: string, newReputation: BigNumberish): Promise<ContractTransaction>;
    getUser(userAddress: string): Promise<[string, BigNumberish]>;
    addToWhitelist(account: string): Promise<ContractTransaction>;
    removeFromWhitelist(account: string): Promise<ContractTransaction>;

    connect(signerOrProvider: Signer | ethers.Provider): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;

    interface: ethers.Interface; // Access Interface directly from ethers

    functions: {
        registerUser(did: string): Promise<ContractTransaction>;
        updateReputation(userAddress: string, newReputation: BigNumberish): Promise<ContractTransaction>;
        getUser(userAddress: string): Promise<[string, BigNumberish]>;
        addToWhitelist(account: string): Promise<ContractTransaction>;
        removeFromWhitelist(account: string): Promise<ContractTransaction>;
    };
}












// import { BaseContract, BigNumberish, Signer, ethers, ContractTransaction } from 'ethers';

// export interface NeoID extends BaseContract {
//     registerUser(did: string): unknown;
//     updateReputation(userAddress: string, newReputation: number): unknown;
//     connect(signerOrProvider: Signer | ethers.Provider): this;
//     attach(addressOrName: string): this;
//     deployed(): Promise<this>;
  
//     interface: ethers.Interface;

//   functions: {
//     registerUser(did: string): Promise<ContractTransaction>;
//     updateReputation(userAddress: string, newReputation: BigNumberish): Promise<ContractTransaction>;
//   };


  
// }




// import { BaseContract, BigNumberish, Signer, ethers, ContractTransaction } from 'ethers';

// export interface NeoID extends BaseContract {
//   registerUser(did: string): Promise<ContractTransaction>;
//   updateReputation(userAddress: string, newReputation: BigNumberish): Promise<ContractTransaction>;
//   connect(signerOrProvider: Signer | (ethers as: undefined any: undefined).providers.Provider): this;
//   attach(addressOrName: string): this;
//   deployed(): Promise<this>;

//   interface: ethers.Interface;

//   functions: {
//     registerUser(did: string): Promise<ContractTransaction>;
//     updateReputation(userAddress: string, newReputation: BigNumberish): Promise<ContractTransaction>;
//   };
// }

// // types/NeoID.ts
// import { BaseContract, BigNumberish, Signer, ethers, ContractTransaction } from 'ethers';

// export interface NeoID extends BaseContract {
//   connect(signerOrProvider: Signer | utils.Provider): this;
//   attach(addressOrName: string): this;
//   deployed(): Promise<this>;

//   interface: utils.Interface;

//   functions: {
//     registerUser(did: string): Promise<ContractTransaction>;
//     updateReputation(userAddress: string, newReputation: BigNumberish): Promise<ContractTransaction>;
//   };
// }






// export interface NeoID extends BaseContract {
//   registerUser(did: string): unknown;
//   updateReputation(userAddress: string, newReputation: number): unknown;
//   connect(signerOrProvider: Signer | ethers.Provider): this;
//   attach(addressOrName: string): this;
//   deployed(): Promise<this>;

//   interface: ethers.Interface;




//   functions: {
//     registerUser(did: string): Promise<ethers.Transaction>;
//     updateReputation(userAddress: string, newReputation: BigNumberish): Promise<ethers.Transaction>;
//   };



// // types/NeoID.ts
// import { BaseContract, BigNumberish, Signer } from 'ethers';
// import {utils} from 'ethers';

// export interface NeoID extends BaseContract {
//   connect(signerOrProvider: Signer | utils.Provider): this;
//   attach(addressOrName: string): this;
//   deployed(): Promise<this>;

//   interface: utils.Interface;

//   functions: {
//     registerUser(did: string): Promise<utils.Transaction>;
//     updateReputation(userAddress: string, newReputation: BigNumberish): Promise<utils.Transaction>;
//   };
// }