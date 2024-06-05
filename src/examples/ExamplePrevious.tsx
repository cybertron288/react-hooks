import React, { useState, useEffect } from 'react';
import usePrevious from '../hooks/usePrevious';

const ExamplePrevious: React.FC = () => {
  const [count, setCount] = useState<number>(0);
  const previousCount = usePrevious(count);

  // useEffect(() => {
  //   console.log(`Current count: ${count}, Previous count: ${previousCount}`);
  // }, [count, previousCount]);

  return (
    <div>
      <p>Current count: {count}</p>
      <p>Previous count: {previousCount}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};

export default ExamplePrevious;
