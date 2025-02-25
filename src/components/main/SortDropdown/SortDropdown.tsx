import { useState } from 'react';
import { Dropdown } from '../../common/Dropdown/Dropdown/Dropdown';
import { DropdownWrapper } from './SortDropdown.style';

const SortDropdown = () => {
  const [isOpen, setIsOpren] = useState(false);

  return (
    <DropdownWrapper>
      <Dropdown>
        <Dropdown.Trigger onClick={() => {}}>
          <span>정렬 기준</span>
          {/** 이미지 아이콘을 클릭했을 때 180도 회전하도록 추후 구현 */}
          <img
            width={24}
            height={24}
            src='./icon/DownArrow.svg'
            alt='아래 화살표'
          />
        </Dropdown.Trigger>
        {isOpen && (
          <Dropdown.List>
            <Dropdown.Item onClick={() => {}}>조회수 순</Dropdown.Item>
            <Dropdown.Item onClick={() => {}}>최신 순</Dropdown.Item>
          </Dropdown.List>
        )}
      </Dropdown>
    </DropdownWrapper>
  );
};

export default SortDropdown;
