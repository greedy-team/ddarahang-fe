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

    if (!isMobile) {
      setIsMobileMapVisible(false);
    }

    return () => window.removeEventListener('resize', handleResize);
  }, [breakpoint]);

  return {
    isMobile,
    isMobileMapVisible,
    setIsMobileMapVisible,
  };
}

export default useMobile;
