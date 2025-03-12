import { RefObject, useEffect, useRef, useState } from 'react';

interface LazyLoadImageReturn {
  imgRef: RefObject<HTMLImageElement | null>;
  isLoaded: boolean;
}

export const useLazyLoadImage = (): LazyLoadImageReturn => {
  const imgRef = useRef<HTMLImageElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (!imgRef.current) {
      return;
    }
    const observerOptinos = {
      root: null,
      rootMargin: '10px',
      threshold: 0.1,
    };

    const observerCallback: IntersectionObserverCallback = (entries, observe) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsLoaded(true);
          observe.unobserve(entry.target);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptinos);
    const imgElement = imgRef.current;
    if (!imgElement) return;

    observer.observe(imgElement);
    return () => observer.disconnect();
  }, []);

  return { imgRef, isLoaded };
};
