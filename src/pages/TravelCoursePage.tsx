import { Status, Wrapper } from '@googlemaps/react-wrapper';
import TravelMap from '../components/common/TravelMap/TravelMap';

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
    <>
      <Wrapper
        apiKey={apiKey}
        render={render}
        libraries={['marker']}
      />
    </>
  );
};

export default TravelCoursePage;
