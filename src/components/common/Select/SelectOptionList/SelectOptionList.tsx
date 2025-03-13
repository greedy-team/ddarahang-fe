import { Dispatch, RefObject, SetStateAction } from 'react';
import { useSelectOptionContext } from '../../../../hooks/context/useSelectOptionContext';
import { getOptionList } from '../../../../utils';
import { SelectOptionListContainer } from './SelectOptionList.style';
import SelectOption from '../SelectItem/SelectOption';

interface SelectOptionListProps {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  setCurrentPageNumber: (currentPageNumber: number) => void;
  optionListRef: RefObject<HTMLUListElement | null>;
}

export const SelectOptionList = ({ isOpen, setIsOpen, setCurrentPageNumber, optionListRef }: SelectOptionListProps) => {
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
          setCurrentPageNumber={setCurrentPageNumber}
          key={option.locationLabel}
          option={option}
        />
      ))}
    </SelectOptionListContainer>
  );
};
