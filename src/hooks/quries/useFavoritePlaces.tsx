import { useQuery } from '@tanstack/react-query';
import { fetchFavoritePlaces } from '../../api/favorite';
import { useAddFavoriteContext } from '../context/useAddFavoriteContext';

export default function useFavoritePlaces() {
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
