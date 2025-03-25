import { SelectOptionType } from '../types';

export const COUNTRIES = ['대한민국', '일본', '말레이시아', '베트남', '중국'];

export const MIN_VIEW = 10000;

export const PAGE_SIZE = 5;

export const TRAVEL_LABEL = {
  COUNTRY: '여행 국가',
  REGION: '여행 지역',
};

export const NO_DATA_ERROR_MESSAGE = '여행 데이터가 존재하지 않습니다.';
export const LOAD_ERROR_MESSAGE = '데이터를 불러오는 중 오류가 발생하였습니다.';
export const MAP_LOAD_ERROR_MESSAGE = '지도 로딩 중..';
export const ERROR_MESSAGE = '서비스 이용중 불편을 드려 죄송합니다.';

export const COUNTRYOPTION: SelectOptionType[] = [
  {
    imgUrl: 'https://ddarahang-bucket.s3.ap-northeast-2.amazonaws.com/image/korea.jpg',
    locationLabel: '대한민국',
    countryLabel: '대한민국',
    locationType: '국가',
    isCountryOption: true,
  },
  {
    imgUrl: 'https://ddarahang-bucket.s3.ap-northeast-2.amazonaws.com/image/japan.jpg',
    locationLabel: '일본',
    countryLabel: '일본',
    locationType: '국가',
    isCountryOption: true,
  },
  {
    imgUrl: 'https://ddarahang-bucket.s3.ap-northeast-2.amazonaws.com/image/malaysia.jpg',
    locationLabel: '말레이시아',
    countryLabel: '말레이시아',
    locationType: '국가',
    isCountryOption: true,
  },
  {
    imgUrl: 'https://ddarahang-bucket.s3.ap-northeast-2.amazonaws.com/image/vietnam.png',
    locationLabel: '베트남',
    countryLabel: '베트남',
    locationType: '국가',
    isCountryOption: true,
  },
  {
    imgUrl: 'https://ddarahang-bucket.s3.ap-northeast-2.amazonaws.com/image/China.png',
    locationLabel: '중국',
    countryLabel: '중국',
    locationType: '국가',
    isCountryOption: true,
  },
];

export const KOREAREGIONOPTION: SelectOptionType[] = [
  {
    imgUrl: 'https://ddarahang-bucket.s3.ap-northeast-2.amazonaws.com/image/korea.jpg',
    locationLabel: '서울',
    locationType: '도시, 대한민국',
    isCountryOption: false,
    countryLabel: '대한민국',
  },
  {
    imgUrl: 'https://ddarahang-bucket.s3.ap-northeast-2.amazonaws.com/image/jeju-do.jpg',
    locationLabel: '제주도',
    locationType: '지역, 대한민국',
    isCountryOption: false,
    countryLabel: '대한민국',
  },
  {
    imgUrl: 'https://ddarahang-bucket.s3.ap-northeast-2.amazonaws.com/image/busan.jpg',
    locationLabel: '부산',
    locationType: '도시, 대한민국',
    isCountryOption: false,
    countryLabel: '대한민국',
  },
  {
    imgUrl: 'https://ddarahang-bucket.s3.ap-northeast-2.amazonaws.com/image/incheon.jpg',
    locationLabel: '인천',
    locationType: '도시, 대한민국',
    isCountryOption: false,
    countryLabel: '대한민국',
  },
  {
    imgUrl: 'https://ddarahang-bucket.s3.ap-northeast-2.amazonaws.com/image/gangwon-do.jpg',
    locationLabel: '강원도',
    locationType: '지역, 대한민국',
    isCountryOption: false,
    countryLabel: '대한민국',
  },
  {
    imgUrl: 'https://ddarahang-bucket.s3.ap-northeast-2.amazonaws.com/image/daejeon.jpg',
    locationLabel: '대전',
    locationType: '도시, 대한민국',
    isCountryOption: false,
    countryLabel: '대한민국',
  },
  {
    imgUrl: 'https://ddarahang-bucket.s3.ap-northeast-2.amazonaws.com/image/daegu.jpg',
    locationLabel: '대구',
    locationType: '도시, 대한민국',
    isCountryOption: false,
    countryLabel: '대한민국',
  },
  {
    imgUrl: 'https://ddarahang-bucket.s3.ap-northeast-2.amazonaws.com/image/gyeonggi-do.jpg',
    locationLabel: '경기도',
    locationType: '지역, 대한민국',
    isCountryOption: false,
    countryLabel: '대한민국',
  },
  {
    imgUrl: 'https://ddarahang-bucket.s3.ap-northeast-2.amazonaws.com/image/ulsan.jpg',
    locationLabel: '울산',
    locationType: '도시, 대한민국',
    isCountryOption: false,
    countryLabel: '대한민국',
  },
  {
    imgUrl: 'https://ddarahang-bucket.s3.ap-northeast-2.amazonaws.com/image/gwangju.jpg',
    locationLabel: '광주',
    locationType: '도시, 대한민국',
    isCountryOption: false,
    countryLabel: '대한민국',
  },
  {
    imgUrl: 'https://ddarahang-bucket.s3.ap-northeast-2.amazonaws.com/image/chungcheongbuk-do.jpg',
    locationLabel: '충청북도',
    locationType: '지역, 대한민국',
    isCountryOption: false,
    countryLabel: '대한민국',
  },
  {
    imgUrl: 'https://ddarahang-bucket.s3.ap-northeast-2.amazonaws.com/image/chungcheongnam-do.jpg',
    locationLabel: '충청남도',
    locationType: '지역, 대한민국',
    isCountryOption: false,
    countryLabel: '대한민국',
  },
  {
    imgUrl: 'https://ddarahang-bucket.s3.ap-northeast-2.amazonaws.com/image/gyeongsangbuk-do.jpg',
    locationLabel: '경상북도',
    locationType: '지역, 대한민국',
    isCountryOption: false,
    countryLabel: '대한민국',
  },
  {
    imgUrl: 'https://ddarahang-bucket.s3.ap-northeast-2.amazonaws.com/image/gyeongsangnam-do.jpg',
    locationLabel: '경상남도',
    locationType: '지역, 대한민국',
    isCountryOption: false,
    countryLabel: '대한민국',
  },
  {
    imgUrl: 'https://ddarahang-bucket.s3.ap-northeast-2.amazonaws.com/image/jeolabuk-do.jpg',
    locationLabel: '전라북도',
    locationType: '지역, 대한민국',
    isCountryOption: false,
    countryLabel: '대한민국',
  },
  {
    imgUrl: 'https://ddarahang-bucket.s3.ap-northeast-2.amazonaws.com/image/jeolanam-do.jpg',
    locationLabel: '전라남도',
    locationType: '지역, 대한민국',
    isCountryOption: false,
    countryLabel: '대한민국',
  },
  {
    imgUrl: 'https://ddarahang-bucket.s3.ap-northeast-2.amazonaws.com/image/ulleung-do.jpg',
    locationLabel: '울릉도',
    locationType: '지역, 대한민국',
    isCountryOption: false,
    countryLabel: '대한민국',
  },
];

