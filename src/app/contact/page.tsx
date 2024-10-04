import React, { Suspense } from 'react';
import Head from 'next/head';

function ContactPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
    <div style={{ backgroundColor: '#FFF8E1', color: '#FF6F00', minHeight: '100vh', padding: '20px' }}>
      <Head>
        <title>Contact NeoID</title>
        <meta name="description" content="Get in touch with NeoID." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>Contact NeoID</h1>
        <p>If you have any questions, feel free to reach out to us.</p>
      </main>

      <footer style={{ marginTop: '40px', textAlign: 'center' }}>
        <p>&copy; {new Date().getFullYear()} NeoID. All rights reserved.</p>
      </footer>
    </div>
    </Suspense>
  );
}

const ContactPageWrapper = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <ContactPage />
  </Suspense>
);

export default ContactPageWrapper;












// import Head from 'next/head';

// export default function ContactPage() {
//   return (
//     <div style={{ backgroundColor: '#FFF8E1', color: '#FF6F00', minHeight: '100vh', padding: '20px' }}>
//       <Head>
//         <title>Contact NeoID</title>
//         <meta name="description" content="Get in touch with NeoID." />
//         <link rel="icon" href="/favicon.ico" />
//       </Head>

//       <main>
//         <h1>Contact NeoID</h1>
//         <p>If you have any questions, feel free to reach out to us.</p>
//       </main>

//       <footer style={{ marginTop: '40px', textAlign: 'center' }}>
//         <p>&copy; {new Date().getFullYear()} NeoID. All rights reserved.</p>
//       </footer>
//     </div>
//   );
// }