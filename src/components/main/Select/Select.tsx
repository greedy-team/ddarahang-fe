import { SelectContainer } from './Select.style';
import { SelectOptionList } from '../../common/SelectOptionList/SelectOptionList';
import SelectTab from '../../common/SelectTab/SelectTab';
import { useRef } from 'react';
import useDetectClose from '../../../hooks/select/useDetectClose';

interface SelectProps {
  onSubmitOption: () => void;
}

const Select = ({ onSubmitOption }: SelectProps) => {
  const optionListRef = useRef<HTMLUListElement>(null);
  const [isOpen, setIsOpen] = useDetectClose({ elem: optionListRef, initialState: false });

  return (
    <SelectContainer>
      <SelectTab
        setIsOpen={setIsOpen}
        onSubmitOption={onSubmitOption}
      />
      <SelectOptionList
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        optionListRef={optionListRef}
      />
    </SelectContainer>
  );
};

export default Select;
