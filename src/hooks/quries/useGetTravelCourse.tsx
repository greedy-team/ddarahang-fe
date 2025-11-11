import { useSuspenseQuery } from '@tanstack/react-query';
import axios from 'axios';
import { TravelCourse } from '../../types';

const fetchTravelCourse = async (videoId: number): Promise<TravelCourse> => {
  const { data } = await axios.get(`/api/v1/travelcourses/${videoId}`);
  return data;
};

const useGetTravelCourse = (videoId: number) => {
  return useSuspenseQuery<TravelCourse>({
    queryKey: ['travelCourse', videoId],
    queryFn: () => fetchTravelCourse(videoId),
    staleTime: 1000 * 60 * 2,
    gcTime: 1000 * 60 * 10,
  });
};

export default useGetTravelCourse;
