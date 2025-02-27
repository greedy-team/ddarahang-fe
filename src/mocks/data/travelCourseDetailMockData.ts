import { TravelCourseDetail } from '../../types/index';

export const mockTravelCourseDetails: TravelCourseDetail[] = [
  {
    travelCourseId: 1,
    travelDays: 2,
    creator: '여행하는 크리에이터',
    title: '도쿄 3박 4일 브이로그',
    viewCount: 1230000,
    uploadDate: '2024-02-10',
    videoUrl: 'https://www.youtube.com/watch?v=tokyo123',
    travelCourses: [
      {
        day: 1,
        orderInDay: 1,
        placeName: '도쿄 타워',
        placeAddress: '4 Chome-2-8 Shibakoen, Minato City, Tokyo, Japan',
      },
      {
        day: 1,
        orderInDay: 2,
        placeName: '츠키지 시장',
        placeAddress: '5 Chome-2-1 Tsukiji, Chuo City, Tokyo, Japan',
      },
      {
        day: 2,
        orderInDay: 1,
        placeName: '아사쿠사 센소지',
        placeAddress: '2 Chome-3-1 Asakusa, Taito City, Tokyo, Japan',
      },
    ],
  },
  {
    travelCourseId: 2,
    travelDays: 2,
    creator: '세계 여행가',
    title: '오사카 여행 가이드',
    viewCount: 980000,
    uploadDate: '2024-01-20',
    videoUrl: 'https://www.youtube.com/watch?v=osaka567',
    travelCourses: [
      {
        day: 1,
        orderInDay: 1,
        placeName: '도톤보리',
        placeAddress: 'Dotonbori, Chuo Ward, Osaka, Japan',
      },
      {
        day: 1,
        orderInDay: 2,
        placeName: '오사카 성',
        placeAddress: '1-1 Osakajo, Chuo Ward, Osaka, Japan',
      },
      {
        day: 2,
        orderInDay: 1,
        placeName: '유니버설 스튜디오 재팬',
        placeAddress: '2 Chome-1-33 Sakurajima, Konohana Ward, Osaka, Japan',
      },
    ],
  },
  {
    travelCourseId: 3,
    travelDays: 2,
    creator: '맛집 탐방러',
    title: '후쿠오카 미식 여행',
    viewCount: 720000,
    uploadDate: '2024-03-05',
    videoUrl: 'https://www.youtube.com/watch?v=fukuoka999',
    travelCourses: [
      {
        day: 1,
        orderInDay: 1,
        placeName: '텐진 지하상가',
        placeAddress: '1 Chome-11-1 Tenjin, Chuo Ward, Fukuoka, Japan',
      },
      {
        day: 1,
        orderInDay: 2,
        placeName: '나카스 야타이 거리',
        placeAddress: 'Nakasu, Hakata Ward, Fukuoka, Japan',
      },
      {
        day: 2,
        orderInDay: 1,
        placeName: '후쿠오카 타워',
        placeAddress: '2-3-26 Momochihama, Sawara Ward, Fukuoka, Japan',
      },
    ],
  },
];
