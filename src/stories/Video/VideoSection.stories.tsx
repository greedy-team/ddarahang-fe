import type { Meta, StoryObj } from '@storybook/react';

import VideoSection from '../../components/detail/Video/VideoSection';
import { TravelCourseDetail } from '../../types';

const meta = {
  title: 'Video/VideoSection',
  component: VideoSection,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],

  argTypes: {
    videoId: {
      control: 'text',
      description: '비디오 고유 ID',
      defaultValue: 'LTFAaPdvzTk',
    },
    country: {
      control: 'text',
      description: '나라 이름',
      defaultValue: '대한민국',
    },
    region: {
      control: 'text',
      description: '지역 이름',
      defaultValue: '부산',
    },
    travelCourseDetail: {
      control: 'text',
      description: '유튜브 크리에이터명',
      defaultValue: '신지',
    },
  },
} satisfies Meta<typeof VideoSection>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    videoId: 'yT7y8xyNHHs',
    country: '대한민국',
    region: '부산',
    travelCourseDetail: {
      creator: '림리니',
      title:
        '[Vlog] 찐 부산 & 대구 맛집 다 있는 브이로그 | 출국 전 마지막 부산 여행 😭 | ana luisa 마직막 겨울 홀리데이 세일 🩵 | 다음 주',
      viewCount: 18334,
      uploadDate: '2024.05.12',
    } as TravelCourseDetail | null,
  },
};
