import { useState, useCallback } from 'react';

interface FetchOptions {
  method?: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';
  headers?: Record<string, string>;
  body?: any;
}

interface FetchState<T> {
  data: T | null;
  loading: boolean;
  error: string | null;
}

/**
 * Custom hook to perform a fetch request and manage its state.
 * 
 * @template T - The type of the response data.
 * @returns {[(url: string, options?: FetchOptions) => Promise<FetchState<T>>]} - A function to trigger the fetch request and the state of the fetch.
 */
const useFetch = <T,>(): [(url: string, options?: FetchOptions) => Promise<FetchState<T>>] => {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  /**
   * Fetches data from the given URL with the specified options.
   * 
   * @param {string} url - The URL to fetch data from.
   * @param {FetchOptions} [options] - Optional fetch options such as method, headers, and body.
   * @returns {Promise<FetchState<T>>} - The state of the fetch including data, loading, and error.
   */
  const fetchData = useCallback(async (url: string, options?: FetchOptions): Promise<FetchState<T>> => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(url, {
        method: options?.method || 'GET',
        headers: {
          'Content-Type': 'application/json',
          ...options?.headers,
        },
        body: options?.body ? JSON.stringify(options.body) : undefined,
      });

      if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
      }

      const result: T = await response.json();
      setData(result);
      return { data: result, loading: false, error: null };
    } catch (err) {
      const errorMsg = (err as Error).message;
      setError(errorMsg);
      return { data: null, loading: false, error: errorMsg };
    } finally {
      setLoading(false);
    }
  }, []);

  return [fetchData];
};

export default useFetch;
