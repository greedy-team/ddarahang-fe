import SelectOption from '../SelectItem/SelectOption';
import { SelectOptionListContainer } from './SelectOptionList.style';
import { useSelectOptionContext } from '../../../hooks/select/useSelectOptionContext';
import { RefObject } from 'react';
import { getOptionList } from '../../../utils';

interface SelectOptionListProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  optionListRef: RefObject<HTMLUListElement | null>;
}

export const SelectOptionList = ({ isOpen, setIsOpen, optionListRef }: SelectOptionListProps) => {
  const { selectedOption } = useSelectOptionContext();

  const options = getOptionList(selectedOption);

  if (!options.length) {
    return null;
  }

  return (
    <SelectOptionListContainer
      role='listbox'
      isCountryOption={selectedOption.isCountryOption}
      ref={optionListRef}
      isOpen={isOpen}
    >
      {options.map((option) => (
        <SelectOption
          setIsOpen={setIsOpen}
          key={option.locationLabel}
          option={option}
        />
      ))}
    </SelectOptionListContainer>
  );
};
