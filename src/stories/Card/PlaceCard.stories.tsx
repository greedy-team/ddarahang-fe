import { Meta, StoryObj } from '@storybook/react';

import PlaceCard from '../../components/common/PlaceCard/PlaceCardItem';
import { TagType } from '../../types';

const meta = {
  title: 'Card/PlaceCard',
  component: PlaceCard,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],

  argTypes: {
    placeItem: {
      control: 'object',
      description: '여행 코스 하루 일정 상세 정보',
      defaultValue: [
        {
          day: 1,
          orderInDay: 1,
          placeName: '광안리 해수욕장',
          tag: '관광' as TagType,
          position: {
            lat: 15.2356,
            lng: 13.1353,
          },
        },
      ],
    },
    orderInList: {
      control: 'number',
      description: '장소 순서',
      defaultValue: 1,
    },
  },
} satisfies Meta<typeof PlaceCard>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placeItem: {
      day: 1,
      orderInday: 1,
      placeName: '광안리 해수욕장',
      address: '대한민국 어딘가',
      placeId: 1,
      tag: '관광',
      position: {
        lat: 15.2356,
        lng: 13.1353,
      },
    },
    orderInList: 1,
  },
};
