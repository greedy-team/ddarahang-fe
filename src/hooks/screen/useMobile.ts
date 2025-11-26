import { useEffect, useState } from 'react';

function useMobile(breakpoint: number = 780) {
  const [isMobileMapVisible, setIsMobileMapVisible] = useState(false);

  const [isMobile, setIsMobile] = useState(() => window.innerWidth <= breakpoint);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= breakpoint);
    };

    window.addEventListener('resize', handleResize);

    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, [breakpoint]);

  useEffect(() => {
    if (!isMobile) {
      setIsMobileMapVisible(false);
    }
  }, [isMobile]);

  return {
    isMobile,
    isMobileMapVisible,
    setIsMobileMapVisible,
  };
}

export default useMobile;
