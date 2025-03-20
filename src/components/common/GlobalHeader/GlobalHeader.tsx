import CircleButton from '../Button/CircleButton/CircleButton';
import Logo from '../Logo/Logo';
import { GlobalHeaderWrapper } from './GlobalHeader.style';
import { size } from '../../../styles/Theme';
import { useNavigate } from 'react-router-dom';

interface GlobalHeaderProps {
  color: string;
  isIconVisible: boolean;
  isMainHeader: boolean;
  isMobile: boolean;
  setCurrentPageNumber: (currentPageNumber: number) => void;
}

const GlobalHeader = ({ color, isIconVisible, isMainHeader, isMobile, setCurrentPageNumber }: GlobalHeaderProps) => {
  const route = useNavigate();

  return (
    <GlobalHeaderWrapper
      $isMobile={isMobile}
      $isIconVisible={isIconVisible}
    >
      <Logo
        isMainHeader={isMainHeader}
        setCurrentPageNumber={setCurrentPageNumber}
      />
      {isIconVisible && (
        <CircleButton
          color={color}
          size={size.SIZE_016}
          iconAlt='로그인 아이콘'
          iconPath='./icon/LoginIcon.svg'
          onClick={() => route('/maintenance')}
        />
      )}
    </GlobalHeaderWrapper>
  );
};

export default GlobalHeader;
