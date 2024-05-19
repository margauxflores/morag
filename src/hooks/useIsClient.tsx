import { useEffect, useState } from 'react';

/**
 * Custom hook that determines if the code is running on the client side (in the browser).
 *
 * @returns {boolean} A boolean value indicating whether the code is running on the client side.
 * @example
 * ```tsx
 * const isClient = useIsClient();
 * // Use isClient to conditionally render or execute code specific to the client side.
 * ```
 */
export const useIsClient = (): boolean => {
  const [isClient, setClient] = useState(false);
  useEffect(() => {
    setClient(true);
  }, []);

  return isClient;
};
