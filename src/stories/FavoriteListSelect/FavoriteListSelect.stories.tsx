import { Meta, StoryObj } from '@storybook/react';
import FavoriteListSelect from '../../components/detail/TravelCourseFavorite/FavoriteListSelect';
import { SelectFavoriteListContext } from '../../store/SelectFavoriteListContext';
import { useState } from 'react';

const meta: Meta<typeof FavoriteListSelect> = {
  title: 'Components/FavoriteListSelect',
  component: FavoriteListSelect,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  decorators: [
    (Story) => {
      const [isOpen, setIsOpen] = useState(true);
      const [favoritePlaces, setFavoritePlaces] = useState<any[]>([]);
      return (
        <SelectFavoriteListContext.Provider
          value={{
            isFavoriteListSelectOpen: isOpen,
            setIsFavoriteListSelectOpen: setIsOpen,
            selectedPlace: null,
            setSelectedPlace: () => void {},
            favoritePlaces,
            setFavoritePlaces,
          }}
        >
          <div style={{ position: 'relative', width: '100vw', height: '100vh', overflow: 'hidden' }}>
            <Story />
          </div>
        </SelectFavoriteListContext.Provider>
      );
    },
  ],
} satisfies Meta<typeof FavoriteListSelect>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
