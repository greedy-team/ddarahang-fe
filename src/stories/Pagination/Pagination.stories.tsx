import type { Meta, StoryObj } from '@storybook/react';
import { action as fn } from '@storybook/addon-actions';
import { colors, size } from '../../styles/Theme';
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
    pageSize: {
      control: 'number',
      description: '페이지 버튼의 개수',
      defaultValue: 5,
    },
    onClick: { action: 'clicked', description: '버튼 클릭 이벤트' },
  },
  args: {
    onClick: fn('Button clicked'),
  },
} satisfies Meta<typeof Pagination>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    pageSize: 5,
    size: size.SIZE_008,
    color: colors.WHITE,
    onClick: () => {},
  },
};
