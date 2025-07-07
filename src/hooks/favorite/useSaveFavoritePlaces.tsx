import { FavoritePlaceSummaryType } from '../../types';
import { useAddFavoriteContext } from '../context/useAddFavoriteContext';

const FAVORITE_STORAGE_KEY = 'favoritePlaceIds';

export const useSaveFavoritePlaces = () => {
  const { favoritePlaces, setFavoritePlaces } = useAddFavoriteContext();

  const saveToStorage = (places: FavoritePlaceSummaryType[]) => {
    localStorage.setItem(FAVORITE_STORAGE_KEY, JSON.stringify(places));
  };

  const addFavoritePlace = (placeItem: FavoritePlaceSummaryType) => {
    if (favoritePlaces.some((place) => place.placeId === placeItem.placeId)) {
      return;
    }
    const updated = [...favoritePlaces, placeItem];
    setFavoritePlaces(updated);
    saveToStorage(updated);
  };

  const removeFavoritePlace = (placeId: number) => {
    const updated = favoritePlaces.filter((place) => place.placeId !== placeId);
    setFavoritePlaces(updated);
    saveToStorage(updated);
  };

  return {
    saveToStorage,
    addFavoritePlace,
    removeFavoritePlace,
  };
};
