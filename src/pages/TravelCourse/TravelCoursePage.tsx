import { Status, Wrapper } from '@googlemaps/react-wrapper';
import TravelMap from '../../components/common/TravelMap/TravelMap';
import { MapContainer, TravelCourseContainer, TravelCoursePageLayout } from './TravelCoursePage.style';
import GlobalHeader from '../../components/common/GlobalHeader/GlobalHeader';

import { colors } from '../../styles/Theme';
import TravelCourse from '../../components/detail/TravelCourse/TravelCourse';
import VideoSection from '../../components/detail/Video/VideoSection';
import useGetTravelCourse from '../../hooks/quries/useGetTravelCourse';
import { OneDayCourseType } from '../../types';
import { useMemo, useState } from 'react';
import { useSelectedPanel } from '../../hooks/select/useSelectedPanel';
import Loading from '../../components/common/Loading/Loading';
import { StyledErrorMessage } from '../Main/MainPage.style';
import { ERROR_MESSAGE, LOAD_ERROR_MESSAGE, MAP_LOAD_ERROR_MESSAGE, NO_DATA_ERROR_MESSAGE } from '../../constants';

const renderMap = (status: Status, courses: OneDayCourseType[]) => {
  switch (status) {
    case Status.LOADING:
      return renderErrorMessage(MAP_LOAD_ERROR_MESSAGE);
    case Status.FAILURE:
      return renderErrorMessage(LOAD_ERROR_MESSAGE);
    case Status.SUCCESS:
      return <TravelMap oneDayCourse={courses} />;
  }
};

const renderErrorMessage = (message: string) => (
  <>
    <GlobalHeader
      color={colors.WHITE}
      isIconVisible={false}
    />
    <TravelCoursePageLayout>
      <StyledErrorMessage>
        {message}
        <span>{ERROR_MESSAGE}</span>
      </StyledErrorMessage>
    </TravelCoursePageLayout>
  </>
);

const TravelCoursePage = () => {
  const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY_DEV;
  const [selectedTab, setSelectedTab] = useState(1);
  const { setSelectedPanel } = useSelectedPanel();
  const { travelCourse, loading, error } = useGetTravelCourse();

  if (!travelCourse) return renderErrorMessage(NO_DATA_ERROR_MESSAGE);
  if (loading) return <Loading loading={loading} />;
  if (error) return renderErrorMessage(LOAD_ERROR_MESSAGE);

  const onClickTab = (day: number) => {
    setSelectedTab(day);
  };

  const onClickPanel = (placeName: string) => {
    setSelectedPanel(placeName);
  };

  const courses = useMemo(() => {
    if (!travelCourse) return [];

    setSelectedPanel('');
    return travelCourse.travelCourses
      .filter((course) => course.day === selectedTab)
      .map((course) => ({
        place: course.placeName,
        day: course.day,
        orderInday: course.orderInDay,
        position: { lat: course.lat, lng: course.lng },
      }));
  }, [selectedTab, travelCourse]);

  return (
    <>
      <GlobalHeader
        color={colors.WHITE}
        isIconVisible={false}
      />
      <TravelCoursePageLayout>
        <TravelCourseContainer>
          <VideoSection
            videoId='yT7y8xyNHHs'
            travelCourseDetail={travelCourse}
          />
          <TravelCourse
            selectedTab={selectedTab}
            onClickTab={onClickTab}
            onClickPanel={onClickPanel}
            oneDayCourse={courses}
            travelDays={travelCourse.travelDays}
          />
        </TravelCourseContainer>
        <MapContainer>
          <Wrapper
            apiKey={apiKey}
            key={selectedTab}
            render={(status) => renderMap(status, courses)}
            libraries={['marker']}
          />
        </MapContainer>
      </TravelCoursePageLayout>
    </>
  );
};

export default TravelCoursePage;
