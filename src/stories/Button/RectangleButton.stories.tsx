import type { Meta, StoryObj } from '@storybook/react';
import { action as fn } from '@storybook/addon-actions';
import { colors } from '../../styles/Theme';
import RectangleButton from '../../components/common/Button/RectangleButton/RectangleButton';

const meta = {
  title: 'Button/RectangleButton',
  component: RectangleButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],

  argTypes: {
    color: {
      control: 'color',
      description: '네모 버튼의 색상',
      defaultValue: colors.PRIMARY,
    },
    text: {
      control: 'text',
      description: '네모 버튼의 텍스트',
      defaultValue: '버튼입니다.',
    },
    onClick: { action: 'clicked', description: '버튼 클릭 이벤트' },
  },
  args: {
    onClick: fn('Button clicked'),
  },
} satisfies Meta<typeof RectangleButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    color: colors.PRIMARY,
    text: '돌아가기',
    onClick: () => {},
  },
};
