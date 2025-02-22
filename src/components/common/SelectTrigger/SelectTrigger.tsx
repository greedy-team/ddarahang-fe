import { SelectTriggerButton, SelectTextWrapper, SelectLabel, SelectOption } from './SelectTrigger.style';
import CircleButton from '../Button/CircleButton/CircleButton';
import { colors } from '../../../styles/Theme';

interface SelectTriggerType {
  selectLabel: string;
  selectedOption: string;
}

const SelectTrigger = ({ selectLabel, selectedOption }: SelectTriggerType) => {
  return (
    <SelectTriggerButton>
      <SelectTextWrapper>
        <SelectLabel>{selectLabel}</SelectLabel>
        <SelectOption>{selectedOption}</SelectOption>
      </SelectTextWrapper>
      {selectLabel === '여행 지역' && (
        <CircleButton
          color={colors.PRIMARY}
          iconPath='./image/search.svg'
          iconAlt='검색 아이콘'
          onClick={() => {}}
        />
      )}
    </SelectTriggerButton>
  );
};

export default SelectTrigger;
