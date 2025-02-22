import { ReactNode } from 'react';
import { DropdownItemButton } from './DropdownItem.style';

interface DropdownItemProps {
  children: ReactNode;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const DropdownItem = ({ children, onClick }: DropdownItemProps) => {
  return (
    <li>
      <DropdownItemButton
        onClick={onClick}
        type='button'
      >
        {children}
      </DropdownItemButton>
    </li>
  );
};

export default DropdownItem;
