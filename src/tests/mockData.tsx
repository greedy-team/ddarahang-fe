import { OneDayCourseType, TravelCourse } from '../types';

export const mockTravelCourse: TravelCourse = {
  creator: '유튜버 이름',
  title: '서울의 아름다운 명소들 탐방',
  uploadDate: '2025-03-09',
  viewCount: 20000,
  videoUrl: 'https://example.com/video/12345',
  travelDays: 5,
  details: [
    {
      day: 1,
      orderInDay: 1,
      placeName: '경복궁',
      placeAddress: '서울특별시 종로구 세종로 1-1',
      lat: 37.5776,
      lng: 126.9769,
    },
    {
      day: 1,
      orderInDay: 2,
      placeName: '북촌한옥마을',
      placeAddress: '서울특별시 종로구 계동길 37',
      lat: 37.5776,
      lng: 126.9769,
    },
    {
      day: 2,
      orderInDay: 1,
      placeName: '명동',
      placeAddress: '서울특별시 중구 명동',
      lat: 37.5776,
      lng: 126.9769,
    },
    {
      day: 2,
      orderInDay: 2,
      placeName: '남산서울타워',
      placeAddress: '서울특별시 용산구 남산동2가 105',
      lat: 37.5776,
      lng: 126.9769,
    },
    {
      day: 3,
      orderInDay: 1,
      placeName: '홍대',
      placeAddress: '서울특별시 마포구 홍익로 3길',
      lat: 37.5776,
      lng: 126.9769,
    },
    {
      day: 4,
      orderInDay: 1,
      placeName: '서울숲',
      placeAddress: '서울특별시 성동구 서울숲2길 24',
      lat: 37.5776,
      lng: 126.9769,
    },
    {
      day: 5,
      orderInDay: 1,
      placeName: '한강공원 여의도',
      placeAddress: '서울특별시 영등포구 여의도동',
      lat: 37.5776,
      lng: 126.9769,
    },
  ],
};

export const mockOneDayCourses: OneDayCourseType[] = [
  {
    placeName: '제주도 어딘가',
    day: 1,
    orderInday: 1,
    address: '제주특별자치도 제주시',
    position: {
      lat: 33.4996,
      lng: 126.5312,
    },
  },
  {
    placeName: '서울 어딘가',
    day: 2,
    orderInday: 2,
    address: '서울특별시 중구',
    position: {
      lat: 37.5665,
      lng: 126.978,
    },
  },
  {
    placeName: '부산 어딘가',
    day: 3,
    orderInday: 8,
    address: '부산 광역시',
    position: {
      lat: 35.1796,
      lng: 129.0756,
    },
  },
];
