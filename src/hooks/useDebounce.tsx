import { useState, useEffect } from 'react';

/**
 * Creates a debounced value that delays updating the value by the specified delay.
 *
 * @template T - The type of the value being debounced.
 * @param {T} value - The initial value to be debounced.
 * @param {number} delay - The delay in milliseconds before updating the debounced value.
 * @return {T} The debounced value.
 */
const useDebounce = <T,>(value: T, delay: number): T => {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
};

export default useDebounce;
