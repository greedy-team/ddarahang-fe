import type { Meta, StoryObj } from '@storybook/react';

import FavoriteTab from '../../components/favorite/FavoriteTab/FavoriteTab';

const meta = {
  title: 'Tab/FavoriteTab',
  component: FavoriteTab,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    tag: {
      control: 'text',
      description: '태그의 이름',
      defaultValue: '음식',
    },
  },
} satisfies Meta<typeof FavoriteTab>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    tag: '관광',
  },
};
