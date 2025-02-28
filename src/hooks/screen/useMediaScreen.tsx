import { useEffect, useState } from 'react';

const useMediaScreen = () => {
  const [videoNumberInPage, setVideoNumberInPage] = useState<number>(
    window.matchMedia('(max-width: 1440px)').matches ? 9 : 8,
  );

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 1440px)');

    const handleChange = (e: MediaQueryListEvent) => {
      setVideoNumberInPage(e.matches ? 9 : 8);
    };

    mediaQuery.addEventListener('change', handleChange);

    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  return { videoNumberInPage };
};

export default useMediaScreen;
