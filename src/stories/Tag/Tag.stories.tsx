import type { Meta, StoryObj } from '@storybook/react';

import Tag from '../../components/detail/Tag/Tag';

const meta = {
  title: 'Tag/Tag',
  component: Tag,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    tagName: {
      control: 'text',
      description: '태그 이름',
      defaultValue: '음식',
    },
  },
  args: {},
} satisfies Meta<typeof Tag>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    tagName: '관광',
  },
};
