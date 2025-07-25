import React, { createContext, useEffect, useState } from 'react';
import { FavoritePlaceSummaryType, OneDayCourseType } from '../types';

interface AddFavoriteContextType {
  isFavoriteModalOpen: boolean;
  setIsFavoriteModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  selectedPlace: OneDayCourseType | null;
  setSelectedPlace: React.Dispatch<React.SetStateAction<OneDayCourseType | null>>;
  favoritePlaces: FavoritePlaceSummaryType[];
  setFavoritePlaces: React.Dispatch<React.SetStateAction<FavoritePlaceSummaryType[]>>;
}

export const AddFavoriteContext = createContext<AddFavoriteContextType | null>(null);

export const AddFavoriteProvider = ({ children }: { children: React.ReactNode }) => {
  const [isFavoriteModalOpen, setIsFavoriteModalOpen] = useState(false);
  const [selectedPlace, setSelectedPlace] = useState<OneDayCourseType | null>(null);
  const [favoritePlaces, setFavoritePlaces] = useState<FavoritePlaceSummaryType[]>([]);

  const favoritePlaceIdStore = localStorage.getItem('favoritePlaceIds');

  const places: FavoritePlaceSummaryType[] = favoritePlaceIdStore ? JSON.parse(favoritePlaceIdStore) : [];

  useEffect(() => {
    setFavoritePlaces(places);
  }, []);

  return (
    <AddFavoriteContext.Provider
      value={{
        isFavoriteModalOpen,
        setIsFavoriteModalOpen,
        selectedPlace,
        setSelectedPlace,
        favoritePlaces,
        setFavoritePlaces,
      }}
    >
      {children}
    </AddFavoriteContext.Provider>
  );
};
