import type { Meta, StoryObj } from '@storybook/react';

import SelectTrigger from '../../components/common/SelectTrigger/SelectTrigger';

const meta = {
  title: 'Select/SelectTrigger',
  component: SelectTrigger,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    selectedOption: {
      control: 'text',
      description: '여행지역 텍스트',
      defaultValue: './image/korea.jpg',
    },
    selectLabel: {
      control: 'text',
      description: '선택된 라벨 텍스트',
      defaultValue: '대한민국',
    },
  },
} satisfies Meta<typeof SelectTrigger>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    selectedOption: '대한민국',
    selectLabel: '여행 국가',
  },
};
