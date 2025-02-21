import { ReactNode } from 'react';
import { DropdownListUl } from './DropdownList.style';

interface DropdownListProps {
  children: ReactNode;
}

export const DropdownList = ({ children }: DropdownListProps) => {
  return <DropdownListUl>{children}</DropdownListUl>;
};
