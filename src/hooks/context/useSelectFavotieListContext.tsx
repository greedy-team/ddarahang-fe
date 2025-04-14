import { useContext } from 'react';
import { SelectFavoriteListContext } from '../../store/SelectFavoriteListContext';

export const useSelectFavoriteListContext = () => {
  const context = useContext(SelectFavoriteListContext);
  if (!context) {
    throw new Error('PanelContext 에러 발생');
  }
  return context;
};
