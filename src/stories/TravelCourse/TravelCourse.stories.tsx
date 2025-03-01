import type { Meta, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import TravelCourse from '../../components/detail/TravelCourse/TravelCourse';
import { OneDayCourseType } from '../../types';

const meta = {
  title: 'TravelCourse/TravelCourse',
  component: TravelCourse,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    oneDayCourse: {
      control: 'object',
      description: '여행코스',
      defaultValue: '여행코스 객체 리스트',
    },
    travelDays: {
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
    onClickTab: action('탭을 클릭'),
    onClickPanel: action('패널 클릭'),
  },
} satisfies Meta<typeof TravelCourse>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    oneDayCourse: {} as OneDayCourseType[],
    travelDays: 3,
    selectedTab: 1,
  },
};
