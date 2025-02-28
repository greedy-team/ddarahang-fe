import { http } from 'msw';
import {
  sortTravelListByUploadDate,
  sortTravelListByViewCount,
  travelCourseDetailResolver,
  travelListResolver,
} from './reslovers';

export const handlers = [
  http.get('/api/v1/travelcourses', travelListResolver),

  http.get('/api/v1/travelcourses/:id', travelCourseDetailResolver),

  http.get('/api/v1/travelvideoList/uploaddate', sortTravelListByUploadDate),

  http.get('/api/v1/travelvideoList/viewcount', sortTravelListByViewCount),
];
