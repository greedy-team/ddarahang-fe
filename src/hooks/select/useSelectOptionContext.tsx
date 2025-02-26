import { useContext } from 'react';
import { SelectedOptionContext } from '../../store/SelectOptionContext';

export const useSelectOptionContext = () => {
  const context = useContext(SelectedOptionContext);
  if (!context) {
    throw new Error('useSelectContext는 SelectProvider 내에서 사용해야 합니다.');
  }
  return context;
};
