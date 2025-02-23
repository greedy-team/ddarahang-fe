import type { Meta, StoryObj } from '@storybook/react';

import TravelMapMarker from '../../components/common/TravelMapMarker/TravelMapMarker';

const meta = {
  title: 'Marker/TravelMapMarker',
  component: TravelMapMarker,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    number: {
      control: 'number',
      description: '여행 코스 순서',
      defaultValue: 1,
    },
  },
} satisfies Meta<typeof TravelMapMarker>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    number: 1,
  },
};
