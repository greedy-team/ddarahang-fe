import { useQuery } from '@tanstack/react-query';
import { useAddFavoriteContext } from '../context/useAddFavoriteContext';

import axios from 'axios';
import { FavoritePlaceType } from '../../types';

const FAVORITE_STORAGE_KEY = 'favoritePlaceIds';

export async function fetchFavoritePlaces(): Promise<FavoritePlaceType[]> {
  const favoritePlaceIdStore = localStorage.getItem(FAVORITE_STORAGE_KEY);

  const placeIds: number[] = favoritePlaceIdStore
    ? JSON.parse(favoritePlaceIdStore).map((place: { placeId: number; placeName: string }) => place.placeId)
    : [];

  if (placeIds.length === 0) {
    return [];
  }

  const response = await axios.post(`/api/v1/favorite`, { placeIds });
  return response.data;
}

function useFavoritePlaces() {
  const { favoritePlaces } = useAddFavoriteContext();

  const {
    data: places = [],
    isLoading: loading,
    isError,
    error,
    refetch,
  } = useQuery({
    queryKey: ['favoritePlaces', favoritePlaces],
    queryFn: fetchFavoritePlaces,
    staleTime: 1000 * 60 * 5,
    refetchOnWindowFocus: false,
  });

  return {
    favoritePlaces: places,
    loading,
    error: isError ? error : null,
    refetch,
  };
}

export default useFavoritePlaces;
