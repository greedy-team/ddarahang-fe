import type { Meta, StoryObj } from '@storybook/react';

import Video from '../../components/detail/Video/VideoSection';

const meta = {
  title: 'Video/Video',
  component: Video,
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
    creator: {
      control: 'text',
      description: '유튜브 크리에이터명',
      defaultValue: '신지',
    },
    title: {
      control: 'text',
      description: '유튜브 영상 제목',
      defaultValue: '신지의 부산 맛집 탐방 선정 10',
    },
    viewCount: {
      control: 'number',
      description: '유튜브 영상 조회수',
      defaultValue: 100000,
    },
    uploadDate: {
      control: 'text',
      description: '유튜브 업로드 날짜',
      defaultValue: '2024-08-02',
    },
  },
} satisfies Meta<typeof Video>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    videoId: 'yT7y8xyNHHs',
    country: '대한민국',
    region: '부산',
    creator: '림리니',
    title:
      '[Vlog] 찐 부산 & 대구 맛집 다 있는 브이로그 | 출국 전 마지막 부산 여행 😭 | ana luisa 마직막 겨울 홀리데이 세일 🩵 | 다음 주',
    viewCount: 18334,
    uploadDate: '2024.05.12',
  },
};
