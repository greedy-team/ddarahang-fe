import { useNavigate } from 'react-router-dom';
import Logo from '../Logo/Logo';
import { GlobalHeaderWrapper, Tab } from './GlobalHeader.style';

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

      <Tab onClick={() => navigate('/favorite')}>찜한장소</Tab>
    </GlobalHeaderWrapper>
  );
};

export default GlobalHeader;
