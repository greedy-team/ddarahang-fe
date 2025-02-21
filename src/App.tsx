import GlobalStyle from './Globalstyle';
import { useEffect } from 'react';
import Header from './components/main/Header/Header';
import { getTravelVideoList } from './apis/getTravelVideoList';

function App() {
  useEffect(() => {
    getTravelVideoList();
  }, []);

  return (
    <>
      <GlobalStyle />
      <Header />
    </>
  );
}

export default App;
