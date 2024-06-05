import { useState, useEffect } from 'react';

const useThrottle = <T,>(value: T, delay: number): T => {
  const [throttledValue, setThrottledValue] = useState<T>(value);
  const [lastValue, setLastValue] = useState<T>(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setThrottledValue(lastValue);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [lastValue, delay]);

  useEffect(() => {
    setLastValue(value);
  }, [value]);

  return throttledValue;
};

export default useThrottle;
