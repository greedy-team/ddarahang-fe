import { SelectTriggerButton, SelectTextWrapper, SelectLabel, SelectOption } from './selectTrigger.style';
import CircleButton from '../Button/CircleButton/CircleButton';
import { colors, size } from '../../../styles/Theme';

interface SelectTriggerType {
  selectLabel: string;
  selectedOption: string;
  onTriggerClick: (isCountryOption: boolean) => void;
}

const SelectTrigger = ({ selectLabel, selectedOption, onTriggerClick }: SelectTriggerType) => {
  const handleTriggerClick = () => {
    if (selectLabel === '여행 국가') {
      onTriggerClick(false);
    }
    if (selectLabel === '여행 지역') {
      onTriggerClick(true);
    }
  };

  return (
    <SelectTriggerButton onClick={() => handleTriggerClick()}>
      <SelectTextWrapper>
        <SelectLabel>{selectLabel}</SelectLabel>
        <SelectOption>{selectedOption}</SelectOption>
      </SelectTextWrapper>
      {selectLabel === '여행 지역' && (
        <CircleButton
          size={size.SIZE_016}
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
