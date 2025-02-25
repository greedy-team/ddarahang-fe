import SelectTrigger from '../SelectTrigger/SelectTrigger';
import { SelectTabContainer } from './SelectTab.style';

interface SelectTabProps {
  onTriggerClick: (isCountryOption: boolean) => void;
}

const SelectTab = ({ onTriggerClick }: SelectTabProps) => {
  return (
    <SelectTabContainer>
      <SelectTrigger
        selectLabel='여행 국가'
        selectedOption='대한민국'
        onTriggerClick={onTriggerClick}
      />
      <SelectTrigger
        selectLabel='여행 지역'
        selectedOption='부산'
        onTriggerClick={onTriggerClick}
      />
    </SelectTabContainer>
  );
};

export default SelectTab;
