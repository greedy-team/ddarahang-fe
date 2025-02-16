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

export interface TravelCourses {
  day: number;
  orderInDay: number;
  placeName: string;
  placeAddress: string | null;
}

export interface TravelCourseDetail extends TravelVideoInfo {
  videoUrl: string;
  travelCourseId: number;
  travelCourses: TravelCourses[];
}

export type Country = '대한민국' | '일본';
export type KoreanRegion = '';
export type JapaneseRegion = '도쿄' | '오사카' | '후쿠오카';
