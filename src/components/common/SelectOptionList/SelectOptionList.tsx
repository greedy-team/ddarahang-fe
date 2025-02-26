import SelectOption from '../SelectItem/SelectOption';
import { CountryType } from '../../../types';
import { SelectOptionListContainer } from './SelectOptionList.style';
import { COUNTRIES, COUNTRYOPTION, JAPANREGIONOPTION, KOREAREGIONOPTION } from '../../../constants';
import { useSelectOptionContext } from '../../../hooks/select/useSelectOptionContext';
import { RefObject } from 'react';

interface SelectOptionListProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  optionListRef: RefObject<HTMLUListElement | null>;
}

export const SelectOptionList = ({ isOpen, setIsOpen, optionListRef }: SelectOptionListProps) => {
  const { selectedOption } = useSelectOptionContext();

  const getOptionList = (selectedOption: {
    isCountryOption: boolean;
    countryName: CountryType;
    selectedOptionLabel: string;
  }) => {
    if (selectedOption.isCountryOption) {
      return COUNTRYOPTION;
    } else if (selectedOption.countryName === COUNTRIES[0]) {
      return KOREAREGIONOPTION;
    } else if (selectedOption.countryName === COUNTRIES[1]) {
      return JAPANREGIONOPTION;
    }
    return [];
  };

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
