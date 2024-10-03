"use client"; // Add this line to mark the component as a Client Component

import { useState } from 'react';
import Head from 'next/head';


// Mock definitions for demonstration purposes
const neoID = {
  registerUser: async (did: string) => {
    // Simulate a network request
    return new Promise((resolve) => setTimeout(resolve, 1000));
  },
};

const reputationManager = {
  updateReputation: async (did: string, reputation: string) => {
    // Simulate a network request
    return new Promise((resolve) => setTimeout(resolve, 1000));
  },
};

const neoIDGovernance = {
  createProposal: async (proposalDescription: string) => {
    // Simulate a network request
    return new Promise((resolve) => setTimeout(resolve, 1000));
  },
};



export default function HomePage() {
  const [did, setDid] = useState('');
  const [reputation, setReputation] = useState('');
  const [proposalDescription, setProposalDescription] = useState('');
  const [message, setMessage] = useState('');

  const handleRegister = async () => {
    try {
      await neoID.registerUser(did);
      setMessage('User registered successfully!');
    } catch (error ) {
      if (error instanceof Error){
        setMessage('Error registering user: ' + error.message);

      }
      else{
        setMessage('Error registering user: An unknown error occurred.');

      }
    }
    // else {
    //   setMessage('Error registering user: An unknown error occurred.');
    // }
    
  };

  const handleUpdateReputation = async () => {
    try {
      await reputationManager.updateReputation(did, reputation);
      setMessage('Reputation updated successfully!');
    } catch (error) {
      if (error instanceof Error){
        setMessage('Error updating reputation: ' + error.message);

      }
      else{
        setMessage('Error updating reputation: An unknown error occurred.')
      }
    }
  };

  const handleCreateProposal = async () => {
    try {
      await neoIDGovernance.createProposal(proposalDescription);
      setMessage('Proposal created successfully!');
    } catch (error) {
      if (error instanceof Error){
        setMessage('Error creating proposal: ' + error.message);

      }
      else{
        setMessage('Error creating proposal: An unknown error occurred.')
      }
    }
  };

  return (
    <div style={{ backgroundColor: '#FFF8E1', color: '#FF6F00', minHeight: '100vh', padding: '20px', borderRadius: '20%' }}>
      <Head>
        <title>NeoID Reputation System</title>
        <meta name="description" content="Decentralized identity and reputation management system." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 style={{backgroundColor: '#FFFFFF'}}>Welcome to the NeoID Reputation System</h1>
        <p>Register with a Decentralized Identifier (DID) and manage your reputation.</p>

        <section style={{backgroundColor: '#FFFFFF'}}>
          <h2>User Registration</h2>
          <input
            type="text"
            placeholder="Enter your DID"
            value={did}
            onChange={(e) => setDid(e.target.value)}
            style={{ padding: '10px', margin: '10px 0', borderColor: '#FF6F00' }}
          />
          <button onClick={handleRegister} style={{ backgroundColor: '#FF6F00', color: '#FFF', padding: '10px' }}>
            Register User
          </button>
        </section>

        <section style={{backgroundColor: '#FFFFFF'}}>
          <h2>Update Reputation</h2>
          <input
            type="text"
            placeholder="Enter new reputation score"
            value={reputation}
            onChange={(e) => setReputation(e.target.value)}
            style={{ padding: '10px', margin: '10px 0', borderColor: '#FF6F00' }}
          />
          <button onClick={handleUpdateReputation} style={{ backgroundColor: '#FF6F00', color: '#FFF', padding: '10px' }}>
            Update Reputation
          </button>
        </section>

        <section style={{backgroundColor: '#FFFFFF'}}>
          <h2>Create Governance Proposal</h2>
          <textarea
            placeholder="Describe your proposal"
            value={proposalDescription}
            onChange={(e) => setProposalDescription(e.target.value)}
            style={{ padding: '10px', margin: '10px 0', borderColor: '#FF6F00' }}
          ></textarea>
          <button onClick={handleCreateProposal} style={{ backgroundColor: '#FF6F00', color: '#FFF', padding: '10px' }}>
            Create Proposal
          </button>
        </section>

        {message && (
          <div style={{ marginTop: '20px', color: 'green' }}>
            {message}
          </div>
        )}
      </main>


      <footer style={{ marginTop: '40px', textAlign: 'center' }}>
        <p>&copy; {new Date().getFullYear()} NeoID. All rights reserved.</p>
      </footer>


    </div>
  );
}















// import { useState } from 'react';

// import Head from 'next/head';

// export default function HomePage() {
//   const [did, setDid] = useState('');
//   const [reputation, setReputation] = useState('');
//   const [proposalDescription, setProposalDescription] = useState('');
//   const [message, setMessage] = useState('');

//   const handleRegister = async () => {
//     try {
//       await neoID.registerUser(did);
//       setMessage('User registered successfully!');
//     } catch (error) {
//       setMessage('Error registering user: ' + error.message);
//     }
//   };

