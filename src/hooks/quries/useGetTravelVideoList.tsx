import { useEffect, useState } from 'react';
import { TravelList } from '../../types';
import axios from 'axios';

const useGetTravelVideoList = () => {
  const [error, setError] = useState<unknown>(null);
  const [loading, setLoading] = useState(false);
  const [videoList, setVideoList] = useState<TravelList[]>([]);

  useEffect(() => {
    const getTravelVideoList = async () => {
      const requestBody = {
        countryName: '대한민국',
        regionName: '부산',
      };
      setLoading(true);
      setVideoList([]);

      try {
        const response = await axios.get('/api/v1/travelcourses', { params: requestBody });

        if (response) {
          setVideoList(response.data);
        }
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    getTravelVideoList();
  }, []);

  return { videoList, loading, error };
};

export default useGetTravelVideoList;
