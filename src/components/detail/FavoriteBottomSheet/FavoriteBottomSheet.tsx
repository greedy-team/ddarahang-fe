import { useAddFavoriteContext } from '../../../hooks/context/useAddFavoriteContext';
import Dialog from '../../common/Dialog/Dialog';
import { useState } from 'react';
import RectangleButton from '../../common/Button/RectangleButton/RectangleButton';
import { FavoriteListItem, FavoriteTitle, FavoriteToast } from './FavoriteBottomSheet.style';
import { useSaveFavoritePlaces } from '../../../hooks/favorite/useSaveFavoritePlaces';
import { FavoritePlaceSummaryType } from '../../../types';
import useToast from '../../../hooks/favorite/useToast';

const FavoriteBottomSheet = () => {
  const [selectedList, setSelectedList] = useState(false);

  const { isFavoriteModalOpen, setIsFavoriteModalOpen, selectedPlace, favoritePlaces } = useAddFavoriteContext();
  const { addFavoritePlace } = useSaveFavoritePlaces();
  const { showToast, toastMessage, successToast, warningToast } = useToast(selectedList);

  const handleSaveFavoritePlace = () => {
    if (!warningToast()) return;

    if (selectedPlace) {
      const favoritePlace: FavoritePlaceSummaryType = {
        placeId: selectedPlace.placeId,
        placeName: selectedPlace.placeName,
      };
      addFavoritePlace(favoritePlace);
      successToast();
    }

    setTimeout(() => {
      setIsFavoriteModalOpen(false);
    }, 500);
  };

  return (
    <Dialog
      isOpen={isFavoriteModalOpen}
      onClose={() => setIsFavoriteModalOpen(false)}
    >
      <Dialog.Title>
        <FavoriteTitle>{selectedPlace?.placeName ?? '기본'}</FavoriteTitle>목록에 저장
      </Dialog.Title>

      {showToast && <FavoriteToast>{toastMessage}</FavoriteToast>}
      <Dialog.Body>
        <FavoriteListItem
          onClick={() => setSelectedList(!selectedList)}
          $isSelected={selectedList}
        >
          <h4>기본 목록</h4>
          <p>{favoritePlaces.length}개의 여행장소</p>
        </FavoriteListItem>
      </Dialog.Body>

      <Dialog.Actions>
        {selectedList && (
          <RectangleButton
            text='해당 목록에 저장하기'
            onClick={handleSaveFavoritePlace}
            size='large'
          />
        )}
      </Dialog.Actions>
    </Dialog>
  );
};

export default FavoriteBottomSheet;
