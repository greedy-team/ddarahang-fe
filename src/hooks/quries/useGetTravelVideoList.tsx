import { useSuspenseQuery } from '@tanstack/react-query';
import axios from 'axios';
import { CountryType, SortByType, TravelVideoListResponse } from '../../types';
import { DEFAULT_REGION_OPTION } from '../../constants/options';

interface UseTravelVideoListProps {
  sortField: SortByType;
  countryName: CountryType;
  regionName: string;
  pageNumber: number;
}

export async function fetchTravelVideoList({
  sortField,
  countryName,
  regionName,
  pageNumber,
}: UseTravelVideoListProps): Promise<TravelVideoListResponse> {
  const params = {
    sortField,
    countryName,
    regionName: regionName === '' || regionName === DEFAULT_REGION_OPTION ? '' : regionName,
    pageNumber,
  };

  const response = await axios.get('/api/v1/travelcourses', { params });
  return response.data;
}

const useTravelVideoList = (params: UseTravelVideoListProps) => {
  return useSuspenseQuery({
    queryKey: ['travelVideos', params],
    queryFn: () => fetchTravelVideoList(params),
    staleTime: 1000 * 60 * 3,
    refetchOnWindowFocus: false,
  });
};

export default useTravelVideoList;
