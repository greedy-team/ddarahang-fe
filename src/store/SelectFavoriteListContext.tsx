import React, { createContext, useState } from 'react';

interface SelectFavoriteListContextType {
  isFavoriteListSelectOpen: boolean;
  setIsFavoriteListSelectOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const SelectFavoriteListContext = createContext<SelectFavoriteListContextType | null>(null);

export const SelectFavoriteListProvider = ({ children }: { children: React.ReactNode }) => {
  const [isFavoriteListSelectOpen, setIsFavoriteListSelectOpen] = useState(false);

  return (
    <SelectFavoriteListContext.Provider value={{ isFavoriteListSelectOpen, setIsFavoriteListSelectOpen }}>
      {children}
    </SelectFavoriteListContext.Provider>
  );
};
