import { RefObject, useEffect, useState } from 'react';
import SelectTrigger from '../SelectTrigger/SelectTrigger';
import { SelectTabContainer } from './SelectTab.style';
import { useSelectOptionContext } from '../../../../hooks/select/useSelectOptionContext';
import { TRAVEL_LABEL } from '../../../../constants';

interface SelectTabProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  onSubmitOption: () => void;
  countryTabRef: RefObject<HTMLDivElement | null>;
  regionTabRef: RefObject<HTMLDivElement | null>;
}

const SelectTab = ({ isOpen, setIsOpen, onSubmitOption, countryTabRef, regionTabRef }: SelectTabProps) => {
  const { selectedOption, setSelectedOption } = useSelectOptionContext();

  const [isFocus, setIsFocus] = useState({
    country: false,
    region: false,
  });

  useEffect(() => {
    if (!isOpen) {
      setIsFocus({ country: false, region: false });
    }
  }, [isOpen]);

  useEffect(() => {
    if (!selectedOption.selectedOptionLabel) {
      setSelectedOption((prev) => ({
        ...prev,
        selectedOptionLabel: TRAVEL_LABEL.REGION + ' 검색',
      }));
    }
  }, [selectedOption.selectedOptionLabel, setSelectedOption]);

  return (
    <SelectTabContainer>
      <SelectTrigger
        isFocus={isFocus.country}
        tabRef={countryTabRef}
        setIsFocus={setIsFocus}
        setIsOpen={setIsOpen}
        selectLabel={TRAVEL_LABEL.COUNTRY}
        selectOption={selectedOption.countryName}
        onSubmitOption={onSubmitOption}
      />
      <SelectTrigger
        isFocus={isFocus.region}
        tabRef={regionTabRef}
        setIsFocus={setIsFocus}
        setIsOpen={setIsOpen}
        selectLabel={TRAVEL_LABEL.REGION}
        selectOption={selectedOption.selectedOptionLabel}
        onSubmitOption={onSubmitOption}
      />
    </SelectTabContainer>
  );
};

export default SelectTab;
