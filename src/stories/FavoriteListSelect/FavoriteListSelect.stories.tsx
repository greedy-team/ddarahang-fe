import { Meta, StoryObj } from '@storybook/react';
import FavoriteListSelect from '../../components/detail/TravelCourseFavorite/FavoriteListSelect';

const meta: Meta<typeof FavoriteListSelect> = {
  title: 'Components/TravelListSelector',
  component: FavoriteListSelect,
  parameters: {
    layout: 'centered',
  },
};

export default meta;

type Story = StoryObj<typeof FavoriteListSelect>;

export const Default: Story = {
  render: () => (
    <FavoriteListSelect
      onClose={() => console.log('닫기 버튼 클릭')}
      onSave={() => console.log('저장 버튼 클릭')}
    />
  ),
};
