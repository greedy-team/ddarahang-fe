import type { Meta, StoryObj } from '@storybook/react';

import TravelCourse from '../../components/detail/TravelCourse/TravelCourse';

const meta = {
  title: 'TravelCourse/TravelCourse',
  component: TravelCourse,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof TravelCourse>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
