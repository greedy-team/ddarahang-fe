import type { Meta, StoryObj } from '@storybook/react';
import MaintenancePage from '../../pages/Maintenance/MaintenancePage';

const meta = {
  title: 'Pages/Maintenance',
  component: MaintenancePage,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof MaintenancePage>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
