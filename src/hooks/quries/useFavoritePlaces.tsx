import { useEffect, useState } from 'react';
import axios from 'axios';
import { FavoritePlaceType, TagType } from '../../types';

export interface FavoritePlaceResponse {
  orderInPlace: number;
  placeName: string;
  placeAddress: string;
  latitude: number;
  longitude: number;
  tag: string;
}

const FAVORITE_STORAGE_KEY = 'favoritePlaceIds';

const useFavoritePlaces = () => {
  const [favoritePlaces, setFavoritePlaces] = useState<FavoritePlaceType[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<unknown>(null);

  const fetchFavoritePlaces = async () => {
    const favoritePlaceIdStore = localStorage.getItem(FAVORITE_STORAGE_KEY);
    const placeIds: number[] = favoritePlaceIdStore ? JSON.parse(favoritePlaceIdStore) : [];

    if (placeIds.length === 0) {
      setFavoritePlaces([]);
      return;
    }

    setLoading(true);

    try {
      const response = await axios.post('https://ddarahang.site/api/v1/favorite', {
        placeIds,
      });

      const formatted: FavoritePlaceType[] = response.data.map((item: any, index: number) => ({
        placeId: index + 1,
        placeName: item.placeName,
        address: item.placeAddress,
        tag: item.tag as TagType,
        orderInday: item.orderInPlace,
        position: {
          lat: item.latitude,
          lng: item.longitude,
        },
      }));

      setFavoritePlaces(formatted);
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
