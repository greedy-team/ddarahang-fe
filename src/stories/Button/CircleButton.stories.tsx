import type { Meta, StoryObj } from '@storybook/react';
import { action as fn } from '@storybook/addon-actions';

import CircleButton from '../../components/common/Button/CircleButton/CircleButton';

const meta = {
  title: 'Button/CircleButton',
  component: CircleButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],

  argTypes: {
    iconAlt: {
      control: 'text',
      description: '버튼의 alt 속성',
      defaultValue: '',
    },
    iconPath: {
      control: 'text',
      description: '버튼의 경로',
      defaultValue: '',
    },
    text: {
      control: 'text',
      description: '버튼의 텍스트',
      defaultValue: '',
    },
    onClick: { action: 'clicked', description: '버튼 클릭 이벤트' },
  },
  args: {
    onClick: fn('Button clicked'),
  },
} satisfies Meta<typeof CircleButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    iconAlt: '검색 아이콘',
    iconPath: './image/search.svg',
    onClick: () => {},
  },
};
