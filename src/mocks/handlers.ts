import { http, HttpResponse } from 'msw';
import {
  sortTravelListByUploadDate,
  sortTravelListByViewCount,
  travelCourseDetailResolver,
  travleListResolver,
} from './reslovers';

export const handlers = [
  http.get('/api/v1/hello', () => {
    // ...and respond to them using this JSON response.
    return HttpResponse.json({
      id: 'c7b3d8e0-5e0b-4b0f-8b3a-3b9f4b3d3b3d',
      firstName: 'John',
      lastName: 'Maverick',
    });
  }),

  http.get('/api/v1/travelcourses', travleListResolver),

  http.get('/api/v1/travelcourses/:travelCourseId', travelCourseDetailResolver),

  http.get('/api/v1/travelcourses/uploaddate', sortTravelListByUploadDate),

  http.get('/api/v1/travelcourses/viewcount', sortTravelListByViewCount),
];
