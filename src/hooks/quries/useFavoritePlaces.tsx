import { useEffect, useState } from 'react';
import axios from 'axios';
import { FavoritePlaceType } from '../../types';

const FAVORITE_STORAGE_KEY = 'favoritePlaceIds';

const useFavoritePlaces = () => {
  const [favoritePlaces, setFavoritePlaces] = useState<FavoritePlaceType[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<unknown>(null);

  const fetchFavoritePlaces = async () => {
    const favoritePlaceIdStore = localStorage.getItem(FAVORITE_STORAGE_KEY);

    const placeIds: number[] = favoritePlaceIdStore
      ? JSON.parse(favoritePlaceIdStore).map((place: { placeId: number; placeName: string }) => place.placeId)
      : [];

    if (placeIds.length === 0) {
      setFavoritePlaces([]);
      return;
    }

    setLoading(true);

    try {
      const response = await axios.post('https://ddarahang.site/api/v1/favorite', {
        placeIds,
      });

      setFavoritePlaces(response.data);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchFavoritePlaces();
  }, []);

  return { favoritePlaces, loading, error };
};

export default useFavoritePlaces;
