import type { Meta, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Select from '../../components/main/Select/Select';

const meta = {
  title: 'Select/Select',
  component: Select,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Select>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    onSubmitOption: action('정렬 기준 변경'),
  },
};
