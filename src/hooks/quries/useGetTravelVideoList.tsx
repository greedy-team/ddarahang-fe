import { useState, useEffect } from 'react';
import { CountryType, SortByType, TravelList } from '../../types';
import axios from 'axios';
import { useSortOptionContext } from '../context/useSortOptionContext';

interface useTravelVideoListProps {
  filter: SortByType;
  countryName: CountryType;
  regionName: string;
}

const useTravelVideoList = ({ countryName, regionName }: useTravelVideoListProps) => {
  const [error, setError] = useState<unknown>(null);
  const [loading, setLoading] = useState(false);
  const [videoList, setVideoList] = useState<TravelList[]>([]);
  const { setSortOption } = useSortOptionContext();

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
    setSortOption('default');
    getTravelVideoList({ filter: 'default', countryName, regionName });
  }, [countryName, regionName]);

  return { videoList, loading, error, getTravelVideoList };
};

export default useTravelVideoList;