export const JAPANREGIONOPTION: SelectOptionType[] = [
  {
    imgUrl: 'https://ddarahang-bucket.s3.ap-northeast-2.amazonaws.com/image/tokyo.jpg',
    locationLabel: '도쿄',
    locationType: '도시, 일본',
    isCountryOption: false,
    countryLabel: '일본',
  },
  {
    imgUrl: 'https://ddarahang-bucket.s3.ap-northeast-2.amazonaws.com/image/osaka.jpg',
    locationLabel: '오사카',
    locationType: '도시, 일본',
    isCountryOption: false,
    countryLabel: '일본',
  },
  {
    imgUrl: 'https://ddarahang-bucket.s3.ap-northeast-2.amazonaws.com/image/fukuoka.jpg',
    locationLabel: '후쿠오카',
    locationType: '도시, 일본',
    isCountryOption: false,
    countryLabel: '일본',
  },
  {
    imgUrl: 'https://ddarahang-bucket.s3.ap-northeast-2.amazonaws.com/image/okinawa.jpg',
    locationLabel: '오키나와',
    locationType: '도시, 일본',
    isCountryOption: false,
    countryLabel: '일본',
  },
  {
    imgUrl: 'https://ddarahang-bucket.s3.ap-northeast-2.amazonaws.com/image/kitakyushu.jpg',
    locationLabel: '기타큐슈',
    locationType: '도시, 일본',
    isCountryOption: false,
    countryLabel: '일본',
  },
  {
    imgUrl: 'https://ddarahang-bucket.s3.ap-northeast-2.amazonaws.com/image/yokohama.jpg',
    locationLabel: '요코하마',
    locationType: '도시, 일본',
    isCountryOption: false,
    countryLabel: '일본',
  },
  {
    imgUrl: 'https://ddarahang-bucket.s3.ap-northeast-2.amazonaws.com/image/nagoya.jpg',
    locationLabel: '나고야',
    locationType: '도시, 일본',
    isCountryOption: false,
    countryLabel: '일본',
  },
];

export const MALAYSIAREGIONOPTION: SelectOptionType[] = [
  {
    imgUrl: 'https://ddarahang-bucket.s3.ap-northeast-2.amazonaws.com/image/kota-kinabalu.jpg',
    locationLabel: '코타키나발루',
    locationType: '도시, 말레이시아',
    isCountryOption: false,
    countryLabel: '말레이시아',
  },
];

export const VIEWTNAMOPTION: SelectOptionType[] = [
  {
    imgUrl: 'https://ddarahang-bucket.s3.ap-northeast-2.amazonaws.com/image/Phu_Quoc.png',
    locationLabel: '푸꾸옥',
    locationType: '도시, 베트남',
    isCountryOption: false,
    countryLabel: '베트남',
  },
];

export const CHINAOPTION: SelectOptionType[] = [
  {
    imgUrl: 'https://ddarahang-bucket.s3.ap-northeast-2.amazonaws.com/image/shanghai.png',
    locationLabel: '상하이',
    locationType: '도시, 중국',
    isCountryOption: false,
    countryLabel: '중국',
  },
];
