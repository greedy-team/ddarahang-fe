import GlobalStyle from './Globalstyle';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/v1/travelcourses');
        const data = await response.json();
        console.log(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <GlobalStyle />
      <h1>부산여행</h1>
      <div className='card'>
        <button>안녕하세요</button>
        <p>그래</p>
      </div>
      <p className='read-the-docs'>메인페이지</p>
    </>
  );
}

export default App;
