import { useEffect } from 'react';
import SelectTrigger from '../SelectTrigger/SelectTrigger';
import { SelectTabContainer } from './SelectTab.style';
import { useSelectOptionContext } from '../../../hooks/select/useSelectOptionContext';

const SelectTab = () => {
  const { selectedOption, setSelectedOption } = useSelectOptionContext();

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
        selectLabel='여행 국가'
        selectedOption={selectedOption.countryName}
        setSelectedOption={setSelectedOption}
      />
      <SelectTrigger
        selectLabel='여행 지역'
        selectedOption={selectedOption.selectedOptionLabel}
        setSelectedOption={setSelectedOption}
      />
    </SelectTabContainer>
  );
};

export default SelectTab;
