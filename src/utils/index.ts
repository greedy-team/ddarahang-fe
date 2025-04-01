import {
  COUNTRIES,
  COUNTRYOPTION,
  JAPANREGIONOPTION,
  KOREAREGIONOPTION,
  MALAYSIAREGIONOPTION,
  VIEWTNAMOPTION,
  CHINAOPTION,
} from '../constants/options';
import { CountryType, SortByType } from '../types';

export const getRegionOptionList = (selectedOption: {
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
  } else if (selectedOption.countryName === COUNTRIES[2]) {
    return MALAYSIAREGIONOPTION;
  } else if (selectedOption.countryName === COUNTRIES[3]) {
    return VIEWTNAMOPTION;
  } else if (selectedOption.countryName === COUNTRIES[4]) {
    return CHINAOPTION;
  }
  return [];
};

export const getSortedOption = (sortOption: SortByType) => {
  if (sortOption === 'uploadDate') {
    return '최신순';
  }
  if (sortOption === 'viewCount') {
    return '조회순';
  }
  return '정렬 옵션';
};
