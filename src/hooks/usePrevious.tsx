import { useRef, useEffect } from 'react';

/**
 * Returns the previous value of a given value.
 *
 * @template T - The type of the value being tracked.
 * @param {T} value - The current value to track.
 * @return {T | undefined} The previous value of the given value, or undefined if no previous value exists.
 */
const usePrevious = <T,>(value: T): T | undefined => {
  const ref = useRef<T | undefined>(undefined);

  useEffect(() => {
    ref.current = value;
  }, [value]);

  return ref.current;
};

export default usePrevious;
