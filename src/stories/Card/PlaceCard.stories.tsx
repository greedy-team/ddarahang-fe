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
      defaultValue: [
        {
          day: 1,
          orderInDay: 1,
          placeName: '광안리 해수욕장',
          position: {
            lat: 15.2356,
            lng: 13.1353,
          },
        },
      ],
    },
  },

  args: {
    setSelectedPanel: fn('PlaceCard Click'),
  },
} satisfies Meta<typeof PlaceCard>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    oneDayCourse: {
      day: 1,
      orderInday: 1,
      placeName: '광안리 해수욕장',
      address: '대한민국 어딘가',
      tag: '관광',
      position: {
        lat: 15.2356,
        lng: 13.1353,
      },
    },
    orderInDay: 1,
  },
};
