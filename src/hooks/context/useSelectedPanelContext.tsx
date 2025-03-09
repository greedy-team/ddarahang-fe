import { useContext } from 'react';
import { SelectedPanelContext } from '../../store/SelectedPanelContext';

export const useSelectedPanel = () => {
  const context = useContext(SelectedPanelContext);
  if (!context) {
    throw new Error('PanelContext 에러 발생');
  }
  return context;
};
