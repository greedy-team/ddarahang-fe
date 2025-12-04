import { createPortal } from 'react-dom';
import { useState } from 'react';
import {
  AddFavoriteCloseButton,
  AddFavoriteContainer,
  AddFavoriteFooter,
  AddFavoriteHeader,
  AddFavoriteItem,
  AddFavoriteItemDesc,
  AddFavoriteItemDescContainer,
  AddFavoriteItemName,
  AddFavoriteListWrapper,
  AddFavoriteTitle,
  AddFavoriteToast,
  FavoriteOverlay,
  StyledTitle,
} from './AddFavoriteModal.style';
import { size } from '../../../styles/Theme';
import { useAddFavoriteContext } from '../../../hooks/context/useAddFavoriteContext';
import SaveButton from '../../common/Button/RectangleButton/RectangleButton';
import { FavoritePlaceSummaryType } from '../../../types';
import { useSaveFavoritePlaces } from '../../../hooks/favorite/useSaveFavoritePlaces';

const AddFavoriteModal = () => {
  const [selectedItem, setSelectedItem] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  const { isFavoriteModalOpen, setIsFavoriteModalOpen, selectedPlace, favoritePlaces } = useAddFavoriteContext();
  const { addFavoritePlace } = useSaveFavoritePlaces();

  const warningToast = () => {
    if (!selectedItem) {
      setToastMessage('목록을 선택해주세요.');
      setShowToast(true);
      setTimeout(() => setShowToast(false), 2000);
      return false;
    }
    return true;
  };

  const successToast = () => {
    setToastMessage('저장되었습니다.');
    setShowToast(true);
    setTimeout(() => setShowToast(false), 2000);
  };

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

  if (typeof document === 'undefined') return null;

  return createPortal(
    <FavoriteOverlay
      $isVisible={isFavoriteModalOpen}
      onClick={() => setIsFavoriteModalOpen(false)}
    >
      <AddFavoriteContainer
        $isVisible={isFavoriteModalOpen}
        onClick={(e) => e.stopPropagation()}
      >
        {showToast && <AddFavoriteToast>{toastMessage}</AddFavoriteToast>}

        <AddFavoriteHeader>
          <AddFavoriteTitle>
            <StyledTitle>{selectedPlace?.placeName}</StyledTitle>
            목록에 저장
          </AddFavoriteTitle>
          <AddFavoriteCloseButton onClick={() => setIsFavoriteModalOpen(false)}>×</AddFavoriteCloseButton>
        </AddFavoriteHeader>

        <AddFavoriteListWrapper>
          <AddFavoriteItem
            $isSelected={selectedItem}
            onClick={() => setSelectedItem(!selectedItem)}
          >
            <AddFavoriteItemName>여행</AddFavoriteItemName>
            <AddFavoriteItemDescContainer>
              <AddFavoriteItemDesc $size={size.SIZE_008}>기본 여행 저장 목록입니다.</AddFavoriteItemDesc>
              <AddFavoriteItemDesc $size={size.SIZE_006}>{favoritePlaces.length}개의 여행장소</AddFavoriteItemDesc>
            </AddFavoriteItemDescContainer>
          </AddFavoriteItem>
        </AddFavoriteListWrapper>

        <AddFavoriteFooter>
          <SaveButton
            text='해당 목록에 저장하기'
            onClick={handleSaveFavoritePlace}
            size='large'
          />
        </AddFavoriteFooter>
      </AddFavoriteContainer>
    </FavoriteOverlay>,
    document.body,
  );
};

export default AddFavoriteModal;
