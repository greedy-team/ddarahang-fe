import { ReactNode, RefObject } from 'react';
import { StyledDropDownTrigger } from './DropdownTrigger.style';

interface DropdownTriggerProps {
  children: ReactNode;
  triggerRef: RefObject<HTMLButtonElement | null>;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const DropdownTrigger = ({ children, triggerRef, onClick }: DropdownTriggerProps) => {
  return (
    <StyledDropDownTrigger
      type='button'
      onClick={onClick}
      ref={triggerRef}
    >
      {children}
    </StyledDropDownTrigger>
  );
};

export default DropdownTrigger;
