import { useEffect, useRef, useState } from 'react';
import SelectTrigger from '../SelectTrigger/SelectTrigger';
import { SelectTabContainer } from './SelectTab.style';
import { useSelectOptionContext } from '../../../hooks/select/useSelectOptionContext';

interface SelectTabProps {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  onSubmitOption: () => void;
}

const SelectTab = ({ setIsOpen, onSubmitOption }: SelectTabProps) => {
  const tabRef = useRef<HTMLButtonElement>(null);
  const { selectedOption, setSelectedOption } = useSelectOptionContext();
  const [isFocus, setIsFocus] = useState({
    country: false,
    region: false,
  });

  useEffect(() => {
    if (!selectedOption.selectedOptionLabel) {
      setSelectedOption((prev) => ({
        ...prev,
        selectedOptionLabel: '여행 지역 검색',
      }));
    }

    if (selectedOption.selectedOptionLabel) {
      setSelectedOption((prev) => ({
        ...prev,
        selectedOptionLabel: selectedOption.selectedOptionLabel,
      }));
    }
  }, [selectedOption.selectedOptionLabel]);

  return (
    <SelectTabContainer>
      <SelectTrigger
        isFocus={isFocus.country}
        tabRef={tabRef}
        setIsFocus={setIsFocus}
        setIsOpen={setIsOpen}
        selectLabel='여행 국가'
        selectOption={selectedOption.countryName}
        onSubmitOption={onSubmitOption}
      />
      <SelectTrigger
        isFocus={isFocus.region}
        tabRef={tabRef}
        setIsFocus={setIsFocus}
        setIsOpen={setIsOpen}
        selectLabel='여행 지역'
        selectOption={selectedOption.selectedOptionLabel}
        onSubmitOption={onSubmitOption}
      />
    </SelectTabContainer>
  );
};

export default SelectTab;
