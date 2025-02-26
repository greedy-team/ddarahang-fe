import { useState, useEffect } from 'react';
import { CountryType, TravelList } from '../../types';
import axios from 'axios';

interface useTravelVideoListProps {
  countryName: CountryType;
  regionName: string;
}

const useTravelVideoList = ({ countryName, regionName }: useTravelVideoListProps) => {
  const [error, setError] = useState<unknown>(null);
  const [loading, setLoading] = useState(false);
  const [videoList, setVideoList] = useState<TravelList[]>([]);

  const getTravelVideoList = async ({ countryName, regionName }: useTravelVideoListProps) => {
    const requestBody = {
      countryName,
      regionName,
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

  useEffect(() => {
    getTravelVideoList({ countryName, regionName });
  }, [countryName, regionName]);

  return { videoList, loading, error, getTravelVideoList };
};

export default useTravelVideoList;
