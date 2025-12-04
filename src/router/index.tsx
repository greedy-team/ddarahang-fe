import { createBrowserRouter } from 'react-router-dom';
import MainPage from '../pages/Main/MainPage';
import TravelCoursePage from '../pages/TravelCourse/TravelCoursePage';
import FavoritePage from '../pages/Favorite/FavoritePage';
import MaintenancePage from '../pages/Maintenance/MaintenancePage';
import NotFoundPage from '../pages/NotFound/NotFoundPage';
import PageLayout from '../components/layout/PageLayout';

export const router = createBrowserRouter([
  {
    element: <PageLayout />,
    children: [
      {
        path: '/',
        element: <MainPage />,
      },
      {
        path: '/travelcourse/:id',
        element: <TravelCoursePage />,
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
        path: '*',
        element: <NotFoundPage />,
      },
    ],
  },
]);
