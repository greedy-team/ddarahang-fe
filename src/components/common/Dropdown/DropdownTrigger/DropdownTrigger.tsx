import { ReactNode } from 'react';
import { StyledDropDownTrigger } from './DropdownTrigger.style';

interface DropdownTriggerProps {
  children: ReactNode;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const DropdownTrigger = ({ children, onClick }: DropdownTriggerProps) => {
  return (
    <StyledDropDownTrigger
      type='button'
      onClick={onClick}
    >
      {children}
    </StyledDropDownTrigger>
  );
};

export default DropdownTrigger;
