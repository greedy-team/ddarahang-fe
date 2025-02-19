import { colors } from '../../../styles/Theme';
import SearchButton from '../Button/CircleButton/CircleButton';
import SelectTrigger from '../SelectTrigger/SelectTrigger';
import { SelectTabContainer } from './SelectTab.style';

const SelectTab = () => {
  return (
    <SelectTabContainer>
      <SelectTrigger
        selectLabel='여행 국가'
        selectedOption='대한민국'
      />
      <SelectTrigger
        selectLabel='여행 지역'
        selectedOption='부산'
      />
      <SearchButton
        color={colors.PRIMARY}
        iconPath='./image/search.svg'
        iconAlt='검색 아이콘'
        onClick={() => {}}
      />
    </SelectTabContainer>
  );
};

export default SelectTab;
