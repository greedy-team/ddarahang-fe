import { Dispatch, RefObject, SetStateAction } from 'react';
import { useSelectOptionContext } from '../../../../hooks/context/useSelectOptionContext';
import { getOptionList } from '../../../../utils';
import { SelectOptionListContainer } from './SelectOptionList.style';
import SelectOption from '../SelectItem/SelectOption';

interface SelectOptionListProps {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
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
      ref={optionListRef}
      $isCountryOption={selectedOption.isCountryOption}
      $isOpen={isOpen}
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
