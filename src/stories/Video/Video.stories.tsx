import type { Meta, StoryObj } from '@storybook/react';

import Video from '../../components/detail/Video/Video';

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
  },
} satisfies Meta<typeof Video>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    videoId: 'yT7y8xyNHHs',
  },
};
