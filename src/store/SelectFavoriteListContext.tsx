import React, { createContext, useEffect, useState } from 'react';
import { OneDayCourseType } from '../types';

interface SelectFavoriteListContextType {
  isFavoriteListSelectOpen: boolean;
  setIsFavoriteListSelectOpen: React.Dispatch<React.SetStateAction<boolean>>;
  selectedPlace: OneDayCourseType | null;
  setSelectedPlace: React.Dispatch<React.SetStateAction<OneDayCourseType | null>>;
  favoritePlaces: {
    placeId: number;
    placeName: string;
  }[];
}

export const SelectFavoriteListContext = createContext<SelectFavoriteListContextType | null>(null);

export const SelectFavoriteListProvider = ({ children }: { children: React.ReactNode }) => {
  const [isFavoriteListSelectOpen, setIsFavoriteListSelectOpen] = useState(false);
  const [selectedPlace, setSelectedPlace] = useState<OneDayCourseType | null>(null);
  const [favoritePlaces, setFavoritePlaces] = useState<
    {
      placeId: number;
      placeName: string;
    }[]
  >([]);

  const favoritePlaceIdStore = localStorage.getItem('favoritePlaceIds');

  const places: {
    placeId: number;
    placeName: string;
  }[] = favoritePlaceIdStore ? JSON.parse(favoritePlaceIdStore) : [];

  useEffect(() => {
    setFavoritePlaces(places);
  }, []);

  return (
    <SelectFavoriteListContext.Provider
      value={{
        isFavoriteListSelectOpen,
        setIsFavoriteListSelectOpen,
        selectedPlace,
        setSelectedPlace,
        favoritePlaces,
      }}
    >
      {children}
    </SelectFavoriteListContext.Provider>
  );
};
