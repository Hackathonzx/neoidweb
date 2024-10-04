import React, { Suspense } from 'react';
import Head from 'next/head';

function AboutPage() {
  return (
    <div style={{ backgroundColor: '#FFF8E1', color: '#FF6F00', minHeight: '100vh', padding: '20px' }}>
      <Head>
        <title>About NeoID</title>
        <meta name="description" content="Learn more about NeoID." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>About NeoID</h1>
        <p>NeoID is a decentralized identity and reputation management system.</p>
      </main>

      <footer style={{ marginTop: '40px', textAlign: 'center' }}>
        <p>&copy; {new Date().getFullYear()} NeoID. All rights reserved.</p>
      </footer>
    </div>
  );
}

const AboutPageWrapper = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <AboutPage />
  </Suspense>
);

export default AboutPageWrapper;












// import Head from 'next/head';

// export default function AboutPage() {
//   return (
//     <div style={{ backgroundColor: '#FFF8E1', color: '#FF6F00', minHeight: '100vh', padding: '20px' }}>
//       <Head>
//         <title>About NeoID</title>
//         <meta name="description" content="Learn more about NeoID." />
//         <link rel="icon" href="/favicon.ico" />
//       </Head>

//       <main>
//         <h1>About NeoID</h1>
//         <p>NeoID is a decentralized identity and reputation management system.</p>
//       </main>

//       <footer style={{ marginTop: '40px', textAlign: 'center' }}>
//         <p>&copy; {new Date().getFullYear()} NeoID. All rights reserved.</p>
//       </footer>
//     </div>
//   );
// }