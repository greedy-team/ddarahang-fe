import { SelectOptionList } from '../../common/SelectOptionList/SelectOptionList';
import { REGIONOPTION } from '../../../constants';

export const RegionSelectOption = () => {
  return (
    <>
      <SelectOptionList
        options={REGIONOPTION}
        isCountryOption={false}
      />
    </>
  );
};
