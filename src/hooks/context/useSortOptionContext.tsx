import { useContext } from 'react';
import { SortOptionContext } from '../../store/SortOptionContext';

export const useSortOptionContext = () => {
  const context = useContext(SortOptionContext);
  if (!context) {
    throw new Error('SortOptionContext 에러 발생');
  }
  return context;
};
