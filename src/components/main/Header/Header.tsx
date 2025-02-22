import GlobalHeader from '../../common/GlobalHeader/GlobalHeader';
import Select from '../Select/Select';
import { HeaderWrapper } from './Header.style';

interface HeaderProps {
  color: string;
}

const Header = ({ color }: HeaderProps) => {
  return (
    <HeaderWrapper>
      <GlobalHeader color={color} />
      <h3>✈️ 여행 따라갈래? </h3>
      <Select />
    </HeaderWrapper>
  );
};

export default Header;
