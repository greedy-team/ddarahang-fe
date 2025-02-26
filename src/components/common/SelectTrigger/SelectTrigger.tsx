import { SelectTriggerButton, SelectTextWrapper, SelectLabel, SelectOption } from './selectTrigger.style';
import CircleButton from '../Button/CircleButton/CircleButton';
import { colors, size } from '../../../styles/Theme';
import { useSelectOptionContext } from '../../../hooks/select/useSelectOptionContext';
import { RefObject } from 'react';

interface SelectTriggerType {
  tabRef: RefObject<HTMLButtonElement | null>;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isFocus: boolean;
  setIsFocus: React.Dispatch<
    React.SetStateAction<{
      country: boolean;
      region: boolean;
    }>
  >;
  selectLabel: string;
  selectedOption: string;
}

const SelectTrigger = ({ tabRef, setIsOpen, isFocus, setIsFocus, selectLabel, selectedOption }: SelectTriggerType) => {
  const { setSelectedOption } = useSelectOptionContext();

  const handleTriggerClick = () => {
    setIsOpen(true);

    if (selectLabel === '여행 국가') {
      setSelectedOption((prev) => ({
        ...prev,
        isCountryOption: true,
      }));
      setIsFocus((prev) => ({
        ...prev,
        region: false,
        country: true,
      }));
    }
    if (selectLabel === '여행 지역') {
      setSelectedOption((prev) => ({
        ...prev,
        isCountryOption: false,
      }));
      setIsFocus((prev) => ({
        ...prev,
        country: false,
        region: true,
      }));
    }
  };

  return (
    <SelectTriggerButton
      ref={tabRef}
      isFocus={isFocus}
      onClick={() => handleTriggerClick()}
    >
      <SelectTextWrapper isFocus={isFocus}>
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
