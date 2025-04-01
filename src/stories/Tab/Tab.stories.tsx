import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import Tab from '../../components/common/Tabs/Tab/Tab';

const meta = {
  title: 'Tab/Tab',
  component: Tab,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    totalTravelDays: {
      control: 'number',
      description: '탭의 날짜',
      defaultValue: 4,
    },
    selectedTab: {
      control: 'number',
      description: '선택된 탭의 날짜',
      defaultValue: 4,
    },
  },
  args: {
    setSelectedTab: fn(),
  },
} satisfies Meta<typeof Tab>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    totalTravelDays: 2,
    selectedTab: 2,
    setSelectedTab: fn(),
  },
};
