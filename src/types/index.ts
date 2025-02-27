export interface SelectOptionType {
  isCountryOption: boolean;
  imgUrl: string;
  countryLabel: CountryType;
  locationLabel: string;
  locationType: string;
}

export interface TravelVideoInfo {
  creator: string;
  title: string;
  viewCount: number;
  uploadDate: string;
}

export interface TravelList extends TravelVideoInfo {
  travelCourseId: number;
  thumbnailUrl: string;
}

export interface TravelCourses extends Position {
  day: number;
  orderInDay: number;
  placeName: string;
  placeAddress: string | null;
}

export interface Position {
  lat: number;
  lng: number;
}

export interface TravelCourseDetail extends TravelVideoInfo {
  videoUrl: string;
  travelCourseId: number;
  travelDays: number;
  travelCourses: TravelCourses[];
}

export type CountryType = '대한민국' | '일본';
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

export type JapaneseRegionType = '도쿄' | '오사카' | '후쿠오카';

export type LocationType = '국가' | '지역';
