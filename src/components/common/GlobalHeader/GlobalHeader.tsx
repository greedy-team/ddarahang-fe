import { useNavigate } from 'react-router-dom';
import RectangleButton from '../Button/RectangleButton/RectangleButton';
import Logo from '../Logo/Logo';
import { GlobalHeaderWrapper } from './GlobalHeader.style';

interface GlobalHeaderProps {
  isIconVisible: boolean;
  isMainHeader: boolean;
  isMobile: boolean;
  setCurrentPageNumber?: (currentPageNumber: number) => void;
}

const GlobalHeader = ({ isIconVisible, isMainHeader, isMobile, setCurrentPageNumber }: GlobalHeaderProps) => {
  const navigate = useNavigate();

  return (
    <GlobalHeaderWrapper
      $isMobile={isMobile}
      $isIconVisible={isIconVisible}
    >
      <Logo
        isMainHeader={isMainHeader}
        setCurrentPageNumber={setCurrentPageNumber}
      />

      <RectangleButton
        variant='blue'
        text='찜한 장소'
        onClick={() => navigate('/favorite')}
        size='small'
      />
    </GlobalHeaderWrapper>
  );
};

export default GlobalHeader;
