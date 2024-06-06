import React, { useState, useEffect } from 'react';
import useThrottle from '../hooks/useThrottle';

const ExampleThrottle = () => {
  const [count, setCount] = useState(0);
  const [throttledCount, setThrottledCount] = useState(0);

  // Throttle the count state
  const throttledCountValue = useThrottle(count, 1000);

  // Update throttledCount state only when throttledCountValue changes
  useEffect(() => {
    setThrottledCount(throttledCountValue);
  }, [throttledCountValue]);

  const handleIncrement = () => {
    setCount((prevCount) => prevCount + 1);
  };

  return (
    <div>
      <p>Count: {count}</p>
      <p>Throttled Count: {throttledCount}</p>
      <button onClick={handleIncrement}>Increment Count</button>
    </div>
  );
};

export default ExampleThrottle;
