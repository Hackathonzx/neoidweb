// import '@/styles/globals.css';
// import LoadingOverlay from '@/app/LoadingOverlay';

// export default function RootLayout({ children }: { children: React.ReactNode }) {
//   return (
//     <html lang="en">
//       <body>
//         <LoadingOverlay />
//         {children}
//       </body>
//     </html>
//   );
// }












'use client'

// app/Layout.tsx
import React, { Suspense, useState } from 'react';
import '@/styles/globals.css';
import LoadingOverlay from '@/app/LoadingOverlay';
import Link from 'next/link';
import styles from './Layout.module.css';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <html lang="en">
        <body className={styles.body}>
          <LoadingOverlay />
          <header className={styles.navbar}>
            <div className={styles.logo}>
              <h1>NeoID</h1>
            </div>
            <ul className={styles.navLinks}>
              <li>
                <Link href="/about">About</Link>
              </li>
              <li>
                <Link href="/dashboard">Settings</Link>
              </li>
              <li>
                <Link href="/contact">Login</Link>
              </li>
            </ul>
            <div className={styles.dropdown}>
              <img
                src="/logo.png"
                alt="NeoID"
                className={styles.logoImage}
                onClick={toggleDropdown}
              />
              {dropdownOpen && (
                <div className={styles.dropdownContent}>
                  <Link href="/account">Account</Link>
                  <Link href="/login">Login</Link>
                </div>
              )}
            </div>
          </header>
          <main className={styles.mainContent}>
            {children}
          </main>
          <footer className={styles.footer}>
            {/* <p>&copy; {new Date().getFullYear()} NeoID. All rights reserved.</p> */}
          </footer>
        </body>
      </html>
    </Suspense>
  );
}









// 'use client'


// // app/Layout.tsx
// import React, { Suspense, useState } from 'react';
// import '@/styles/globals.css';
// import LoadingOverlay from '@/app/LoadingOverlay';
// import Link from 'next/link';
// import styles from './Layout.module.css';

// export default function RootLayout({ children }: { children: React.ReactNode }) {
//   const [dropdownOpen, setDropdownOpen] = useState(false);

//   const toggleDropdown = () => {
//     setDropdownOpen(!dropdownOpen);
//   };

//   return (
//     <Suspense fallback={<div>Loading...</div>}>
//       <html lang="en">
//         <body>
//           <LoadingOverlay />
//           <header className={styles.navbar}>
//             <div className={styles.logo}>
//               <h1>NeoID</h1>
//             </div>
//             <ul className={styles.navLinks}>
//               <li>
//                 <Link href="/about">About</Link>
//               </li>
//               <li>
//                 <Link href="/dashboard">Settings</Link>
//               </li>
//               <li>
//                 <Link href="/contact">Login</Link>
//               </li>
//             </ul>
//             <div className={styles.dropdown}>
//               <img
//                 src="@/public/logo.png"
//                 alt="Logo"
//                 className={styles.logoImage}
//                 onClick={toggleDropdown}
//               />
//               {dropdownOpen && (
//                 <div className={styles.dropdownContent}>
//                   <Link href="/account">Account</Link>
//                   <Link href="/login">Login</Link>
//                 </div>
//               )}
//             </div>
//           </header>
//           <main>
//             {children}
//           </main>
//           <footer>
//             {/* <p>&copy; {new Date().getFullYear()} NeoID. All rights reserved.</p> */}
//           </footer>
//         </body>
//       </html>
//     </Suspense>
//   );
// }



























// import React, { Suspense } from 'react';
// import '@/styles/globals.css';
// import LoadingOverlay from '@/app/LoadingOverlay';

// export default function RootLayout({ children }: { children: React.ReactNode }) {
//   return (
//     <Suspense fallback={<div>Loading...</div>}>

//     <html lang="en">
//       <body>
//         <LoadingOverlay />
//         <header>
//           <h1> NeoID</h1>
//         </header>
//         <main>
//           {children}
//         </main>
//         <footer>
//           <p>&copy; {new Date().getFullYear()} NeoID. All rights reserved.</p>
//         </footer>
//       </body>
//     </html>
//     </Suspense>
//   );
// }




// "use client";

// import { useEffect, useState } from 'react';
// import { useRouter } from 'next/router';
// import Image from 'next/image';
// import logo from '@/public/logo.png';
// // import '../styles/globals.css';
// import '@/styles/globals.css';

// export default function RootLayout({ children }: { children: React.ReactNode }) {
//   const [loading, setLoading] = useState(false);
//   const router = useRouter();

//   useEffect(() => {
//     const handleStart = () => setLoading(true);
//     const handleComplete = () => setLoading(false);

//     router.events.on('routeChangeStart', handleStart);
//     router.events.on('routeChangeComplete', handleComplete);
//     router.events.on('routeChangeError', handleComplete);

//     return () => {
//       router.events.off('routeChangeStart', handleStart);
//       router.events.off('routeChangeComplete', handleComplete);
//       router.events.off('routeChangeError', handleComplete);
//     };
//   }, [router]);

//   return (
//     <html lang="en">
//       <body>
//         {loading && (
//           <div className="overlay">
//             <Image src={logo} alt="App Logo" className="logo" />
//           </div>
//         )}
//         {children}
//       </body>
//     </html>
//   );
// }










// export default function RootLayout({ children }: { children: React.ReactNode }) {
//   return (
//     <html lang="en">
//       <head />
//       <body>
//         {children}
//       </body>
//     </html>
//   );
// }








// import type { Metadata } from "next";
// import localFont from "next/font/local";
// import "./globals.css";

// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

// export const metadata: Metadata = {
//   title: "Create Next App",
//   description: "Generated by create next app",
// };

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   return (
//     <html lang="en">
//       <body
//         className={`${geistSans.variable} ${geistMono.variable} antialiased`}
//       >
//         {children}
//       </body>
//     </html>
//   );
// }
