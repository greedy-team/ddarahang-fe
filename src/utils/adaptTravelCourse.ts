import { TravelCourse } from '../types';

export const adaptTravelCourse = (travelCourse: TravelCourse[], day: number) => {
  if (!Array.isArray(travelCourse)) return [];

  return travelCourse
    .flatMap((travelCourse) => travelCourse.details ?? [])
    .filter((course) => course?.day === day)
    .map((course) => ({
      placeName: course.placeName,
      placeId: course.placeId,
      day: course.day,
      orderInday: course.orderInDay,
      tag: course.tag,
      position: { lat: course.lat, lng: course.lng },
      address: course.placeAddress,
    }));
};
