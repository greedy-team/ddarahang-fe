import type { Meta, StoryObj } from '@storybook/react';

import Tab from '../../components/common/Tabs/Tab/Tab';
import { fn } from '@storybook/test';

const meta = {
  title: 'Tab/Tab',
  component: Tab,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    travelDays: {
      control: 'number',
      description: '탭의 날짜',
      defaultValue: 1,
    },
    selectedTab: {
      control: 'number',
      description: '선택된 탭의 날짜',
      defaultValue: 1,
    },
  },
  args: {
    onClickTab: fn(),
  },
} satisfies Meta<typeof Tab>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    travelDays: 1,
    selectedTab: 1,
    onClickTab: fn(),
  },
};
