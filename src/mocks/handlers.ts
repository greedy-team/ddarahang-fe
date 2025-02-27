import { http } from 'msw';
import {
  sortTravelListByUploadDate,
  sortTravelListByViewCount,
  travelCourseDetailResolver,
  travleListResolver,
} from './reslovers';

export const handlers = [
  http.get('/api/v1/travelcourses', travleListResolver),

  http.get('/api/v1/travelcourses/1', travelCourseDetailResolver),

  http.get('/api/v1/travelcourses/uploaddate', sortTravelListByUploadDate),

  http.get('/api/v1/travelcourses/viewcount', sortTravelListByViewCount),
];
