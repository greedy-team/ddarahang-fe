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

  useEffect(() => {
    console.log(selectedOption);
  }, [selectedOption]);
  return (
    <SelectContainer>
      <SelectTab setSelectedOption={setSelectedOption} />
      <SelectOptionList
        setSelectedOption={setSelectedOption}
        selectedOption={selectedOption}
      />
    </SelectContainer>
  );
};

export default Select;
