import { RefObject } from 'react';
import { SelectTriggerButton, SelectTextWrapper, SelectLabel, SelectOption } from './selectTrigger.style';
import { useSelectOptionContext } from '../../../../hooks/select/useSelectOptionContext';
import { TRAVEL_LABEL } from '../../../../constants';
import { colors, size } from '../../../../styles/Theme';
import CircleButton from '../../Button/CircleButton/CircleButton';

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
  selectOption: string;
  onSubmitOption: () => void;
}

const SelectTrigger = ({
  tabRef,
  selectOption,
  setIsOpen,
  isFocus,
  setIsFocus,
  selectLabel,
  onSubmitOption,
}: SelectTriggerType) => {
  const { setSelectedOption } = useSelectOptionContext();

  const handleTriggerClick = () => {
    setIsOpen(true);

    if (selectLabel === TRAVEL_LABEL.COUNTRY) {
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
    if (selectLabel === TRAVEL_LABEL.REGION) {
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
        <SelectOption>{selectOption}</SelectOption>
      </SelectTextWrapper>
      {selectLabel === TRAVEL_LABEL.REGION && (
        <CircleButton
          size={size.SIZE_016}
          color={colors.PRIMARY}
          iconPath='./image/search.svg'
          iconAlt='검색 아이콘'
          onClick={() => onSubmitOption()}
        />
      )}
    </SelectTriggerButton>
  );
};

export default SelectTrigger;
