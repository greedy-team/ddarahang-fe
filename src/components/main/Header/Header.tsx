import GlobalHeader from '../../common/GlobalHeader/GlobalHeader';
import Select from '../Select/Select';
import { HeaderWrapper } from './Header.style';

interface HeaderProps {
  color: string;
}

const Header = ({ color }: HeaderProps) => {
  return (
    <>
      <GlobalHeader
        color={color}
        isIconVisible={true}
      />
      <HeaderWrapper>
        <h1>어디로 여행을 떠나시나요?</h1>
        <p>따라만 하면 준비 끝! 인기 여행 영상으로 코스를 둘러보세요.</p>
        <Select />
      </HeaderWrapper>
    </>
  );
};

export default Header;
