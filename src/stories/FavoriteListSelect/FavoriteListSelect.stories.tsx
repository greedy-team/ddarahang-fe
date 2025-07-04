import { Meta, StoryObj } from '@storybook/react';
import AddFavorite from '../../components/detail/AddFavoriteModal/AddFavoriteModal';
import { AddFavoriteContext } from '../../store/AddFavoriteContext';
import { useState } from 'react';
import { FavoritePlaceSummaryType } from '../../types';

const meta: Meta<typeof AddFavorite> = {
  title: 'Components/AddFavorite',
  component: AddFavorite,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  decorators: [
    (Story) => {
      const [isOpen, setIsOpen] = useState(true);
      const [favoritePlaces, setFavoritePlaces] = useState<FavoritePlaceSummaryType[]>([]);

      return (
        <AddFavoriteContext.Provider
          value={{
            isFavoriteModalOpen: isOpen,
            setIsFavoriteModalOpen: setIsOpen,
            selectedPlace: null,
            setSelectedPlace: () => void {},
            favoritePlaces,
            setFavoritePlaces,
          }}
        >
          <div style={{ position: 'relative', width: '100vw', height: '100vh', overflow: 'hidden' }}>
            <Story />
          </div>
        </AddFavoriteContext.Provider>
      );
    },
  ],
} satisfies Meta<typeof AddFavorite>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
