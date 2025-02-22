import type { Meta, StoryObj } from '@storybook/react';

import Tab from '../../components/common/Tab/Tab';

const meta = {
  title: 'Tab/Tab',
  component: Tab,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Tab>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
