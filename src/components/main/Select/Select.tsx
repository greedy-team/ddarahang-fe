import { SelectContainer } from './Select.style';
import { SelectOptionList } from '../../common/SelectOptionList/SelectOptionList';
import { JAPANREGIONOPTION, COUNTRYOPTION, KOREAREGIONOPTION } from '../../../constants';
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
        options={KOREAREGIONOPTION}
        isCountryOption={false}
      />
      <SelectOptionList
        options={JAPANREGIONOPTION}
        isCountryOption={false}
      />
    </SelectContainer>
  );
};

export default Select;
