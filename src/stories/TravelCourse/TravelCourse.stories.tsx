import type { Meta, StoryObj } from '@storybook/react';
import TravelCourse from '../../components/detail/TravelCourse/TravelCourse';
import { mockTravelCourse } from '../../tests/data/mockData';

const meta = {
  title: 'TravelCourse/TravelCourse',
  component: TravelCourse,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    travelCourse: {
      control: Array,
      description: '여행코스',
      defaultValue: '여행코스 객체 리스트',
    },
    totalTravelDays: {
      control: 'number',
      description: '여행코스',
      defaultValue: '여행코스 객체 리스트',
    },
  },
  args: {},
} satisfies Meta<typeof TravelCourse>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    travelCourse: mockTravelCourse,
    totalTravelDays: 3,
  },
};
