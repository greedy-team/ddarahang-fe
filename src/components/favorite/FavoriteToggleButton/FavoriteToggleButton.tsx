import React from 'react';
import FavoriteIcon from '/icon/favorite.svg';
import FavoriteFillIcon from '/icon/fill-heart.svg';
import { OneDayCourseType } from '../../../types';
import { useAddFavoriteContext } from '../../../hooks/context/useAddFavoriteContext';
import { FavoriteButton } from './FavoriteToggleButton.style';
import { useSaveFavoritePlaces } from '../../../hooks/favorite/useSaveFavoritePlaces';

interface FavoriteToggleButtonProps {
  placeItem: OneDayCourseType;
}

const FavoriteToggleButton = ({ placeItem }: FavoriteToggleButtonProps) => {
  const { setIsFavoriteModalOpen, isFavoriteModalOpen, setSelectedPlace, favoritePlaces } = useAddFavoriteContext();
  const { removeFavoritePlace } = useSaveFavoritePlaces();

  const isFavoritedPlace = favoritePlaces.some((place) => place.placeId === placeItem.placeId);

  const handleToggleFavorite = (event: React.MouseEvent) => {
    event.stopPropagation();

    if (isFavoritedPlace) {
      removeFavoritePlace(placeItem.placeName);

      if (isFavoriteModalOpen) {
        setIsFavoriteModalOpen(false);
      }
    } else {
      setSelectedPlace(placeItem);
      setIsFavoriteModalOpen(true);
    }
  };

  return (
    <FavoriteButton
      type='button'
      title={isFavoritedPlace ? '찜 해제' : '찜하기'}
      aria-label={isFavoritedPlace ? '찜 해제 버튼' : '찜하기 버튼'}
      onClick={handleToggleFavorite}
    >
      {isFavoritedPlace ? (
        <img
          src={FavoriteFillIcon}
          alt='찜 채우기 아이콘'
          width={18}
          height={18}
        />
      ) : (
        <img
          src={FavoriteIcon}
          alt='찜 아이콘'
          width={20}
          height={20}
        />
      )}
    </FavoriteButton>
  );
};

export default FavoriteToggleButton;
