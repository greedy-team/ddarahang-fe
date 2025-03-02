import type { Meta, StoryObj } from '@storybook/react';

import VideoSection from '../../components/detail/Video/VideoSection';
import { TravelCourse } from '../../types';

const meta = {
  title: 'Video/VideoSection',
  component: VideoSection,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],

  argTypes: {
    videoUrl: {
      control: 'text',
      description: '비디오 고유 url',
      defaultValue: 'LTFAaPdvzTk',
    },
    travelCourse: {
      control: 'object',
      description: '나라 이름',
      defaultValue: '대한민국',
    },
  },
} satisfies Meta<typeof VideoSection>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    videoUrl: 'https://www.youtube.com/watch?v=LTFAaPdvzTk',
    travelCourse: {
      videoUrl: 'https://www.youtube.com/watch?v=LTFAaPdvzTk',
      travelDays: 3,
      creator: '림리니',
      title:
        '[Vlog] 찐 부산 & 대구 맛집 다 있는 브이로그 | 출국 전 마지막 부산 여행 😭 | ana luisa 마직막 겨울 홀리데이 세일 🩵 | 다음 주',
      viewCount: 18334,
      uploadDate: '2024.05.12',
      details: [
        {
          day: 1,
          orderInDay: 1,
          placeName: '부산역',
          placeAddress: '부산광역시 초량동',
          lat: 35.120415,
          lng: 129.0378768,
        },
        {
          day: 1,
          orderInDay: 2,
          placeName: '이가네떡볶이',
          placeAddress: '부산광역시 중구 부평1길 48',
          lat: 35.1015333,
          lng: 129.0260173,
        },
      ],
    } as TravelCourse | null,
  },
};
