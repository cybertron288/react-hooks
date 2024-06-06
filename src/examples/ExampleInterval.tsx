import React, { useState } from 'react';
import useInterval from '../hooks/useInterval';

const ExampleInterval = () => {
  const [count, setCount] = useState(0);

  // Increment count every second
  useInterval(() => {
    setCount(count + 1);
  }, 1000);

  return (
    <div>
      <p>Count: {count}</p>
    </div>
  );
};

export default ExampleInterval;
