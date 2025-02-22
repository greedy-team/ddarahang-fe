import { Meta, StoryObj } from '@storybook/react';
import { action as fn } from '@storybook/addon-actions';

import PlaceCardList from '../../components/common/PlaceCard/PlaceCardList/PlaceCardList';

const meta = {
  title: 'List/PlaceCardList',
  component: PlaceCardList,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],

  argTypes: {},

  args: {
    onClick: fn('PlaceCard Click'),
  },
} satisfies Meta<typeof PlaceCardList>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
