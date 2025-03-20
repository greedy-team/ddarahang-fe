import Logo from '../Logo/Logo';
import { GlobalHeaderWrapper } from './GlobalHeader.style';

interface GlobalHeaderProps {
  isIconVisible: boolean;
  isMainHeader: boolean;
  isMobile: boolean;
  setCurrentPageNumber?: (currentPageNumber: number) => void;
}

const GlobalHeader = ({ isIconVisible, isMainHeader, isMobile, setCurrentPageNumber }: GlobalHeaderProps) => {
  return (
    <GlobalHeaderWrapper
      $isMobile={isMobile}
      $isIconVisible={isIconVisible}
    >
      <Logo
        isMainHeader={isMainHeader}
        setCurrentPageNumber={setCurrentPageNumber}
      />
    </GlobalHeaderWrapper>
  );
};

export default GlobalHeader;
