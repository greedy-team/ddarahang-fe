import { colors } from '../../../styles/Theme';
import CircleButton from '../Button/CircleButton/CircleButton';
import Logo from '../Logo/Logo';
import { GlobalHeaderWrapper } from './GlobalHeader.style';

const GlobalHeader = () => {
  return (
    <GlobalHeaderWrapper>
      <Logo />
      <CircleButton
        color={colors.WHITE}
        iconAlt='로그인 아이콘'
        iconPath='./LoginIcon.svg'
        onClick={() => {}}
      />
    </GlobalHeaderWrapper>
  );
};

export default GlobalHeader;
