export type CountryType = '대한민국' | '일본' | '말레이시아';
export type KoreanRegionType =
  | '서울'
  | '제주도'
  | '부산'
  | '인천'
  | '강원도'
  | '대전'
  | '대구'
  | '경기도'
  | '울산'
  | '광주'
  | '충청북도'
  | '충청남도'
  | '경상북도'
  | '경상남도'
  | '전라북도'
  | '전라남도';

export type TagType = '음식' | '관광' | '쇼핑' | '숙박' | '카페' | '기타';

export type JapaneseRegionType = '도쿄' | '오사카' | '후쿠오카' | '오키나와' | '기타큐슈' | '요코하마' | '나고야';

export type LocationType = '국가' | '지역';

export type SortByType = 'uploadDate' | 'viewCount' | 'default';

export interface SelectOptionType {
  isCountryOption: boolean;
  imgUrl: string;
  countryLabel: CountryType;
  locationLabel: string;
  locationType: string;
}

export interface TravelList extends TravelVideoInfo {
  travelCourseId: number;
  thumbnailUrl: string;
}

export interface TravelVideoInfo {
  creator: string;
  title: string;
  uploadDate: string;
  viewCount: number;
}

export interface TravelCourse extends TravelVideoInfo {
  videoUrl: string;
  travelDays: number;
  details: Detail[];
}

export interface Detail extends Position {
  day: number;
  orderInDay: number;
  placeName: string;
  placeAddress: string;
  tag: TagType;
}

export interface Position {
  lat: number;
  lng: number;
}

export type OneDayCourseType = {
  placeName: string;
  day: number;
  orderInday: number;
  address: string;
  tag: TagType;
  position: {
    lat: number;
    lng: number;
  };
};
