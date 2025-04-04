import { useState } from 'react';
import { CountryType, SortByType, TravelVideoListResponse } from '../../types';
import axios from 'axios';

interface useTravelVideoListProps {
  sortField: SortByType;
  countryName: CountryType;
  regionName: string;
  pageNumber: number;
}

const useTravelVideoList = () => {
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
      const response = await axios.get('http://localhost:8080/api/v1/travelcourses', { params: requestBody });

      if (response) {
        setvideoListResponse(response.data);
      }
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  return { videoListResponse, loading, error, getTravelVideoList };
};

export default useTravelVideoList;
