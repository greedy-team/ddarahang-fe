import { COUNTRIES, COUNTRYOPTION, JAPANREGIONOPTION, KOREAREGIONOPTION } from '../constants';
import { CountryType, SortByType } from '../types';

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

export const getSortedOption = (sortOption: SortByType) => {
  if (sortOption === 'uploadDate') {
    return '최신 순';
  }
  if (sortOption === 'viewCount') {
    return '조회수 순';
  }
  return '정렬 옵션';
};
