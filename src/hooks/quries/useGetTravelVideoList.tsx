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
    let requestBody = {
      filter,
      countryName,
      regionName,
    };

    if (regionName === '' || regionName === '여행 지역 검색') {
      requestBody.regionName = '';
    }

    setLoading(true);
    setVideoList([]);

    try {
      const response = await axios.get('https://api.ddarahang.site/api/v1/travelcourses', { params: requestBody });

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
