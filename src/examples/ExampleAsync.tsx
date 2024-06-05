import React, { ReactNode } from 'react';
import useAsync from '../hooks/useAsync';

const simulateAsyncTask = async (): Promise<string> => {
  // Simulate an asynchronous task that resolves after 3 seconds
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('Task completed!');
    }, 3000);
  });
};

const ExampleComponent = () => {
  const { execute, status, value, error } = useAsync(simulateAsyncTask, false);

  return (
    <div>
      <button onClick={execute} disabled={status === 'pending'}>
        {status === 'pending' ? 'Processing...' : 'Start Async Task'}
      </button>
      {status === 'success' && <div>Result: {value}</div>}
      {status === 'error' && error && <div>Error: {error.message}</div>}
    </div>
  );
};

export default ExampleComponent;
