import type { Meta, StoryObj } from '@storybook/react';
import { colors } from '../../styles/Theme';
import MaintenancePage from '../../pages/Maintenance/MaintenancePage';

const meta = {
  title: 'Pages/Maintenance',
  component: MaintenancePage,
  parameters: {
    layout: 'fullscreen',
    args: {},
  },
} satisfies Meta<typeof MaintenancePage>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    color: colors.PRIMARY,
    text: '돌아가기',
    onClick: () => {},
  },
};
