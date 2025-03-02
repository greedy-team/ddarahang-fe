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

const render = (status: Status, courses: OneDayCourseType[]) => {
  switch (status) {
    case Status.LOADING:
      return <>로딩중...</>;
    case Status.FAILURE:
      return <>에러 발생...</>;
    case Status.SUCCESS:
      return <TravelMap oneDayCourse={courses} />;
  }
};

const TravelCoursePage = () => {
  const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY_DEV;
  const [selectedTab, setSelectedTab] = useState(1);
  const { setSelectedPanel } = useSelectedPanel();
  const { travelCourse, loading, error } = useGetTravelCourse();

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

  if (!travelCourse) return <Loading loading={loading} />;
  if (error) return <p>데이터를 불러오는 중 오류가 발생했습니다.</p>;

  return (
    <>
      <Loading loading={loading} />
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
            render={(status) => render(status, courses)}
            libraries={['marker']}
          />
        </MapContainer>
      </TravelCoursePageLayout>
    </>
  );
};

export default TravelCoursePage;
