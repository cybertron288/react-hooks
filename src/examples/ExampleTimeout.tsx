import React, { useState } from 'react';
import useTimeout from '../hooks/useTimeout';

const ExampleTimeout = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Set isVisible to true after 2 seconds
  useTimeout(() => {
    setIsVisible(true);
  }, 2000);

  return (
    <div>
      {isVisible ? <p>Content visible after 2 seconds!</p> : <p>Waiting...</p>}
    </div>
  );
};

export default ExampleTimeout;
