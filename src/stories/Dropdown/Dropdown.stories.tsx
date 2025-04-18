import type { Meta, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions'; // action 임포트

import SortDropdown from '../../components/main/SortDropdown/SortDropdown';

const meta = {
  title: 'Dropdown/SortDropdown',
  component: SortDropdown,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof SortDropdown>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    onSubmitDropdown: action('정렬 기준 변경'),
  },
};
