import { useState } from 'react';
import { Dropdown } from '../../common/Dropdown/Dropdown/Dropdown';
import { DropdownWrapper } from './SortDropdown.style';
import { SortByType } from '../../../types';
import { getSortedOption } from '../../../utils';

interface SortDropdownProps {
  sortOption: SortByType;
  onSubmitDropdown: (sortBy: SortByType) => void;
}

const SortDropdown = ({ sortOption, onSubmitDropdown }: SortDropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const sortedOptionText = getSortedOption(sortOption);

  const handleDropdownItemClick = (sortBy: SortByType) => {
    onSubmitDropdown(sortBy);
    setIsOpen(false);
  };

  return (
    <DropdownWrapper>
      <Dropdown>
        <Dropdown.Trigger onClick={() => setIsOpen(!isOpen)}>
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
          <Dropdown.Item onClick={() => handleDropdownItemClick('viewCount')}>조회수 순</Dropdown.Item>
          <Dropdown.Item onClick={() => handleDropdownItemClick('uploadDate')}>최신 순</Dropdown.Item>
        </Dropdown.List>
      </Dropdown>
    </DropdownWrapper>
  );
};

export default SortDropdown;
