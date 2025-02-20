import GlobalHeader from '../../common/GlobalHeader/GlobalHeader';
import Select from '../Select/Select';
import { HeaderWrapper } from './Header.style';

const Header = () => {
  return (
    <HeaderWrapper>
      <GlobalHeader />
      <h3>✈️ 여행 따라갈래? </h3>
      <Select />
    </HeaderWrapper>
  );
};

export default Header;
