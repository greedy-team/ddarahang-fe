import { Status, Wrapper } from '@googlemaps/react-wrapper';
import TravelMap from '../../components/common/TravelMap/TravelMap';
import { PageContainer, TravelCourseContainer } from './TravelCoursePage.style';
import GlobalHeader from '../../components/common/GlobalHeader/GlobalHeader';

import { colors } from '../../styles/Theme';
import TravelCourse from '../../components/detail/TravelCourse/TravelCourse';
import Video from '../../components/detail/Video/VideoSection';

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

  return (
    <PageContainer>
      <GlobalHeader
        color={colors.WHITE}
        isIconVisible={false}
      />
      <TravelCourseContainer>
        <Video
          videoId='yT7y8xyNHHs'
          country='대한민국'
          region='부산'
          creator='림리니'
          title='[Vlog] 찐 부산 & 대구 맛집 다 있는 브이로그 | 출국 전 마지막 부산 여행 😭 | ana luisa 마직막 겨울 홀리데이 세일 🩵 | 다음 주'
          viewCount={18334}
          uploadDate='2024.05.12'
        />
        <TravelCourse />
      </TravelCourseContainer>
      {/* <Wrapper
        apiKey={apiKey}
        render={render}
        libraries={['marker']}
      /> */}
    </PageContainer>
  );
};

export default TravelCoursePage;
