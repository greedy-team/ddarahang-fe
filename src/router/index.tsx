import { createBrowserRouter } from 'react-router-dom';
import TravelCoursePage from '../pages/TravelCoursePage';
import MainPage from '../pages/MainPage';

export const router = createBrowserRouter([
  {
    path: '/travelcourse',
    element: <TravelCoursePage />,
  },
  {
    path: '/',
    element: <MainPage />,
  },
]);
