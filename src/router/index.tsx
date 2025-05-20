import { createBrowserRouter } from 'react-router-dom';
import TravelCoursePage from '../pages/TravelCourse/TravelCoursePage';
import MainPage from '../pages/Main/MainPage';
import MaintenancePage from '../pages/Maintenance/MaintenancePage';
import NotFoundPage from '../pages/NotFound/NotFoundPage';
import FavoritePage from '../pages/Favorite/FavoritePage';

export const router = createBrowserRouter([
  {
    path: '/travelcourse/:id',
    element: <TravelCoursePage />,
  },
  {
    path: '/',
    element: <MainPage />,
  },
  {
    path: '/favorite',
    element: <FavoritePage />,
  },
  {
    path: '/maintenance',
    element: <MaintenancePage />,
  },
  {
    path: '/*',
    element: <NotFoundPage />,
  },
]);
