import { createBrowserRouter } from 'react-router-dom';
import TravelCoursePage from '../pages/TravelCourse/TravelCoursePage';
import MainPage from '../pages/Main/MainPage';
import MaintenancePage from '../pages/Maintenance/MaintenancePage';

export const router = createBrowserRouter([
  {
    path: '/travelcourse',
    element: <TravelCoursePage />,
  },
  {
    path: '/',
    element: <MainPage />,
  },
  {
    path: '/maintenance',
    element: <MaintenancePage />,
  },
]);
