import type { Meta, StoryObj } from '@storybook/react';
import { action as fn } from '@storybook/addon-actions';
import { colors, size } from '../../styles/Theme';
import PageButton from '../../components/common/Button/PageButton/PageButton';

const meta = {
  title: 'Button/PageButton',
  component: PageButton,
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
    text: {
      control: 'text',
      description: '페이지 버튼의 텍스트',
      defaultValue: '버튼입니다.',
    },
    isActive: {
      control: 'boolean',
      description: '페이지 버튼 활성화',
    },
    onClick: { action: 'clicked', description: '버튼 클릭 이벤트' },
  },
  args: {
    onClick: fn('Button clicked'),
  },
} satisfies Meta<typeof PageButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    text: '1',
    color: colors.WHITE,
    isActive: false,
    onClick: () => {},
  },
};
