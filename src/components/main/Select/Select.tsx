import { SelectContainer } from './Select.style';
import { SelectOptionList } from '../../common/SelectOptionList/SelectOptionList';
import SelectTab from '../../common/SelectTab/SelectTab';
import { useRef } from 'react';
import useDetectClose from '../../../hooks/select/useDetectClose';

const Select = () => {
  const optionListRef = useRef<HTMLUListElement>(null);
  const [isOpen, setIsOpen] = useDetectClose({ elem: optionListRef, initialState: false });

  return (
    <SelectContainer>
      <SelectTab setIsOpen={setIsOpen} />
      <SelectOptionList
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        optionListRef={optionListRef}
      />
    </SelectContainer>
  );
};

export default Select;
