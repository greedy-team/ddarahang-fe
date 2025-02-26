import { RefObject, useEffect, useRef, useState } from 'react';
import SelectTrigger from '../SelectTrigger/SelectTrigger';
import { SelectTabContainer } from './SelectTab.style';
import { useSelectOptionContext } from '../../../hooks/select/useSelectOptionContext';

interface SelectTabProps {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const SelectTab = ({ setIsOpen }: SelectTabProps) => {
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
        selectedOption={selectedOption.countryName}
      />
      <SelectTrigger
        isFocus={isFocus.region}
        tabRef={tabRef}
        setIsFocus={setIsFocus}
        setIsOpen={setIsOpen}
        selectLabel='여행 지역'
        selectedOption={selectedOption.selectedOptionLabel}
      />
    </SelectTabContainer>
  );
};

export default SelectTab;
