import { useEffect, useState } from 'react';
import { TravelCourse } from '../../types';
import axios from 'axios';

const useGetTravelCourse = (videoId: number) => {
  const [error, setError] = useState<unknown>(null);
  const [loading, setLoading] = useState(false);
  const [travelCourse, setTravelCourse] = useState<TravelCourse | null>(null);

  useEffect(() => {
    const getTravelCourse = async () => {
      setLoading(true);

      try {
        const response = await axios.get(`https://api.ddarahang.site/api/v1/travelcourses/${videoId}`);

        if (response) {
          setTravelCourse(response.data);
        }
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    getTravelCourse();
  }, []);

  return { travelCourse, loading, error };
};

export default useGetTravelCourse;
