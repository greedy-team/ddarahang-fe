import axios from 'axios';
import GlobalStyle from './Globalstyle';
import { useEffect, useState } from 'react';

function App() {
  const fetchData = async () => {
    try {
      const requestBody = {
        countryName: '대한민국',
        regionName: '부산',
      };

      const response = await axios.get('/api/v1/hello', { params: requestBody });

      if (response) {
        console.log('API Response:', response.data);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchData();
    // setTimeout(() => {
    //   fetchData();
    // }, 3000);
  }, []);

  return (
    <>
      <GlobalStyle />
      <h1>부산여행</h1>
      <div className='card'>
        <button onClick={fetchData}>안녕하세요</button>
        <p>그래</p>
      </div>
      <p className='read-the-docs'>메인페이지</p>
    </>
  );
}

export default App;
