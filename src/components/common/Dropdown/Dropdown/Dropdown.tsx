import { DropdownList } from '../DropdownList/DropdownList';
import DropdownItem from '../DropdownItem/DropdownItem';
import DropdownTrigger from '../DropdownTrigger/DropdownTrigger';
import { DropdownContainer } from './Dropdown.style';

const BaseDropdown = ({ children }: { children: React.ReactNode }) => {
  return (
    <DropdownContainer
      aria-hidden='true'
      role='button'
    >
      {children}
    </DropdownContainer>
  );
};

export const Dropdown = Object.assign(BaseDropdown, {
  Trigger: DropdownTrigger,
  List: DropdownList,
  Item: DropdownItem,
});
