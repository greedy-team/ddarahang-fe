import axios from 'axios';
import GlobalStyle from './Globalstyle';
import { useEffect } from 'react';

function App() {
  const fetchData = async () => {
    try {
      const requestBody = {
        countryName: '대한민국',
        regionName: '부산',
      };
      const response = axios.get('/api/v1/travelcourses', { params: requestBody });
      return response;
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const getTravelCourses = async () => {
    const response = await fetchData();
    console.log(response);
  };

  useEffect(() => {
    getTravelCourses();
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
