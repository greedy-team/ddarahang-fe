import React, { createContext, useEffect, useState } from 'react';
import { SortByType } from '../types';

interface SortOptionContextType {
  sortOption: SortByType;
  setSortOption: React.Dispatch<React.SetStateAction<SortByType>>;
}

export const SortOptionContext = createContext<SortOptionContextType | null>(null);

export const SortOptionProvider = ({ children }: { children: React.ReactNode }) => {
  const savedSortOption = localStorage.getItem('sortOption');
  if (savedSortOption === 'default') {
    localStorage.setItem('sortOption', JSON.stringify('uploadDate'));
  }

  const parsedSortOption = savedSortOption ? JSON.parse(savedSortOption) : 'uploadDate';

  const [sortOption, setSortOption] = useState<SortByType>(parsedSortOption || 'uploadDate');

  useEffect(() => {
    localStorage.setItem('uploadDate', JSON.stringify(sortOption));
  }, [sortOption]);

  return <SortOptionContext.Provider value={{ sortOption, setSortOption }}>{children}</SortOptionContext.Provider>;
};
