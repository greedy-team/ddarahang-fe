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
    </SelectTabContainer>
  );
};

export default SelectTab;
