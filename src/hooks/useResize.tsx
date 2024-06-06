import { useEffect, useState } from "react";

/**
 * A custom hook that tracks the size of the window and updates it on resize.
 *
 * @return {Array} An array containing the current width and height of the window.
 */

const useResize = (): [number, number] => {
  const [size, setSize] = useState<[number, number]>([0, 0]);

  useEffect(() => {
    const getSize = () => {
      setSize([window.innerWidth, window.innerHeight]);
    };

    getSize();
    window.addEventListener("resize", getSize);

    return () => window.removeEventListener("resize", getSize);
  }, []);

  return size;
};

export default useResize;
