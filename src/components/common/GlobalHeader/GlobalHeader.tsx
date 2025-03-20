import Logo from '../Logo/Logo';
import { GlobalHeaderWrapper } from './GlobalHeader.style';

interface GlobalHeaderProps {
  color: string;
  isIconVisible: boolean;
  isMainHeader: boolean;
  isMobile: boolean;
}

const GlobalHeader = ({ isIconVisible, isMainHeader, isMobile }: GlobalHeaderProps) => {
  return (
    <GlobalHeaderWrapper
      $isMobile={isMobile}
      $isIconVisible={isIconVisible}
    >
      <Logo isMainHeader={isMainHeader} />
    </GlobalHeaderWrapper>
  );
};

export default GlobalHeader;
