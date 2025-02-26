import { COUNTRIES, COUNTRYOPTION, JAPANREGIONOPTION, KOREAREGIONOPTION } from '../constants';
import { CountryType } from '../types';

export const getOptionList = (selectedOption: {
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
