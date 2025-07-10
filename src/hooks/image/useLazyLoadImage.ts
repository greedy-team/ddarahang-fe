import { RefObject, useEffect, useRef, useState } from 'react';

interface LazyLoadImageReturn {
  imgRef: RefObject<HTMLImageElement | null>;
  isLoaded: boolean;
  isInView: boolean;
}

export const useLazyLoadImage = (): LazyLoadImageReturn => {
  const imgRef = useRef<HTMLImageElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    if (!imgRef.current) {
      return;
    }
    const observerOptions = {
      root: null,
      rootMargin: '10px',
      threshold: 0.1,
    };

    const observerCallback: IntersectionObserverCallback = (entries, observe) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observe.unobserve(entry.target);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    const imgElement = imgRef.current;
    if (!imgElement) return;

    observer.observe(imgElement);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const imgElement = imgRef.current;
    if (!imgElement || !isInView) return;

    const handleLoad = () => {
      setIsLoaded(true);
    };

    const handleError = () => {
      setIsLoaded(true);
    };

    if (imgElement.complete && imgElement.naturalHeight !== 0) {
      setIsLoaded(true);
      return;
    }

    imgElement.addEventListener('load', handleLoad);
    imgElement.addEventListener('error', handleError);

    return () => {
      imgElement.removeEventListener('load', handleLoad);
      imgElement.removeEventListener('error', handleError);
    };
  }, [isInView]);

  return { imgRef, isLoaded, isInView };
};
