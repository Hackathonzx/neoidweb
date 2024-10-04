"use client";

import { useState } from 'react';
import Head from 'next/head';
import { ethers } from 'ethers';
import { registerUser } from '@/services/neoIDService';
import styles from '@/styles/Auth.module.css';

export default function AuthPage() {
  const [isRegister, setIsRegister] = useState(false);
  const [did, setDid] = useState('');
  const [password, setPassword] = useState('');

  const handleToggle = () => {
    setIsRegister(!isRegister);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isRegister) {
      // Handle registration logic
      try {
        const provider = new (ethers as any).providers.Web3Provider((window as any).ethereum);
        await provider.send("eth_requestAccounts", []); // Request account access if needed
        const signer = provider.getSigner();
        await registerUser(did, signer);
        alert('User registered successfully');
      } catch (error) {
        console.error('Registration error:', error);
        alert('Failed to register user');
      }
    } else {
      // Handle login logic
      console.log('Logging in user with DID:', did);
      // Implement login logic here
    }
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>{isRegister ? 'Register' : 'Login'} - NeoID</title>
        <meta name="description" content="Login or register to NeoID Reputation System." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1>{isRegister ? 'Register' : 'Login'}</h1>
        <form onSubmit={handleSubmit} className={styles.form}>
          <input
            type="text"
            placeholder="Enter your DID"
            value={did}
            onChange={(e) => setDid(e.target.value)}
            className={styles.input}
            required
          />
          {isRegister && <small className={styles.tip}>(create your unique DID username)</small>}
          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className={styles.input}
            required
          />
          <button type="submit" className={styles.button}>
            {isRegister ? 'Register' : 'Login'}
          </button>
        </form>
        <button onClick={handleToggle} className={styles.toggleButton}>
          {isRegister ? 'Already have an account? Login' : "Don't have an account? Register"}
        </button>
      </main>

      <footer className={styles.footer}>
        <p>&copy; {new Date().getFullYear()} NeoID. All rights reserved.</p>
      </footer>
    </div>
  );
}



























// // app/login/page.tsx
// "use client";

// import { useState } from 'react';
// import Head from 'next/head';
// import { ethers } from 'ethers';
// import { registerUser } from '@/services/neoIDService';
// import styles from '@/styles/Auth.module.css';

// export default function AuthPage() {
//   const [isRegister, setIsRegister] = useState(false);
//   const [did, setDid] = useState('');
//   const [password, setPassword] = useState('');

