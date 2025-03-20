import GlobalHeader from '../../common/GlobalHeader/GlobalHeader';
import Select from '../Select/Select';
import { HeaderWrapper } from './Header.style';

interface HeaderProps {
  onSubmitOption: () => void;
  setCurrentPageNumber: (currentPageNumber: number) => void;
}

const Header = ({ onSubmitOption, setCurrentPageNumber }: HeaderProps) => {
  return (
    <>
      <GlobalHeader
        isMobile={false}
        isIconVisible={true}
        isMainHeader={true}
        setCurrentPageNumber={setCurrentPageNumber}
      />
      <HeaderWrapper>
        <h1>어디로 여행을 떠나시나요?</h1>
        <p>따라만 하면 준비 끝! 유튜브 여행 영상으로 코스를 둘러보세요.</p>
        <Select
          setCurrentPageNumber={setCurrentPageNumber}
          onSubmitOption={onSubmitOption}
        />
      </HeaderWrapper>
    </>
  );
};

export default Header;
