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
  const countryTabRef = useRef<HTMLButtonElement>(null);
  const regionTabRef = useRef<HTMLButtonElement>(null);

  const [isOpen, setIsOpen] = useDetectClose({
    elem: optionListRef,
    tabRefs: [countryTabRef, regionTabRef],
    initialState: false,
  });

  return (
    <SelectContainer isOpen={isOpen}>
      <SelectTab
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        onSubmitOption={onSubmitOption}
        countryTabRef={countryTabRef}
        regionTabRef={regionTabRef}
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
