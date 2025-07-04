import { useContext } from 'react';
import { AddFavoriteContext } from '../../store/AddFavoriteContext';

export const useAddFavoriteContext = () => {
  const context = useContext(AddFavoriteContext);
  if (!context) {
    throw new Error('PanelContext 에러 발생');
  }
  return context;
};
