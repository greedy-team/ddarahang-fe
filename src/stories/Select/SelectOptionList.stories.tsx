import type { Meta, StoryObj } from '@storybook/react';

import { SelectOptionList } from '../../components/common/Select/SelectOptionList/SelectOptionList';
import { COUNTRYOPTION } from '../../constants';

const meta = {
  title: 'Select/SelectOptionList',
  component: SelectOptionList,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    options: {
      control: 'text',
      description: '나라 혹은 지역의 이미지',
      defaultValue: './image/korea.jpg',
    },
    isCountryOption: {
      control: 'boolean',
      description: '나라 옵션인지 지역 옵션인지',
      defaultValue: true,
    },
  },
} satisfies Meta<typeof SelectOptionList>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    options: COUNTRYOPTION,
    isCountryOption: true,
  },
};
