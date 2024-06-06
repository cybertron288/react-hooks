import { useState, useCallback } from 'react';

/**
 * Returns a boolean value and a function that toggles the value.
 *
 * @param {boolean} initialValue - The initial value of the boolean. Defaults to false.
 * @return {[boolean, () => void]} An array containing the current boolean value and a function that toggles the value.
 */
const useToggle = (initialValue: boolean = false): [boolean, () => void] => {
  const [value, setValue] = useState<boolean>(initialValue);
  const toggle = useCallback(() => {
    setValue(prevValue => !prevValue);
  }, []);
  return [value, toggle];
};

export default useToggle;
