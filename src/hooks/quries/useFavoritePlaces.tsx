import { useEffect, useState } from 'react';
import axios from 'axios';
import { FavoritePlaceType } from '../../types';
import { useSelectFavoriteListContext } from '../context/useSelectFavotieListContext';

const FAVORITE_STORAGE_KEY = 'favoritePlaceIds';

const useFavoritePlaces = () => {
  const [places, setPlaces] = useState<FavoritePlaceType[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<unknown>(null);
  const { favoritePlaces } = useSelectFavoriteListContext();

  const fetchFavoritePlaces = async () => {
    const favoritePlaceIdStore = localStorage.getItem(FAVORITE_STORAGE_KEY);

    const placeIds: number[] = favoritePlaceIdStore
      ? JSON.parse(favoritePlaceIdStore).map((place: { placeId: number; placeName: string }) => place.placeId)
      : [];

    if (placeIds.length === 0) {
      setPlaces([]);
      return;
    }

    setLoading(true);

    try {
      const response = await axios.post(`/api/v1/favorite`, {
        placeIds,
      });

      setPlaces(response.data);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchFavoritePlaces();
  }, [favoritePlaces]);

  return { favoritePlaces: places, loading, error };
};

export default useFavoritePlaces;
