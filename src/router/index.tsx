import { createBrowserRouter } from 'react-router-dom';
import TravelCoursePage from '../pages/TravelCoursePage';
import MainPage from '../pages/Main/MainPage';

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
