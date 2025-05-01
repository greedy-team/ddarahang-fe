import { Dispatch, RefObject, SetStateAction } from 'react';
import { useSelectOptionContext } from '../../../../hooks/context/useSelectOptionContext';
import { getRegionOptionList } from '../../../../utils';
import { SelectOptionListContainer, MobileTitle } from './SelectOptionList.style';
import SelectOption from '../SelectItem/SelectOption';

interface SelectOptionListProps {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  setCurrentPageNumber: (currentPageNumber: number) => void;
  optionListRef: RefObject<HTMLUListElement | null>;
}

export const SelectOptionList = ({ isOpen, setIsOpen, setCurrentPageNumber, optionListRef }: SelectOptionListProps) => {
  const { selectedOption } = useSelectOptionContext();

  const options = getRegionOptionList(selectedOption) || [];

  if (options.length === 0) {
    return null;
  }

  return (
    <SelectOptionListContainer
      role='listbox'
      ref={optionListRef}
      $isCountryOption={selectedOption.isCountryOption}
      $isOpen={isOpen}
    >
      <MobileTitle>여행 국가와 지역을 선택해주세요</MobileTitle>
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
