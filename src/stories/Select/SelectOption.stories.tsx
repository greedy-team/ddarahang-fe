import type { Meta, StoryObj } from '@storybook/react';

import SelectItem from '../../components/common/Select/SelectItem/SelectOption';

const meta = {
  title: 'Select/SelectItem',
  component: SelectItem,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    imgUrl: {
      control: 'text',
      description: '나라 혹은 지역의 이미지',
      defaultValue: './image/korea.jpg',
    },
    locationLabel: {
      control: 'text',
      description: '나라 혹은 지역의 이름',
      defaultValue: '대한민국',
    },
    locationType: {
      control: 'text',
      description: '나라 혹은 도시 타입',
      defaultValue: '국가',
    },
    isCountryOption: {
      control: 'boolean',
      description: '나라/지역 옵션',
      defaultValue: true,
    },
  },
} satisfies Meta<typeof SelectItem>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    imgUrl: './image/korea.jpg',
    locationLabel: '일본',
    locationType: '국가',
    isCountryOption: true,
  },
};
