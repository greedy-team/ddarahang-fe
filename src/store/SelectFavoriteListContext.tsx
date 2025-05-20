import React, { createContext, useState } from 'react';

interface SelectFavoriteListContextType {
  isFavoriteListSelectOpen: boolean;
  setIsFavoriteListSelectOpen: React.Dispatch<React.SetStateAction<boolean>>;
  selectedPlaceId: number | null;
  setSelectedPlaceId: React.Dispatch<React.SetStateAction<number | null>>;
}

export const SelectFavoriteListContext = createContext<SelectFavoriteListContextType | null>(null);

export const SelectFavoriteListProvider = ({ children }: { children: React.ReactNode }) => {
  const [isFavoriteListSelectOpen, setIsFavoriteListSelectOpen] = useState(false);
  const [selectedPlaceId, setSelectedPlaceId] = useState<number | null>(null);

  return (
    <SelectFavoriteListContext.Provider
      value={{ isFavoriteListSelectOpen, setIsFavoriteListSelectOpen, selectedPlaceId, setSelectedPlaceId }}
    >
      {children}
    </SelectFavoriteListContext.Provider>
  );
};
