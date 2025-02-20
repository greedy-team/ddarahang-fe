import axios from 'axios';
import GlobalStyle from './Globalstyle';
import { useEffect, useState } from 'react';
import Header from './components/main/Header/Header';

function App() {
  const fetchData = async () => {
    try {
      const requestBody = {
        countryName: '대한민국',
        regionName: '부산',
      };

      const response = await axios.get('/api/v1/travelcourses', { params: requestBody });

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
      <Header />
    </>
  );
}

export default App;
