import SelectOption from '../SelectItem/SelectOption';
import { CountryType, JapaneseRegionType, KoreanRegionType } from '../../../types';
import { SelectOptionListContainer } from './SelectOptionList.style';
import { COUNTRYOPTION, JAPANREGIONOPTION, KOREAREGIONOPTION } from '../../../constants';

interface SelectProps {
  selectedOption: {
    isCountryOption: boolean;
    countryName: CountryType;
    selectedOptionLabel: string;
  };
  setSelectedOption: React.Dispatch<
    React.SetStateAction<{ selectedOptionLabel: string; countryName: CountryType; isCountryOption: boolean }>
  >;

  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const SelectOptionList = ({ isOpen, setIsOpen, selectedOption, setSelectedOption }: SelectProps) => {
  const getOptionList = (selectedOption: {
    isCountryOption: boolean;
    countryName: CountryType;
    selectedOptionLabel: string;
  }) => {
    if (selectedOption.isCountryOption) {
      return COUNTRYOPTION;
    } else if (selectedOption.countryName === '대한민국') {
      return KOREAREGIONOPTION;
    } else if (selectedOption.countryName === '일본') {
      return JAPANREGIONOPTION;
    }
    return null;
  };

  const options = getOptionList(selectedOption);

  if (!options) {
    return <></>;
  }
  return (
    isOpen && (
      <SelectOptionListContainer
        role='listbox '
        isCountryOption={selectedOption.isCountryOption}
      >
        {options.map((option) => (
          <SelectOption
            isOpen={isOpen}
            setIsOpen={setIsOpen}
            key={option.locationLabel}
            option={option}
            setSelectedOption={setSelectedOption}
          />
        ))}
      </SelectOptionListContainer>
    )
  );
};
