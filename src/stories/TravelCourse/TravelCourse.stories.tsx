import type { Meta, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import TravelCourse from '../../components/detail/TravelCourse/TravelCourse';

const meta = {
  title: 'TravelCourse/TravelCourse',
  component: TravelCourse,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    oneDayCourses: {
      control: Array,
      description: '여행코스',
      defaultValue: '여행코스 객체 리스트',
    },
    totalTravelDays: {
      control: 'number',
      description: '여행코스',
      defaultValue: '여행코스 객체 리스트',
    },
    selectedTab: {
      control: 'object',
      description: '여행코스',
      defaultValue: '여행코스 객체 리스트',
    },
  },
  args: {
    setSelectedTab: action('탭을 클릭'),
  },
} satisfies Meta<typeof TravelCourse>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    oneDayCourses: [
      {
        day: 1,
        orderInday: 1,
        placeName: '서울 타워',
        address: '대한민국 어딘가',
        tag: '관광',
        position: { lat: 37.5512, lng: 126.9882 },
      },
      {
        day: 1,
        orderInday: 2,
        placeName: '경복궁',
        address: '대한민국 어딘가',
        tag: '관광',
        position: { lat: 37.5796, lng: 126.977 },
      },
      {
        day: 2,
        orderInday: 1,
        placeName: '해운대',
        address: '대한민국 어딘가',
        tag: '관광',
        position: { lat: 35.1587, lng: 129.1603 },
      },
    ],
    totalTravelDays: 3,
    selectedTab: 1,
  },
};
