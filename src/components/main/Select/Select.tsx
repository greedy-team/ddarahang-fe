import { SelectContainer } from './Select.style';
import { SelectOptionList } from '../../common/SelectOptionList/SelectOptionList';
import { JAPANREGIONOPTION, COUNTRYOPTION, KOREAREGIONOPTION } from '../../../constants';
import SelectTab from '../../common/SelectTab/SelectTab';
import { useState } from 'react';

const Select = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <SelectContainer>
      <SelectTab />
      {isOpen && (
        <>
          <SelectOptionList
            options={COUNTRYOPTION}
            isCountryOption={true}
          />
          <SelectOptionList
            options={KOREAREGIONOPTION}
            isCountryOption={false}
          />
          <SelectOptionList
            options={JAPANREGIONOPTION}
            isCountryOption={false}
          />
        </>
      )}
    </SelectContainer>
  );
};

export default Select;
