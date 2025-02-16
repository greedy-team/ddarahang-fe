import { http, HttpResponse } from 'msw';
import { travleListResolver } from './reslovers';

export const handlers = [
  http.get('/api/v1/travelcourses', travleListResolver),

  http.get('/api/v1/travelcourses/:travelCourseId', () => {
    return HttpResponse.json();
  }),

  http.get('/api/v1/travelcourses/uploaddate', () => {
    return HttpResponse.json();
  }),

  http.get('/api/v1/travelcourses/viewcount', () => {
    return HttpResponse.json();
  }),
];