//   const handleUpdateReputation = async () => {
//     try {
//       await reputationManager.updateReputation(did, reputation);
//       setMessage('Reputation updated successfully!');
//     } catch (error) {
//       setMessage('Error updating reputation: ' + error.message);
//     }
//   };

//   const handleCreateProposal = async () => {
//     try {
//       await neoIDGovernance.createProposal(proposalDescription);
//       setMessage('Proposal created successfully!');
//     } catch (error) {
//       setMessage('Error creating proposal: ' + error.message);
//     }
//   };

//   return (
//     <div style={{ backgroundColor: '#FFF8E1', color: '#FF6F00', minHeight: '100vh', padding: '20px' }}>
//       <Head>
//         <title>NeoID Reputation System</title>
//         <meta name="description" content="Decentralized identity and reputation management system." />
//         <link rel="icon" href="/favicon.ico" />
//       </Head>

//       <main>
//         <h1>Welcome to the NeoID Reputation System</h1>
//         <p>Register with a Decentralized Identifier (DID) and manage your reputation.</p>

//         <section>
//           <h2>User Registration</h2>
//           <input
//             type="text"
//             placeholder="Enter your DID"
//             value={did}
//             onChange={(e) => setDid(e.target.value)}
//             style={{ padding: '10px', margin: '10px 0', borderColor: '#FF6F00' }}
//           />
//           <button onClick={handleRegister} style={{ backgroundColor: '#FF6F00', color: '#FFF', padding: '10px' }}>
//             Register User
//           </button>
//         </section>

//         <section>
//           <h2>Update Reputation</h2>
//           <input
//             type="text"
//             placeholder="Enter new reputation score"
//             value={reputation}
//             onChange={(e) => setReputation(e.target.value)}
//             style={{ padding: '10px', margin: '10px 0', borderColor: '#FF6F00' }}
//           />
//           <button onClick={handleUpdateReputation} style={{ backgroundColor: '#FF6F00', color: '#FFF', padding: '10px' }}>
//             Update Reputation
//           </button>
//         </section>

//         <section>
//           <h2>Create Governance Proposal</h2>
//           <textarea
//             placeholder="Describe your proposal"
//             value={proposalDescription}
//             onChange={(e) => setProposalDescription(e.target.value)}
//             style={{ padding: '10px', margin: '10px 0', borderColor: '#FF6F00' }}
//           ></textarea>
//           <button onClick={handleCreateProposal} style={{ backgroundColor: '#FF6F00', color: '#FFF', padding: '10px' }}>
//             Create Proposal
//           </button>
//         </section>

//         {message && (
//           <div style={{ marginTop: '20px', color: 'green' }}>
//             {message}
//           </div>
//         )}
//       </main>

//       <footer style={{ marginTop: '40px', textAlign: 'center' }}>
//         <p>&copy; {new Date().getFullYear()} NeoID. All rights reserved.</p>
//       </footer>
//     </div>
//   );
// }














 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 // import Image from "next/image";

// export default function Home() {
//   return (
//     <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
//       <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
//         <Image
//           className="dark:invert"
//           src="https://nextjs.org/icons/next.svg"
//           alt="Next.js logo"
//           width={180}
//           height={38}
//           priority
//         />
//         <ol className="list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
//           <li className="mb-2">
//             Get started by editing{" "}
//             <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-semibold">
//               src/app/page.tsx
//             </code>
//             .
//           </li>
//           <li>Save and see your changes instantly.</li>
//         </ol>

//         <div className="flex gap-4 items-center flex-col sm:flex-row">
//           <a
//             className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
//             href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <Image
//               className="dark:invert"
//               src="https://nextjs.org/icons/vercel.svg"
//               alt="Vercel logomark"
//               width={20}
//               height={20}
//             />
//             Deploy now
//           </a>
//           <a
//             className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
//             href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Read our docs
//           </a>
//         </div>
//       </main>
//       <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
//         <a
//           className="flex items-center gap-2 hover:underline hover:underline-offset-4"
//           href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <Image
//             aria-hidden
//             src="https://nextjs.org/icons/file.svg"
//             alt="File icon"
//             width={16}
//             height={16}
//           />
//           Learn
//         </a>
//         <a
//           className="flex items-center gap-2 hover:underline hover:underline-offset-4"
//           href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <Image
//             aria-hidden
//             src="https://nextjs.org/icons/window.svg"
//             alt="Window icon"
//             width={16}
//             height={16}
//           />
//           Examples
//         </a>
//         <a
//           className="flex items-center gap-2 hover:underline hover:underline-offset-4"
//           href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <Image
//             aria-hidden
//             src="https://nextjs.org/icons/globe.svg"
//             alt="Globe icon"
//             width={16}
//             height={16}
//           />
//           Go to nextjs.org →
//         </a>
//       </footer>
//     </div>
//   );
// }
