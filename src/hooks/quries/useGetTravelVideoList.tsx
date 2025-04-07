import { useState, useEffect } from 'react';
import { CountryType, SortByType, TravelVideoListResponse } from '../../types';
import axios from 'axios';

interface useTravelVideoListProps {
  sortField: SortByType;
  countryName: CountryType;
  regionName: string;
  pageNumber: number;
}

const useTravelVideoList = ({ countryName, regionName, pageNumber }: useTravelVideoListProps) => {
  const [error, setError] = useState<unknown>(null);
  const [loading, setLoading] = useState(false);
  const [videoListResponse, setvideoListResponse] = useState<TravelVideoListResponse | null>(null);

  const getTravelVideoList = async ({ sortField, countryName, regionName, pageNumber }: useTravelVideoListProps) => {
    let requestBody = {
      sortField,
      countryName,
      regionName,
      pageNumber,
    };

    if (regionName === '' || regionName === '여행 지역 검색') {
      requestBody.regionName = '';
    }

    setLoading(true);

    try {
      const response = await axios.get('https://ddarahang.site/api/v1/travelcourses', { params: requestBody });

      if (response) {
        setvideoListResponse(response.data);
      }
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getTravelVideoList({ sortField: 'uploadDate', countryName, regionName, pageNumber: 0 });
  }, []);

  return { videoListResponse, loading, error, getTravelVideoList, pageNumber };
};

export default useTravelVideoList;
