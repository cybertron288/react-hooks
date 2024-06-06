import { useState, useEffect } from "react";

/**
 * Retrieves the value stored in localStorage for the given key, or returns the default value if no value is found.
 *
 * @param {string} key - The key used to retrieve the value from localStorage.
 * @param {T} defaultValue - The default value to return if no value is found in localStorage.
 * @return {T} The value stored in localStorage for the given key, or the default value if no value is found.
 */
function getStorageValue<T>(key: string, defaultValue: T): T {
  // getting stored value
  const saved = localStorage.getItem(key);
  if (saved) {
    try {
      const initial = JSON.parse(saved) as T;
      return initial;
    } catch (e) {
      console.error('Error parsing JSON from localStorage', e);
    }
  }
  return defaultValue;
}

/**
 * A custom hook that allows you to store and retrieve values in the browser's localStorage.
 *
 * @param {string} key - The key used to identify the stored value in localStorage.
 * @param {T} defaultValue - The default value to return if no value is found in localStorage.
 * @return {[T, (value: T) => void]} An array containing the stored value and a function to update the value.
 */
 const useLocalStorage = <T,>(key: string, defaultValue: T): [T, (value: T) => void] => {
  const [value, setValue] = useState<T>(() => {
    return getStorageValue(key, defaultValue);
  });

  useEffect(() => {
    // storing input name
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
};

export default useLocalStorage;