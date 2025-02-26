import { RefObject, useEffect, useState } from 'react';

interface UseDetectCloseProps {
  elem: RefObject<HTMLUListElement | null>;
  initialState: boolean;
}

const useDetectClose = ({ elem, initialState }: UseDetectCloseProps) => {
  const [isOpen, setIsOpen] = useState(initialState);

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (elem.current && !elem.current.contains(e.target as Node)) {
        setIsOpen((prevIsOpen) => !prevIsOpen);
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
  }, [setIsOpen, elem]);

  return [isOpen, setIsOpen] as const;
};

export default useDetectClose;
