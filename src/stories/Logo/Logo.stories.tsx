import type { Meta, StoryObj } from '@storybook/react';

import Logo from '../../components/common/Logo/Logo';
import { action } from '@storybook/addon-actions';

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
  args: {
    isMainHeader: false,
    setCurrentPageNumber: action('페이지 번호 설정'),
  },
};
