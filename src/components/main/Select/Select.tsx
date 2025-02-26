import { SelectContainer } from './Select.style';
import { SelectOptionList } from '../../common/SelectOptionList/SelectOptionList';
import SelectTab from '../../common/SelectTab/SelectTab';

const Select = () => {
  return (
    <SelectContainer>
      <SelectTab />
      <SelectOptionList />
    </SelectContainer>
  );
};

export default Select;
