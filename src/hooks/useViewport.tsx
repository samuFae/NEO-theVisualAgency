import { useEffect, useState } from 'react';

export const useViewport = () => {
  const [width, setWidth] = useState<number>(Infinity);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const handleWindowResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleWindowResize);
    handleWindowResize();
    return () => window.removeEventListener('resize', handleWindowResize);
  }, []);

  return { width };
};
