import type { Meta, StoryObj } from '@storybook/react';

import Header from '../../components/main/Header/Header';

const meta = {
  title: 'Header/Header',
  component: Header,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],

  argTypes: {
    setCurrentPageNumber: {
      action: 'setCurrentPageNumber',
      description: '페이지 번호를 설정하는 함수',
    },
  },
} satisfies Meta<typeof Header>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    onSubmitOption: () => {},
    setCurrentPageNumber: () => {},
  },
};
