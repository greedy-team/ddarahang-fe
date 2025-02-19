import type { Meta, StoryObj } from '@storybook/react';

import Select from '../../components/main/Select/Select';

const meta = {
  title: 'Select/Select',
  component: Select,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof Select>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
