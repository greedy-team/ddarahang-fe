import { useEffect, useState } from 'react';
import { CountryType } from '../../../types';
import SelectTrigger from '../SelectTrigger/SelectTrigger';
import { SelectTabContainer } from './SelectTab.style';

interface SelectTabProps {
  selectedOption: {
    isCountryOption: boolean;
    countryName: CountryType;
    selectedOptionLabel: string;
  };
  setSelectedOption: React.Dispatch<
    React.SetStateAction<{ selectedOptionLabel: string; countryName: CountryType; isCountryOption: boolean }>
  >;
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const SelectTab = ({ isOpen, setIsOpen, selectedOption, setSelectedOption }: SelectTabProps) => {
  const [selectedOptionLabel, setSelectedOptionLabel] = useState(selectedOption.selectedOptionLabel);

  useEffect(() => {
    if (!selectedOption.selectedOptionLabel) {
      setSelectedOptionLabel('여행지역 검색');
    }

    if (selectedOption.selectedOptionLabel) {
      setSelectedOptionLabel(selectedOption.selectedOptionLabel);
    }
  }, [selectedOption.selectedOptionLabel]);

  return (
    <SelectTabContainer>
      <SelectTrigger
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        selectLabel='여행 국가'
        selectedOption={selectedOption.countryName}
        setSelectedOption={setSelectedOption}
      />
      <SelectTrigger
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        selectLabel='여행 지역'
        selectedOption={selectedOptionLabel}
        setSelectedOption={setSelectedOption}
      />
    </SelectTabContainer>
  );
};

export default SelectTab;
