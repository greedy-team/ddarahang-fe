import { useEffect, useRef, useState } from 'react';
import { Dropdown } from '../../common/Dropdown/Dropdown/Dropdown';
import { DropdownWrapper } from './SortDropdown.style';
import { SortByType } from '../../../types';
import { getSortedOption } from '../../../utils';
import { useSortOptionContext } from '../../../hooks/context/useSortOptionContext';
import useDetectClose from '../../../hooks/select/useDetectClose';

interface SortDropdownProps {
  onSubmitDropdown: (sortBy: SortByType) => void;
}

const SortDropdown = ({ onSubmitDropdown }: SortDropdownProps) => {
  const dropdownRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const { sortOption } = useSortOptionContext();

  const [isOpen, setIsOpen] = useDetectClose({
    elem: dropdownRef,
    tabRefs: triggerRef,
    initialState: false,
  });
  const [sortedOptionText, setSortedOptionText] = useState(getSortedOption(sortOption));

  useEffect(() => {
    const optionText = getSortedOption(sortOption);
    setSortedOptionText(optionText);
  }, [sortOption]);

  const handleDropdownItemClick = (sortBy: SortByType) => {
    onSubmitDropdown(sortBy);
    setIsOpen(false);
  };

  return (
    <DropdownWrapper>
      <div ref={dropdownRef}>
        <Dropdown>
          <Dropdown.Trigger
            triggerRef={triggerRef}
            onClick={() => setIsOpen(!isOpen)}
          >
            <span>{sortedOptionText}</span>
            {/** 이미지 아이콘을 클릭했을 때 180도 회전하도록 추후 구현 */}
            <img
              width={24}
              height={24}
              src='./icon/DownArrow.svg'
              alt='아래 화살표'
            />
          </Dropdown.Trigger>
          <Dropdown.List isOpen={isOpen}>
            <Dropdown.Item onClick={() => handleDropdownItemClick('viewCount')}>조회순</Dropdown.Item>
            <Dropdown.Item onClick={() => handleDropdownItemClick('uploadDate')}>최신순</Dropdown.Item>
          </Dropdown.List>
        </Dropdown>
      </div>
    </DropdownWrapper>
  );
};

export default SortDropdown;
