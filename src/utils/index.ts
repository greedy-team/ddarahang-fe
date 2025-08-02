import {
  COUNTRIES,
  COUNTRYOPTION,
  JAPANREGIONOPTION,
  KOREAREGIONOPTION,
  MALAYSIAREGIONOPTION,
  VIEWTNAMOPTION,
  CHINAOPTION,
  PHILIPPINESOPTION,
  AUSTRALIAOPTION,
  EUROPEOPTION,
} from '../constants/options';
import { CountryType, FavoritePlaceType, SortByType } from '../types';

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
    return EUROPEOPTION;
  } else if (selectedOption.countryName === COUNTRIES[3]) {
    return AUSTRALIAOPTION;
  } else if (selectedOption.countryName === COUNTRIES[4]) {
    return MALAYSIAREGIONOPTION;
  } else if (selectedOption.countryName === COUNTRIES[5]) {
    return VIEWTNAMOPTION;
  } else if (selectedOption.countryName === COUNTRIES[6]) {
    return CHINAOPTION;
  } else if (selectedOption.countryName === COUNTRIES[7]) {
    return PHILIPPINESOPTION;
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

export const transformTodefaultFormPlaces = (places: FavoritePlaceType[]) =>
  places.map((place) => ({
    ...place,
    placeId: place.placeId,
    address: place.placeAddress,
    orderInday: place.orderInPlace,
    position: {
      lat: place.latitude,
      lng: place.longitude,
    },
    day: 1,
  }));
