import type { Meta, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import SelectItem from '../../components/common/Select/SelectItem/SelectOption';
import { CountryType } from '../../types';

const meta = {
  title: 'Select/SelectItem',
  component: SelectItem,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    option: {
      control: 'text',
      description: '나라 혹은 지역의 이름',
      defaultValue: '대한민국',
    },
  },
  args: {
    setIsOpen: action('선택 오픈 버튼'),
  },
} satisfies Meta<typeof SelectItem>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    option: {
      isCountryOption: true,
      imgUrl: './image/korea.jpg',
      countryLabel: '대한민국' as CountryType,
      locationLabel: '여행 국가',
      locationType: '대한민국',
    },
  },
};
