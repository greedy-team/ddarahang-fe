import { SelectOptionType } from '../types';

export const COUNTRIES = ['대한민국', '일본'];

export const MIN_VIEW = 10000;

export const TRAVEL_LABEL = {
  COUNTRY: '여행 국가',
  REGION: '여행 지역',
};

export const NO_DATA_ERROR_MESSAGE = '여행 데이터가 존재하지 않습니다..';
export const LOAD_ERROR_MESSAGE = '데이터를 불러오는 중 오류가 발생하였습니다.';
export const MAP_LOAD_ERROR_MESSAGE = '지도 로딩 중..';
export const ERROR_MESSAGE = '서비스 이용중 불편을 드려 죄송합니다.';

export const COUNTRYOPTION: SelectOptionType[] = [
  {
    imgUrl: 'https://i.imgur.com/liDWbWV.jpeg',
    locationLabel: '대한민국',
    countryLabel: '대한민국',
    locationType: '국가',
    isCountryOption: true,
  },
  {
    imgUrl: 'https://i.imgur.com/ATBRlkM.jpeg',
    locationLabel: '일본',
    countryLabel: '일본',
    locationType: '국가',
    isCountryOption: true,
  },
];

export const KOREAREGIONOPTION: SelectOptionType[] = [
  {
    imgUrl: 'https://i.imgur.com/liDWbWV.jpeg',
    locationLabel: '서울',
    locationType: '도시, 대한민국',
    isCountryOption: false,
    countryLabel: '대한민국',
  },
  {
    imgUrl: 'https://i.imgur.com/rGUq22J.jpeg',
    locationLabel: '제주도',
    locationType: '지역, 대한민국',
    isCountryOption: false,
    countryLabel: '대한민국',
  },
  {
    imgUrl: 'https://i.imgur.com/w1fBtzV.jpeg',
    locationLabel: '부산',
    locationType: '도시, 대한민국',
    isCountryOption: false,
    countryLabel: '대한민국',
  },
  {
    imgUrl: 'https://i.imgur.com/qU6mEkm.jpeg',
    locationLabel: '인천',
    locationType: '도시, 대한민국',
    isCountryOption: false,
    countryLabel: '대한민국',
  },
  {
    imgUrl: 'https://i.imgur.com/Q9wGgZe.jpeg',
    locationLabel: '강원도',
    locationType: '지역, 대한민국',
    isCountryOption: false,
    countryLabel: '대한민국',
  },
  {
    imgUrl: 'https://i.imgur.com/BATENaS.jpeg',
    locationLabel: '대전',
    locationType: '도시, 대한민국',
    isCountryOption: false,
    countryLabel: '대한민국',
  },
  {
    imgUrl: 'https://i.imgur.com/pBSiZZP.jpeg',
    locationLabel: '대구',
    locationType: '도시, 대한민국',
    isCountryOption: false,
    countryLabel: '대한민국',
  },
  {
    imgUrl: 'https://i.imgur.com/BaPsdAY.jpeg',
    locationLabel: '경기도',
    locationType: '지역, 대한민국',
    isCountryOption: false,
    countryLabel: '대한민국',
  },
  {
    imgUrl: 'https://i.imgur.com/KDtkwHK.jpeg',
    locationLabel: '울산',
    locationType: '도시, 대한민국',
    isCountryOption: false,
    countryLabel: '대한민국',
  },
  {
    imgUrl: 'https://i.imgur.com/tOtT2MJ.jpeg',
    locationLabel: '광주',
    locationType: '도시, 대한민국',
    isCountryOption: false,
    countryLabel: '대한민국',
  },
  {
    imgUrl: 'https://i.imgur.com/SBBmiJ9.jpeg',
    locationLabel: '충청북도',
    locationType: '지역, 대한민국',
    isCountryOption: false,
    countryLabel: '대한민국',
  },
  {
    imgUrl: 'https://i.imgur.com/1Qzb2gH.jpeg',
    locationLabel: '충청남도',
    locationType: '지역, 대한민국',
    isCountryOption: false,
    countryLabel: '대한민국',
  },
  {
    imgUrl: 'https://i.imgur.com/NdwMH9C.jpeg',
    locationLabel: '경상북도',
    locationType: '지역, 대한민국',
    isCountryOption: false,
    countryLabel: '대한민국',
  },
  {
    imgUrl: 'https://i.imgur.com/scGcHIZ.jpeg',
    locationLabel: '경상남도',
    locationType: '지역, 대한민국',
    isCountryOption: false,
    countryLabel: '대한민국',
  },
  {
    imgUrl: 'https://i.imgur.com/tkk2403.jpeg',
    locationLabel: '전라북도',
    locationType: '지역, 대한민국',
    isCountryOption: false,
    countryLabel: '대한민국',
  },
  {
    imgUrl: 'https://i.imgur.com/9I3sjgO.jpeg',
    locationLabel: '전라남도',
    locationType: '지역, 대한민국',
    isCountryOption: false,
    countryLabel: '대한민국',
  },
];

export const JAPANREGIONOPTION: SelectOptionType[] = [
  {
    imgUrl: 'https://i.imgur.com/wiMIQkr.jpeg',
    locationLabel: '도쿄',
    locationType: '도시, 일본',
    isCountryOption: false,
    countryLabel: '일본',
  },
  {
    imgUrl: 'https://i.imgur.com/RV87CEI.jpeg',
    locationLabel: '오사카',
    locationType: '도시, 일본',
    isCountryOption: false,
    countryLabel: '일본',
  },
  {
    imgUrl: 'https://i.imgur.com/bTkDE6D.jpeg',
    locationLabel: '후쿠오카',
    locationType: '도시, 일본',
    isCountryOption: false,
    countryLabel: '일본',
  },
  {
    imgUrl: 'https://i.imgur.com/bTkDE6D.jpeg',
    locationLabel: '오키나와',
    locationType: '도시, 일본',
    isCountryOption: false,
    countryLabel: '일본',
  }
];

export const TRAVELCOURSES = [
  {
    orderInDay: 1,
    placeName: '광안리 해수욕장',
    placeAddress: '',
  },
  {
    orderInDay: 2,
    placeName: '광안리 해수욕장',
    placeAddress: '',
  },
  {
    orderInDay: 3,
    placeName: '광안리 해수욕장',
    placeAddress: '',
  },
  {
    orderInDay: 4,
    placeName: '광안리 해수욕장',
    placeAddress: '',
  },
  {
    orderInDay: 5,
    placeName: '광안리 해수욕장',
    placeAddress: '',
  },
  {
    orderInDay: 6,
    placeName: '광안리 해수욕장',
    placeAddress: '',
  },
  {
    orderInDay: 7,
    placeName: '광안리 해수욕장',
    placeAddress: '',
  },
  {
    orderInDay: 8,
    placeName: '광안리 해수욕장',
    placeAddress: '',
  },
];
