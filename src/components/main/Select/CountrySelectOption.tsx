import { SelectOptionList } from '../../common/SelectOptionList/SelectOptionList';
import { COUNTRYOPTION } from '../../../constants';

export const CountrySelectOption = () => {
  return (
    <>
      <SelectOptionList
        options={COUNTRYOPTION}
        isCountryOption={true}
      />
    </>
  );
};
