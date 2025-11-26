import { PageLayout, TravelCoursePageLayout } from './TravelCoursePage.style';
import GlobalHeader from '../../components/common/GlobalHeader/GlobalHeader';
import TravelCourse from '../../components/detail/TravelCourse/TravelCourse';
import useGetTravelCourse from '../../hooks/quries/useGetTravelCourse';
import Loading from '../../components/common/Loading/Loading';
import { ERROR_MESSAGE, LOAD_ERROR_MESSAGE, NO_DATA_ERROR_MESSAGE } from '../../constants/messages';
import { useParams } from 'react-router-dom';
import ErrorLayout from '../../components/common/Error/ErrorLayout';
import useMobile from '../../hooks/screen/useMobile';

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

  const { isMobile } = useMobile();

  if (loading) return <Loading />;
  if (error) return renderErrorMessage(LOAD_ERROR_MESSAGE);
  if (travelCourse === null || travelCourse.details.length === 0) return renderErrorMessage(NO_DATA_ERROR_MESSAGE);

  return (
    <PageLayout>
      <GlobalHeader
        isMobile={isMobile}
        isIconVisible={false}
        isMainHeader={false}
      />

      <TravelCoursePageLayout>
        <TravelCourse
          travelCourse={travelCourse}
          totalTravelDays={travelCourse.travelDays}
        />
      </TravelCoursePageLayout>
    </PageLayout>
  );
};

export default TravelCoursePage;
