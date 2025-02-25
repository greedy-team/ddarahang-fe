import { SelectContainer } from './Select.style';
import { SelectOptionList } from '../../common/SelectOptionList/SelectOptionList';
import { JAPANREGIONOPTION, COUNTRYOPTION, KOREAREGIONOPTION } from '../../../constants';
import SelectTab from '../../common/SelectTab/SelectTab';
import { useState } from 'react';
import { LocationType } from '../../../types';

const Select = () => {
  const [selectedOption, setSelectedOption] = useState({
    isCountryOption: true,
    selectedOptionLabel: '',
    countryName: '',
  });

  const handleTriggerClick = (isCountryOption: boolean) => {
    setSelectedOption((prev) => ({
      ...prev,
      isCountryOption: isCountryOption,
    }));
  };

  return (
    <SelectContainer>
      <SelectTab onTriggerClick={(isCountryOption) => handleTriggerClick(isCountryOption)} />

      <SelectOptionList
        countryName='대한민국'
        isCountryOption={true}
      />
    </SelectContainer>
  );
};

export default Select;
