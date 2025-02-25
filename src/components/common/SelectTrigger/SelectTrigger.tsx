import { SelectTriggerButton, SelectTextWrapper, SelectLabel, SelectOption } from './selectTrigger.style';
import CircleButton from '../Button/CircleButton/CircleButton';
import { colors, size } from '../../../styles/Theme';
import { CountryType } from '../../../types';

interface SelectTriggerType {
  selectLabel: string;
  selectedOption: string;
  setSelectedOption: React.Dispatch<
    React.SetStateAction<{ selectedOptionLabel: string; countryName: CountryType; isCountryOption: boolean }>
  >;
}

const SelectTrigger = ({ selectLabel, selectedOption, setSelectedOption }: SelectTriggerType) => {
  const handleTriggerClick = () => {
    if (selectLabel === '여행 국가') {
      setSelectedOption((prev) => ({
        ...prev,
        isCountryOption: true,
      }));
    }
    if (selectLabel === '여행 지역') {
      setSelectedOption((prev) => ({
        ...prev,
        isCountryOption: false,
      }));
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
