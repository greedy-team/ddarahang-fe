import { SelectTriggerButton, SelectLabel, SelectOption } from './SelectTrigger.style';

interface SelectTriggerType {
  selectLabel: string;
  selectedOption: string;
}

const SelectTrigger = ({ selectLabel, selectedOption }: SelectTriggerType) => {
  return (
    <SelectTriggerButton>
      <SelectLabel>{selectLabel}</SelectLabel>
      <SelectOption>{selectedOption}</SelectOption>
    </SelectTriggerButton>
  );
};

export default SelectTrigger;
