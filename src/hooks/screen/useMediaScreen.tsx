import { useEffect, useState } from 'react';

const useMediaScreen = () => {
  const [videoNumberInPage, setVideoNumberInPage] = useState<number>(
    window.matchMedia('(max-width: 1080px)').matches ? 8 : window.matchMedia('(max-width: 1440px)').matches ? 9 : 8,
  );

  useEffect(() => {
    const mediaQuery1080 = window.matchMedia('(max-width: 1080px)');
    const mediaQuery1440 = window.matchMedia('(max-width: 1440px)');

    const handleChange = () => {
      if (mediaQuery1080.matches) {
        setVideoNumberInPage(8);
      } else if (mediaQuery1440.matches) {
        setVideoNumberInPage(9);
      } else {
        setVideoNumberInPage(8);
      }
    };

    mediaQuery1080.addEventListener('change', handleChange);
    mediaQuery1440.addEventListener('change', handleChange);

    handleChange();

    return () => {
      mediaQuery1080.removeEventListener('change', handleChange);
      mediaQuery1440.removeEventListener('change', handleChange);
    };
  }, []);

  return { videoNumberInPage };
};

export default useMediaScreen;
