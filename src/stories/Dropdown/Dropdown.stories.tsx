import type { Meta, StoryObj } from '@storybook/react';
import SortDropdown from '../../components/main/SortDropdown/SortDropdown';
import { Dropdown } from '../../components/common/Dropdown/Dropdown/Dropdown';
import { action } from '@storybook/addon-actions'; // action 임포트

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
    children: <Dropdown.Trigger onClick={() => action('트리거 클릭')()}>정렬 기준</Dropdown.Trigger>,
  },
};
