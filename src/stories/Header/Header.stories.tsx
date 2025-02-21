import type { Meta, StoryObj } from '@storybook/react';
import { colors } from '../../styles/Theme';

import Header from '../../components/main/Header/Header';

const meta = {
  title: 'Header/Header',
  component: Header,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],

  argTypes: {
    color: {
      control: 'color',
      description: '페이지 버튼의 색상',
      defaultValue: colors.PRIMARY,
    },
  },
} satisfies Meta<typeof Header>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    color: colors.WHITE,
  },
};
