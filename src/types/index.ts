export type CountryType = '대한민국' | '일본' | '유럽' | '호주' | '말레이시아' | '베트남' | '중국' | '필리핀';
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

export type TagType = '음식' | '관광' | '쇼핑' | '숙박' | '카페' | '기타' | '전체';

export type JapaneseRegionType = '도쿄' | '오사카' | '후쿠오카' | '오키나와' | '기타큐슈' | '요코하마' | '나고야';

export type LocationType = '국가' | '지역';

export type SortByType = 'uploadDate' | 'viewCount';

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
  countryName: string;
  regionName: string;
  details: Detail[];
}

export interface TravelVideoListResponse {
  content: TravelList[];
  totalPages: number;
  totalElements: number;
  number: number;
  size: number;
  first: boolean;
  last: boolean;
}

export interface Detail extends Position {
  day: number;
  orderInDay: number;
  placeId: number;
  placeName: string;
  placeAddress: string;
  tag: TagType;
}

export interface Position {
  lat: number;
  lng: number;
}

export interface BasePlaceType {
  placeId: number;
  placeName: string;
  address: string;
  tag: TagType;
  orderInday: number;
  position: {
    lat: number;
    lng: number;
  };
}

export interface OneDayCourseType extends BasePlaceType {
  day: number;
}

export interface FavoritePlaceType {
  placeName: string;
  placeAddress: string;
  tag: TagType;
  orderInPlace: number;
  latitude: number;
  longitude: number;
}
