import { useState, useEffect, useRef } from 'react';

/**
 * Returns a tuple containing a ref object and a boolean indicating whether the ref is currently being hovered over.
 *
 * @return {[React.RefObject<any>, boolean]} A tuple containing a ref object and a boolean indicating whether the ref is currently being hovered over.
 */
const useHover = (): [React.RefObject<any>, boolean] => {
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const ref = useRef<any>(null);

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  useEffect(() => {
    const element = ref.current;
    if (element) {
      element.addEventListener('mouseenter', handleMouseEnter);
      element.addEventListener('mouseleave', handleMouseLeave);

      return () => {
        element.removeEventListener('mouseenter', handleMouseEnter);
        element.removeEventListener('mouseleave', handleMouseLeave);
      };
    }
  }, []);

  return [ref, isHovered];
};

export default useHover;
