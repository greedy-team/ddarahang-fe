import { TravelCoursePageLayout } from './TravelCoursePage.style';
import TravelCourse from '../../components/detail/TravelCourse/TravelCourse';
import useGetTravelCourse from '../../hooks/quries/useGetTravelCourse';
import Loading from '../../components/common/Loading/Loading';
import { ERROR_MESSAGE, LOAD_ERROR_MESSAGE, NO_DATA_ERROR_MESSAGE } from '../../constants/messages';
import { useParams } from 'react-router-dom';
import ErrorLayout from '../../components/common/Error/ErrorLayout';
import PageLayout from '../../components/layout/PageLayout';

const renderErrorMessage = (message: string) => (
  <TravelCoursePageLayout>
    <ErrorLayout
      errorTitle={message}
      errorDescription={ERROR_MESSAGE}
    />
  </TravelCoursePageLayout>
);

const TravelCoursePage = () => {
  const param = useParams();

  const { data: travelCourse, error, isLoading: loading } = useGetTravelCourse(Number(param.id));

  if (loading) return <Loading />;
  if (error) return renderErrorMessage(LOAD_ERROR_MESSAGE);
  if (travelCourse === null || travelCourse.details.length === 0) return renderErrorMessage(NO_DATA_ERROR_MESSAGE);

  return (
    <TravelCoursePageLayout>
      <TravelCourse
        travelCourse={travelCourse}
        totalTravelDays={travelCourse.travelDays}
      />
    </TravelCoursePageLayout>
  );
};

export default TravelCoursePage;
