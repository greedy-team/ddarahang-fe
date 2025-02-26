import SelectOption from '../SelectItem/SelectOption';
import { CountryType } from '../../../types';
import { SelectOptionListContainer } from './SelectOptionList.style';
import { COUNTRYOPTION, JAPANREGIONOPTION, KOREAREGIONOPTION } from '../../../constants';
import { useSelectOptionContext } from '../../../hooks/select/useSelectOptionContext';

export const SelectOptionList = () => {
  const { selectedOption } = useSelectOptionContext();

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
    <SelectOptionListContainer
      role='listbox '
      isCountryOption={selectedOption.isCountryOption}
    >
      {options.map((option) => (
        <SelectOption
          key={option.locationLabel}
          option={option}
        />
      ))}
    </SelectOptionListContainer>
  );
};
