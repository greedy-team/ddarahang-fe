import { useNavigate } from 'react-router-dom';
import Logo from '../Logo/Logo';
import { GlobalHeaderWrapper, Tab } from './GlobalHeader.style';
import useMobile from '../../../hooks/screen/useMobile';

interface GlobalHeaderProps {
  isMainHeader?: boolean;
  setCurrentPageNumber?: (currentPageNumber: number) => void;
}

const GlobalHeader = ({ isMainHeader, setCurrentPageNumber }: GlobalHeaderProps) => {
  const navigate = useNavigate();
  const { isMobile } = useMobile();

  return (
    !isMobile && (
      <GlobalHeaderWrapper>
        <Logo
          isMainHeader={isMainHeader}
          setCurrentPageNumber={setCurrentPageNumber}
        />

        <Tab onClick={() => navigate('/favorite')}>찜한장소</Tab>
      </GlobalHeaderWrapper>
    )
  );
};

export default GlobalHeader;
