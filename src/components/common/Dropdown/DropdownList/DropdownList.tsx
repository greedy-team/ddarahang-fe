import { ReactNode } from 'react';
import { DropdownListUl } from './DropdownList.style';

interface DropdownListProps {
  isOpen: boolean;
  children: ReactNode;
}

export const DropdownList = ({ isOpen, children }: DropdownListProps) => {
  return <DropdownListUl isOpen={isOpen}>{children}</DropdownListUl>;
};
