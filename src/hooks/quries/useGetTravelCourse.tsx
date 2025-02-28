import { useEffect, useState } from 'react';
import { TravelCourseDetail } from '../../types';
import axios from 'axios';

const useGetTravelCourse = () => {
  const [error, setError] = useState<unknown>(null);
  const [loading, setLoading] = useState(false);
  const [travelCourse, setTravelCourse] = useState<TravelCourseDetail | null>(null);

  useEffect(() => {
    const getTravelCourse = async () => {
      setLoading(true);

      try {
        const response = await axios.get('/api/v1/travelcourses/1');

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
