import { SelectContainer } from './Select.style';
import { SelectOptionList } from '../../common/SelectOptionList/SelectOptionList';
import { REGIONOPTION, COUNTRYOPTION } from '../../../constants';
import SelectTab from '../../common/SelectTab/SelectTab';

const Select = () => {
  return (
    <SelectContainer>
      <SelectTab />
      <SelectOptionList
        options={COUNTRYOPTION}
        isCountryOption={true}
      />
      <SelectOptionList
        options={REGIONOPTION}
        isCountryOption={false}
      />
    </SelectContainer>
  );
};

export default Select;
