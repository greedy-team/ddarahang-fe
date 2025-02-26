import { useContext } from 'react';
import { SelectedOptionContext } from '../../store/SelectOptionContext';

export const useSelectOptionContext = () => {
  const context = useContext(SelectedOptionContext);
  if (!context) {
    throw new Error('SelectContext 에러 발생');
  }
  return context;
};
