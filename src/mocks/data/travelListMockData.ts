import { TravelList } from '../../types/index';

export const mockTravelList: TravelList[] = [
  {
    travelCourseId: 1,
    creator: '여행하는 크리에이터',
    title: '도쿄 3박 4일 브이로그',
    viewCount: 1230000,
    uploadDate: '2024-02-10',
    thumbnailUrl: 'https://example.com/tokyo-thumbnail.jpg',
  },
  {
    travelCourseId: 2,
    creator: '세계 여행가',
    title: '오사카 여행 가이드',
    viewCount: 980000,
    uploadDate: '2024-01-20',
    thumbnailUrl: 'https://example.com/osaka-thumbnail.jpg',
  },
  {
    travelCourseId: 3,
    creator: '맛집 탐방러',
    title: '후쿠오카 미식 여행',
    viewCount: 720000,
    uploadDate: '2024-03-05',
    thumbnailUrl: 'https://example.com/fukuoka-thumbnail.jpg',
  },
];
