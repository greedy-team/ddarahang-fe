import SelectOption from '../SelectItem/SelectOption';
import { CountryType, SelectOptionType } from '../../../types';
import { SelectOptionListContainer } from './SelectOptionList.style';
import { COUNTRYOPTION, JAPANREGIONOPTION, KOREAREGIONOPTION } from '../../../constants';

interface SelectProps {
  countryName: CountryType;
  isCountryOption: boolean;
}

export const SelectOptionList = ({ isCountryOption, countryName }: SelectProps) => {
  const getOptionList = ({ isCountryOption, countryName }: SelectProps) => {
    if (isCountryOption) {
      return COUNTRYOPTION;
    } else if (countryName === '대한민국') {
      return KOREAREGIONOPTION;
    } else if (countryName === '일본') {
      return JAPANREGIONOPTION;
    }
    return '';
  };

  const options = getOptionList({ isCountryOption, countryName });

  if (!options) {
    return <></>;
  }
  return (
    <SelectOptionListContainer
      role='listbox '
      isCountryOption={isCountryOption}
    >
      {options.map((option) => (
        <SelectOption
          key={option.locationLabel}
          imgUrl={option.imgUrl}
          locationLabel={option.locationLabel}
          locationType={option.locationType}
          isCountryOption={option.isCountryOption}
        />
      ))}
    </SelectOptionListContainer>
  );
};
