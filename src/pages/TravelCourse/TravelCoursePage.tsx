import { Status, Wrapper } from '@googlemaps/react-wrapper';
import TravelMap from '../../components/common/TravelMap/TravelMap';
import { MapContainer, TravelCourseContainer, TravelCoursePageLayout } from './TravelCoursePage.style';
import GlobalHeader from '../../components/common/GlobalHeader/GlobalHeader';

import { colors } from '../../styles/Theme';
import TravelCourse from '../../components/detail/TravelCourse/TravelCourse';
import VideoSection from '../../components/detail/Video/VideoSection';
import useGetTravelCourse from '../../hooks/quries/useGetTravelCourse';
import { useSelectOptionContext } from '../../hooks/select/useSelectOptionContext';

const render = (status: Status) => {
  switch (status) {
    case Status.LOADING:
      return <>로딩중...</>;
    case Status.FAILURE:
      return <>에러 발생...</>;
    case Status.SUCCESS:
      return <TravelMap />;
  }
};

const TravelCoursePage = () => {
  const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY_DEV;
  const { travelCourse, loading, error } = useGetTravelCourse();
  const { selectedOption } = useSelectOptionContext();

  if (loading) return <p>로딩 중...</p>;
  if (error) return <p>데이터를 불러오는 중 오류가 발생했습니다.</p>;

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
            country={selectedOption.countryName}
            region={selectedOption.selectedOptionLabel}
            travelCourseDetail={travelCourse}
          />
          <TravelCourse />
        </TravelCourseContainer>
        <MapContainer>
          <Wrapper
            apiKey={apiKey}
            render={render}
            libraries={['marker']}
          />
        </MapContainer>
      </TravelCoursePageLayout>
    </>
  );
};

export default TravelCoursePage;
