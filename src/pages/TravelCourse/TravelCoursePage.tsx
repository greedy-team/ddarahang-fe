import { Status, Wrapper } from '@googlemaps/react-wrapper';
import TravelMap from '../../components/common/TravelMap/TravelMap';
import { TravelCourseContainer } from './TravelCoursePage.style';
import GlobalHeader from '../../components/common/GlobalHeader/GlobalHeader';

import { colors } from '../../styles/Theme';

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
    <TravelCourseContainer>
      <GlobalHeader
        color={colors.WHITE}
        isIconVisible={false}
      />
      <Wrapper
        apiKey={apiKey}
        render={render}
        libraries={['marker']}
      />
    </TravelCourseContainer>
  );
};

export default TravelCoursePage;
