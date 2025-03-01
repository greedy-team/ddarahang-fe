import { SelectContainer } from './Select.style';
import { useRef } from 'react';
import useDetectClose from '../../../hooks/select/useDetectClose';
import SelectTab from '../../common/Select/SelectTab/SelectTab';
import { SelectOptionList } from '../../common/Select/SelectOptionList/SelectOptionList';

interface SelectProps {
  onSubmitOption: () => void;
}

const Select = ({ onSubmitOption }: SelectProps) => {
  const optionListRef = useRef<HTMLUListElement>(null);
  const countryTabRef = useRef<HTMLDivElement>(null);
  const regionTabRef = useRef<HTMLDivElement>(null);

  const [isOpen, setIsOpen] = useDetectClose({
    elem: optionListRef,
    tabRefs: [countryTabRef, regionTabRef],
    initialState: false,
  });

  return (
    <SelectContainer $isOpen={isOpen}>
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
