import { SelectContainer } from './Select.style';
import { SelectOptionList } from '../../common/SelectOptionList/SelectOptionList';
import SelectTab from '../../common/SelectTab/SelectTab';
import { useEffect, useState } from 'react';
import { CountryType } from '../../../types';

const Select = () => {
  const [selectedOption, setSelectedOption] = useState<{
    isCountryOption: boolean;
    countryName: CountryType;
    selectedOptionLabel: string;
  }>({
    isCountryOption: true,
    countryName: '대한민국',
    selectedOptionLabel: '',
  });
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    console.log(selectedOption);
  }, [selectedOption]);

  return (
    <SelectContainer>
      <SelectTab
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        selectedOption={selectedOption}
        setSelectedOption={setSelectedOption}
      />
      <SelectOptionList
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        setSelectedOption={setSelectedOption}
        selectedOption={selectedOption}
      />
    </SelectContainer>
  );
};

export default Select;
