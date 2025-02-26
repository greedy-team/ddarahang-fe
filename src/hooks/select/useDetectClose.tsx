import { RefObject, useEffect, useState } from 'react';

interface UseDetectCloseProps {
  elem: RefObject<HTMLUListElement | null>;
  tabRefs: RefObject<HTMLButtonElement | null>[];
  initialState: boolean;
}

const useDetectClose = ({ elem, tabRefs, initialState }: UseDetectCloseProps) => {
  const [isOpen, setIsOpen] = useState(initialState);

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const isTabClick = tabRefs.some((tabRef) => tabRef.current && tabRef.current.contains(e.target as Node));

      if (isTabClick) {
        setIsOpen(true);
      } else if (elem.current && !elem.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    if (isOpen) {
      window.addEventListener('click', onClick);
    } else {
      window.removeEventListener('click', onClick);
    }

    return () => {
      window.removeEventListener('click', onClick);
    };
  }, [isOpen, elem]);

  return [isOpen, setIsOpen] as const;
};

export default useDetectClose;
