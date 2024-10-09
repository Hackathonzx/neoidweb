"use client"; // Add this line to mark the component as a Client Component



import React from 'react';
import { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';

const ErrorPage = ({ error }: { error: Error }) => {
  return (
    <Suspense fallback={<div>Loading...</div>}>

    <div style={{ textAlign: 'center', padding: '50px' }}>
      <h1>500 - Server Error</h1>
      <p>Sorry, something went wrong.</p>
      <pre>{error.message}</pre>
    </div>

</Suspense>
  );
};

export default ErrorPage;

