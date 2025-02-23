import GlobalStyle from './Globalstyle';
import { Status, Wrapper } from '@googlemaps/react-wrapper';
import TravelMap from './components/common/TravelMap/TravelMap';

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

function App() {
  const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY_DEV;

  return (
    <>
      <GlobalStyle />
      <Wrapper
        apiKey={apiKey}
        render={render}
      />
    </>
  );
}

export default App;
