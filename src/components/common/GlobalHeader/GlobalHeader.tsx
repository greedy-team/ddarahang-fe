import CircleButton from '../Button/CircleButton/CircleButton';
import Logo from '../Logo/Logo';
import { GlobalHeaderWrapper } from './GlobalHeader.style';
import { size } from '../../../styles/Theme';
import { useNavigate } from 'react-router-dom';

interface GlobalHeaderProps {
  color: string;
  isIconVisible: boolean;
  isMapVisible?: boolean;
  isMainHeader: boolean;
}

const GlobalHeader = ({ color, isIconVisible, isMainHeader, isMapVisible }: GlobalHeaderProps) => {
  const route = useNavigate();

  return (
    <GlobalHeaderWrapper $isIconVisible={isIconVisible}>
      <Logo isMainHeader={isMainHeader} />
      {isIconVisible && (
        <CircleButton
          color={color}
          size={size.SIZE_016}
          iconAlt='로그인 아이콘'
          iconPath='./icon/LoginIcon.svg'
          onClick={() => route('/maintenance')}
        />
      )}
      {isMapVisible && (
        <CircleButton
          color={color}
          size={size.SIZE_016}
          iconAlt='지도 아이콘'
          iconPath='/icon/map.svg'
          onClick={() => console.log('나오라고')}
        ></CircleButton>
      )}
    </GlobalHeaderWrapper>
  );
};

export default GlobalHeader;
