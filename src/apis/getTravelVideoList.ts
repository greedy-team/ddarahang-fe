import axios from 'axios';

export const getTravelVideoList = async () => {
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
