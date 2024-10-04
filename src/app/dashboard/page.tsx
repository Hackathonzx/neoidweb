import React, { Suspense } from 'react';
import Head from 'next/head';

function DashboardPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>

    <div style={{ backgroundColor: '#FFF8E1', color: '#FF6F00', minHeight: '100vh', padding: '20px' }}>
      <Head>
        <title>NeoID Dashboard</title>
        <meta name="description" content="Dashboard for managing NeoID." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>Dashboard</h1>
        <p>Manage your NeoID account and reputation.</p>
      </main>

      <footer style={{ marginTop: '40px', textAlign: 'center' }}>
        <p>&copy; {new Date().getFullYear()} NeoID. All rights reserved.</p>
      </footer>
    </div>
    </Suspense>
  );
}

const DashboardPageWrapper = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <DashboardPage />
  </Suspense>
);

export default DashboardPageWrapper;














// import Head from 'next/head';

// export default function DashboardPage() {
//   return (
//     <div style={{ backgroundColor: '#FFF8E1', color: '#FF6F00', minHeight: '100vh', padding: '20px' }}>
//       <Head>
//         <title>NeoID Dashboard</title>
//         <meta name="description" content="Dashboard for managing NeoID." />
//         <link rel="icon" href="/favicon.ico" />
//       </Head>

//       <main>
//         <h1>Dashboard</h1>
//         <p>Manage your NeoID account and reputation.</p>
//       </main>

//       <footer style={{ marginTop: '40px', textAlign: 'center' }}>
//         <p>&copy; {new Date().getFullYear()} NeoID. All rights reserved.</p>
//       </footer>
//     </div>
//   );
// }