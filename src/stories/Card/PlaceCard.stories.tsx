import { Meta, StoryObj } from '@storybook/react';
import { action as fn } from '@storybook/addon-actions';

import PlaceCard from '../../components/common/PlaceCard/PlaceCardItem';

const meta = {
  title: 'Card/PlaceCard',
  component: PlaceCard,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],

  argTypes: {
    oneDayCourse: {
      control: 'object',
      description: '여행 코스 하루 일정 상세 정보',
      defaultValue: {
        orderInDay: 1,
        placeName: '광안리 해수욕장',
        placeAddress: ' ',
      },
    },
  },

  args: {
    onClick: fn('PlaceCard Click'),
  },
} satisfies Meta<typeof PlaceCard>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    travelCources: {
      orderInDay: 1,
      placeName: '광안리 해수욕장',
      placeAddress: ' ',
    },
  },
};
