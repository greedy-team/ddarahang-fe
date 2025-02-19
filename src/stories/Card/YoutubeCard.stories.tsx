import { Meta, StoryObj } from '@storybook/react';
import { action as fn } from '@storybook/addon-actions';

import YoutubeCard from '../../components/main/YoutubeCard/YoutubeCard';

const meta = {
  title: 'Card/YoutubeCard',
  component: YoutubeCard,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],

  argTypes: {
    thumbnailUrl: {
      control: 'text',
      description: '썸네일 이미지 URL',
      defaultValue: '',
    },
    title: {
      control: 'text',
      description: '영상 제목',
      defaultValue: '부산 먹방 여행 3편 : 이 정도면 부산을 다 먹고 간다고 할 수 있쥐😎 해운대 요트...',
    },
    channelName: {
      control: 'text',
      description: '채널 이름',
      defaultValue: '핫도시락HDSR',
    },
    uploadDate: {
      control: 'text',
      description: '업로드 날짜',
      defaultValue: '2024-07-31',
    },
    viewCount: {
      control: 'text',
      description: '조회수',
      defaultValue: '1.6만회',
    },
    onClick: {
      action: 'clicked',
      description: '카드 클릭 이벤트',
    },
  },

  args: {
    onClick: fn('YoutubeCard clicked'), // 클릭 이벤트 로깅
  },
} satisfies Meta<typeof YoutubeCard>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    thumbnailUrl: 'https://img.youtube.com/vi/NbEL5uoJxUE/maxresdefault.jpg',
    title:
      '[vlog] 나 혼자 오사카여행🍥 ‘인생맛집’의 향연 | 3박4일 코스와 경비📝 (난바역 가성비 호텔, 난바&우메다 맛집과 쇼핑, 편의점 추천간식, 크리스마스 마켓・・)',
    channelName: 'Daily Joy조이',
    uploadDate: '2023-12-21',
    viewCount: '57만회',
  },
};
