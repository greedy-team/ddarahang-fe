import { useRef, useState } from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { SelectOptionList } from '../../components/common/Select/SelectOptionList/SelectOptionList';

const meta = {
  title: 'Select/SelectOptionList',
  component: SelectOptionList,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    isOpen: {
      control: 'boolean',
      description: '옵션 리스트의 열림/닫힘 상태',
      defaultValue: true,
    },
    setIsOpen: {
      control: false,
      description: '옵션 리스트 열림/닫힘 상태를 변경하는 함수',
    },
    optionListRef: {
      control: false,
      description: '옵션 리스트의 ref',
    },
  },
} satisfies Meta<typeof SelectOptionList>;

export default meta;
type Story = StoryObj<typeof SelectOptionList>;

export const Default: Story = {
  render: (args) => {
    const [isOpen, setIsOpen] = useState(args.isOpen);
    const optionListRef = useRef<HTMLUListElement | null>(null);

    return (
      <SelectOptionList
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        optionListRef={optionListRef}
        setCurrentPageNumber={() => {}}
      />
    );
  },
  args: {
    isOpen: true,
  },
};
