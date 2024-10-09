"use client";

import { Suspense, useState } from 'react';
import Head from 'next/head';
import styles from '@/styles/Settings.module.css';

export default function SettingsPage() {
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [smsNotifications, setSmsNotifications] = useState(false);

  return (
    <Suspense fallback={<div>Loading...</div>}>

    <div className={styles.container}>
      <Head>
        <title>NeoID Settings</title>
        <meta name="description" content="Manage your NeoID account settings." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1>NeoID Settings</h1>

        <section className={styles.section}>
          <h2>Account Settings</h2>
          <button className={styles.button}>Change Password</button>
          <button className={styles.button}>Update Email</button>
          <button className={styles.button}>Enable Two-Factor Authentication</button>
        </section>

        <section className={styles.section}>
          <h2>Reputation Management</h2>
          <button className={styles.button}>View Reputation Score</button>
          <button className={styles.button}>Request Reputation Review</button>
        </section>

        <section className={styles.section}>
          <h2>Access Control</h2>
          <button className={styles.button}>Manage Whitelisted Addresses</button>
          <button className={styles.button}>Set Minimum Reputation for Access</button>
        </section>

        <section className={styles.section}>
          <h2>Governance</h2>
          <button className={styles.button}>Create Governance Proposals</button>
          <button className={styles.button}>View Voting History</button>
        </section>

        <section className={styles.section}>
          <h2>Notifications</h2>
          <div className={styles.toggle}>
            <label>Email Notifications</label>
            <input
              type="checkbox"
              checked={emailNotifications}
              onChange={() => setEmailNotifications(!emailNotifications)}
            />
          </div>
          <div className={styles.toggle}>
            <label>SMS Notifications</label>
            <input
              type="checkbox"
              checked={smsNotifications}
              onChange={() => setSmsNotifications(!smsNotifications)}
            />
          </div>
        </section>

        <section className={styles.section}>
          <h2>Privacy</h2>
          <button className={styles.button}>Manage Data Sharing Preferences</button>
          <button className={styles.button}>Delete Account</button>
        </section>

        <section className={styles.section}>
          <h2>Security</h2>
          <button className={styles.button}>View Login History</button>
          <button className={styles.button}>Manage Authorized Devices</button>
        </section>
      </main>

      <footer className={styles.footer}>
        <p>&copy; {new Date().getFullYear()} NeoID. All rights reserved.</p>
      </footer>
    </div>
    </Suspense>
  );
}