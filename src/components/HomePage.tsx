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
    } catch (error) {
      if (error instanceof Error) {
        setMessage('Error registering user: ' + error.message);
      } else {
        setMessage('Error registering user: An unknown error occurred.');
      }
    }
  };

  const handleUpdateReputation = async () => {
    try {
      await reputationManager.updateReputation(did, reputation);
      setMessage('Reputation updated successfully!');
    } catch (error) {
      if (error instanceof Error) {
        setMessage('Error updating reputation: ' + error.message);
      } else {
        setMessage('Error updating reputation: An unknown error occurred.');
      }
    }
  };

  const handleCreateProposal = async () => {
    try {
      await neoIDGovernance.createProposal(proposalDescription);
      setMessage('Proposal created successfully!');
    } catch (error) {
      if (error instanceof Error) {
        setMessage('Error creating proposal: ' + error.message);
      } else {
        setMessage('Error creating proposal: An unknown error occurred.');
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
        <h1 style={{ backgroundColor: '#FFFFFF' }}>Welcome to the NeoID Reputation System</h1>
        <p>Register with a Decentralized Identifier (DID) and manage your reputation.</p>

        <section style={{ backgroundColor: '#FFFFFF' }}>
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

        <section style={{ backgroundColor: '#FFFFFF' }}>
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

        <section style={{ backgroundColor: '#FFFFFF' }}>
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