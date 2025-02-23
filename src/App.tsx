import GlobalStyle from './Globalstyle';
import { useEffect } from 'react';
import { getTravelVideoList } from './apis/getTravelVideoList';
import { Status, Wrapper } from '@googlemaps/react-wrapper';

const render = (status: Status) => {
  switch (status) {
    case Status.LOADING:
      return <>로딩중...</>;
    case Status.FAILURE:
      return <>에러 발생...</>;
    case Status.SUCCESS:
      return <>로드 성공 !! </>;
  }
};

function App() {
  const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;

  useEffect(() => {
    getTravelVideoList();
  }, []);

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
