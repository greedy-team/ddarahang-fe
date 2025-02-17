import { SelectTriggerButton, SelectLabel, SelectOption } from './selectTrigger.style';

interface SelectTriggerType {
  selectedOption: string;
  selectLabel: string;
}

const SelectTrigger = ({ selectedOption, selectLabel }: SelectTriggerType) => {
  return (
    <SelectTriggerButton>
      <SelectLabel>{selectLabel}</SelectLabel>
      <SelectOption>{selectedOption}</SelectOption>
    </SelectTriggerButton>
  );
};

export default SelectTrigger;