//   const handleToggle = () => {
//     setIsRegister(!isRegister);
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     if (isRegister) {
//       // Handle registration logic
//       const provider = new (ethers as any).providers.Web3Provider(window.ethereum);
//       const signer = provider.getSigner();
//       await registerUser(did, signer);
//     } else {
//       // Handle login logic
//       console.log('Logging in user with DID:', did);
//     }
//   };

//   return (
//     <div className={styles.container}>
//       <Head>
//         <title>{isRegister ? 'Register' : 'Login'} - NeoID</title>
//         <meta name="description" content="Login or register to NeoID Reputation System." />
//         <link rel="icon" href="/favicon.ico" />
//       </Head>

//       <main className={styles.main}>
//         <h1>{isRegister ? 'Register' : 'Login'}</h1>
//         <form onSubmit={handleSubmit} className={styles.form}>
//           <input
//             type="text"
//             placeholder="Enter your DID"
//             value={did}
//             onChange={(e) => setDid(e.target.value)}
//             className={styles.input}
//             required
//           />
//           {isRegister && <small className={styles.tip}>(username)</small>}
//           <input
//             type="password"
//             placeholder="Enter your password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             className={styles.input}
//             required
//           />
//           <button type="submit" className={styles.button}>
//             {isRegister ? 'Register' : 'Login'}
//           </button>
//         </form>
//         <button onClick={handleToggle} className={styles.toggleButton}>
//           {isRegister ? 'Already have an account? Login' : "Don't have an account? Register"}
//         </button>
//       </main>

//       <footer className={styles.footer}>
//         <p>&copy; {new Date().getFullYear()} NeoID. All rights reserved.</p>
//       </footer>
//     </div>
//   );
// }





























// "use client";


// import { useState } from 'react';
// import Head from 'next/head';
// import styles from '@/styles/Auth.module.css';

// export default function AuthPage() {
//   const [isRegister, setIsRegister] = useState(false);
//   const [did, setDid] = useState('');
//   const [password, setPassword] = useState('');

//   const handleToggle = () => {
//     setIsRegister(!isRegister);
//   };

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     if (isRegister) {
//       // Handle registration logic
//       console.log('Registering user with DID:', did);
//     } else {
//       // Handle login logic
//       console.log('Logging in user with DID:', did);
//     }
//   };

//   return (
//     <div className={styles.container}>
//       <Head>
//         <title>{isRegister ? 'Register' : 'Login'} - NeoID</title>
//         <meta name="description" content="Login or register to NeoID Reputation System." />
//         <link rel="icon" href="/favicon.ico" />
//       </Head>

//       <main className={styles.main}>
//         <h1>{isRegister ? 'Register' : 'Login'}</h1>
//         <form onSubmit={handleSubmit} className={styles.form}>
//           <input
//             type="text"
//             placeholder="Enter your DID"
//             value={did}
//             onChange={(e) => setDid(e.target.value)}
//             className={styles.input}
//             required
//           />
//           <input
//             type="password"
//             placeholder="Enter your password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             className={styles.input}
//             required
//           />
//           <button type="submit" className={styles.button}>
//             {isRegister ? 'Register' : 'Login'}
//           </button>
//         </form>
//         <button onClick={handleToggle} className={styles.toggleButton}>
//           {isRegister ? 'Already have an account? Login' : "Don't have an account? Register"}
//         </button>
//       </main>

//       <footer className={styles.footer}>
//         <p>&copy; {new Date().getFullYear()} NeoID. All rights reserved.</p>
//       </footer>
//     </div>
//   );
// }























// "use client";

// import { useState } from 'react';
// import Head from 'next/head';
// import styles from '@/styles/Auth.module.css';

// export default function AuthPage() {
//   const [isRegister, setIsRegister] = useState(false);
//   const [did, setDid] = useState('');
//   const [password, setPassword] = useState('');

//   const handleToggle = () => {
//     setIsRegister(!isRegister);
//   };

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     if (isRegister) {
//       // Handle registration logic
//       console.log('Registering user with DID:', did);
//     } else {
//       // Handle login logic
//       console.log('Logging in user with DID:', did);
//     }
//   };

//   return (
//     <div className={styles.container}>
//       <Head>
//         <title>{isRegister ? 'Register' : 'Login'} - NeoID</title>
//         <meta name="description" content="Login or register to NeoID Reputation System." />
//         <link rel="icon" href="/favicon.ico" />
//       </Head>

//       <main className={styles.main}>
//       <h6>Welcome to the world of decentralized privacy...</h6>

//         <h1>{isRegister ? 'Register' : 'Login'} to NeoID</h1>

//         <form onSubmit={handleSubmit} className={styles.form}>
//           <input
//             type="text"
//             placeholder="Enter your DID (a unique username)"
//             value={did}
//             onChange={(e) => setDid(e.target.value)}
//             className={styles.input}
//             required
//           />
//           <input
//             type="password"
//             placeholder="Enter your password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             className={styles.input}
//             required
//           />
//           <button type="submit" className={styles.button}>
//             {isRegister ? 'Register' : 'Login'} 
//           </button>
//         </form>
//         <button onClick={handleToggle} className={styles.toggleButton}>
//           {isRegister ? 'Already have an account? Login' : "Don't have an account? Register"}
//         </button>
//       </main>

//       <footer className={styles.footer}>
//         <p>&copy; {new Date().getFullYear()} NeoID. All rights reserved.</p>
//       </footer>
//     </div>
//   );
// }

















// "use client";

// import { useState } from 'react';
// import Head from 'next/head';

// export default function LoginPage() {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   const handleLogin = async () => {
//     // Handle login logic here
//     console.log('Logging in with', email, password);
//   };

//   return (
//     <div style={{ minHeight: '100vh', padding: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
//       <Head>
//         <title>Login - NeoID</title>
//         <meta name="description" content="Login to NeoID" />
//         <link rel="icon" href="/favicon.ico" />
//       </Head>

//       <h1>Login to NeoID</h1>
//       <input
//         type="email"
//         placeholder="Enter your DID "
//         value={email}
//         onChange={(e) => setEmail(e.target.value)}
//       />
//       <input
//         type="password"
//         placeholder="Enter your password"
//         value={password}
//         onChange={(e) => setPassword(e.target.value)}
//       />
//       <button onClick={handleLogin}>Login</button>
//     </div>
//   );
// }
