import SelectOption from '../SelectItem/SelectOption';
import { SelectOptionType } from '../../../type';
import { SelectOptionListContainer } from './SelectOptionList.style';

interface SelectProps {
  options: SelectOptionType[];
  isCountryOption: boolean;
}

export const SelectOptionList = ({ options, isCountryOption }: SelectProps) => {
  return (
    <SelectOptionListContainer role='listbox'>
      {options.map((option) => (
        <SelectOption
          key={option.locationlabel}
          imgUrl={option.imgUrl}
          locationLabel={option.locationlabel}
          locationType={option.locationtype}
          isCountryOption={isCountryOption}
        />
      ))}
    </SelectOptionListContainer>
  );
};
