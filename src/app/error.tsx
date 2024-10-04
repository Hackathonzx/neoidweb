import React from 'react';

const ErrorPage = ({ error }: { error: Error }) => {
  return (
    <div style={{ textAlign: 'center', padding: '50px' }}>
      <h1>500 - Server Error</h1>
      <p>Sorry, something went wrong.</p>
      <pre>{error.message}</pre>
    </div>
  );
};

export default ErrorPage;