import type { Meta, StoryObj } from '@storybook/react';

import Logo from '../../components/common/Logo/Logo';

const meta = {
  title: 'Logo/Logo',
  component: Logo,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Logo>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
