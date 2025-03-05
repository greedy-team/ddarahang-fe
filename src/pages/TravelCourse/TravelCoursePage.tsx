import { Status, Wrapper } from '@googlemaps/react-wrapper';
import TravelMap from '../../components/common/TravelMap/TravelMap';
import { MapContainer, TravelCourseContainer, TravelCoursePageLayout } from './TravelCoursePage.style';
import GlobalHeader from '../../components/common/GlobalHeader/GlobalHeader';

import { colors } from '../../styles/Theme';
import TravelCourse from '../../components/detail/TravelCourse/TravelCourse';
import VideoSection from '../../components/detail/Video/VideoSection';
import useGetTravelCourse from '../../hooks/quries/useGetTravelCourse';
import { OneDayCourseType } from '../../types';
import { useEffect, useMemo, useState } from 'react';
import { useSelectedPanel } from '../../hooks/context/useSelectedPanelContext';
import Loading from '../../components/common/Loading/Loading';
import { StyledErrorMessage } from '../Main/MainPage.style';
import { ERROR_MESSAGE, LOAD_ERROR_MESSAGE, MAP_LOAD_ERROR_MESSAGE, NO_DATA_ERROR_MESSAGE } from '../../constants';
import { useParams } from 'react-router-dom';

const renderMap = (status: Status, courses: OneDayCourseType[]) => {
  switch (status) {
    case Status.LOADING:
      return renderErrorMessage(MAP_LOAD_ERROR_MESSAGE);
    case Status.FAILURE:
      return renderErrorMessage(LOAD_ERROR_MESSAGE);
    case Status.SUCCESS:
      return <TravelMap oneDayCourses={courses} />;
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
  const param = useParams();
  const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY_DEV;
  const [selectedTab, setSelectedTab] = useState(1);
  const [showNoDataMessage, setShowNoDataMessage] = useState(false);

  const { setSelectedPanel } = useSelectedPanel();
  const { travelCourse, loading, error } = useGetTravelCourse(Number(param.id));

  const onClickTab = (day: number) => {
    setSelectedTab(day);
  };

  const onClickPanel = (placeName: string) => {
    setSelectedPanel(placeName);
  };

  useEffect(() => {
    if (!loading) {
      setShowNoDataMessage(!travelCourse);
    }
  }, [loading, travelCourse]);

  const oneDayCourses = useMemo(() => {
    if (!travelCourse) return [];

    setSelectedPanel('');
    return travelCourse.details
      .filter((course) => course.day === selectedTab)
      .map((course) => ({
        placeName: course.placeName,
        day: course.day,
        orderInday: course.orderInDay,
        position: { lat: course.lat, lng: course.lng },
      }));
  }, [selectedTab, travelCourse]);

  if (loading) return <Loading loading={loading} />;
  if (showNoDataMessage) return renderErrorMessage(NO_DATA_ERROR_MESSAGE);
  if (error) return renderErrorMessage(LOAD_ERROR_MESSAGE);

  return (
    <>
      <GlobalHeader
        color={colors.WHITE}
        isIconVisible={false}
      />
      <TravelCoursePageLayout>
        {travelCourse && (
          <TravelCourseContainer>
            <VideoSection
              videoUrl={travelCourse.videoUrl}
              travelCourse={travelCourse}
            />

            <TravelCourse
              selectedTab={selectedTab}
              onClickTab={onClickTab}
              onClickPanel={onClickPanel}
              oneDayCourses={oneDayCourses}
              totalTravelDays={travelCourse.travelDays}
            />
          </TravelCourseContainer>
        )}
        <MapContainer>
          <Wrapper
            apiKey={apiKey}
            key={selectedTab}
            render={(status) => renderMap(status, oneDayCourses)}
            libraries={['marker']}
          />
        </MapContainer>
      </TravelCoursePageLayout>
    </>
  );
};

export default TravelCoursePage;
