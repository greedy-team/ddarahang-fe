import type { Meta, StoryObj } from '@storybook/react';
import { action as fn } from '@storybook/addon-actions';
import { colors } from '../../styles/Theme';
import Pagination from '../../components/main/Pagination/Pagination';

const meta = {
  title: 'main/Pagination',
  component: Pagination,
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
    totalPageNumber: {
      control: 'number',
      description: '페이지 버튼의 개수',
      defaultValue: 5,
    },
    currentPageNumber: {
      control: 'number',
      description: '페이지 버튼의 개수',
      defaultValue: 1,
    },
    onPageClick: { action: 'clicked', description: '버튼 클릭 이벤트' },
  },
  args: {
    onPageClick: fn('Button clicked'),
  },
} satisfies Meta<typeof Pagination>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    totalPageNumber: 5,
    currentPageNumber: 1,
    color: colors.WHITE,
    onPageClick: () => {},
  },
};
