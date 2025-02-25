import CircleButton from '../Button/CircleButton/CircleButton';
import Logo from '../Logo/Logo';
import { GlobalHeaderWrapper } from './GlobalHeader.style';
import { size } from '../../../styles/Theme';

interface GlobalHeaderProps {
  color: string;
  isIconVisible: boolean;
}

const GlobalHeader = ({ color, isIconVisible }: GlobalHeaderProps) => {
  return (
    <GlobalHeaderWrapper>
      <Logo />
      {isIconVisible && (
        <CircleButton
          color={color}
          size={size.SIZE_016}
          iconAlt='로그인 아이콘'
          iconPath='./icon/LoginIcon.svg'
          onClick={() => {}}
        />
      )}
    </GlobalHeaderWrapper>
  );
};

export default GlobalHeader;
