import type { Meta, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions'; // action 임포트
import Dialog from '../../components/common/Dialog/Dialog';

const meta = {
  title: 'Dialog',
  component: Dialog,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Dialog>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    isOpen: true,
    children: 'Dialog content goes here',
    onClose: action('다이얼로그 닫힘'),
  },
};
