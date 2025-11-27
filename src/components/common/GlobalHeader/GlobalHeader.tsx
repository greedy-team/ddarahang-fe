import { useNavigate } from 'react-router-dom';
import Logo from '../Logo/Logo';
import { GlobalHeaderWrapper, Tab } from './GlobalHeader.style';

interface GlobalHeaderProps {
  isMainHeader?: boolean;
  isMobile: boolean;
  setCurrentPageNumber?: (currentPageNumber: number) => void;
}

const GlobalHeader = ({ isMainHeader, isMobile, setCurrentPageNumber }: GlobalHeaderProps) => {
  const navigate = useNavigate();

  return (
    <GlobalHeaderWrapper $isMobile={isMobile}>
      <Logo
        isMainHeader={isMainHeader}
        setCurrentPageNumber={setCurrentPageNumber}
      />

      <Tab onClick={() => navigate('/favorite')}>찜한장소</Tab>
    </GlobalHeaderWrapper>
  );
};

export default GlobalHeader;
