import SelectOption from '../SelectItem/SelectOption';
import { SelectOptionType } from '../../../type';
import { SelectOptionListContainer } from './SelectOptionList.style';

interface SelectProps {
  options: SelectOptionType[];
  isCountryOption: boolean;
}

export const SelectOptionList = ({ options, isCountryOption }: SelectProps) => {
  return (
    <SelectOptionListContainer
      role='listbox '
      isCountryOption={isCountryOption}
    >
      {options.map((option) => (
        <SelectOption
          key={option.locationLabel}
          imgUrl={option.imgUrl}
          locationLabel={option.locationLabel}
          locationType={option.locationType}
          isCountryOption={option.isCountryOption}
        />
      ))}
    </SelectOptionListContainer>
  );
};
