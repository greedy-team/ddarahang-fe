import { useState, useEffect } from 'react';
import { CountryType, SortByType, TravelList } from '../../types';
import axios from 'axios';

interface useTravelVideoListProps {
  filter: SortByType;
  countryName: CountryType;
  regionName: string;
}

const useTravelVideoList = ({ filter, countryName, regionName }: useTravelVideoListProps) => {
  const [error, setError] = useState<unknown>(null);
  const [loading, setLoading] = useState(false);
  const [videoList, setVideoList] = useState<TravelList[]>([]);

  const getTravelVideoList = async ({ filter, countryName, regionName }: useTravelVideoListProps) => {
    const requestBody = {
      filter,
      countryName,
      regionName,
    };

    setLoading(true);
    setVideoList([]);

    try {
      const response = await axios.get(
        'https://22840bf7-f697-4901-98a8-36683378e553.mock.pstmn.io/api/v1/travelcourses?filter&countryName=대한민국&regionName=부산',
        { params: requestBody },
      );

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
    getTravelVideoList({ filter, countryName, regionName });
  }, [countryName, regionName]);

  return { videoList, loading, error, getTravelVideoList };
};

export default useTravelVideoList;
