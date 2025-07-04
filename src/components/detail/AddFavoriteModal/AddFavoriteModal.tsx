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
      return;
    }
  };

  const successToast = () => {
    setToastMessage('저장되었습니다.');
    setShowToast(true);
    setTimeout(() => setShowToast(false), 2000);
  };

  const handleSaveFavoritePlace = () => {
    warningToast();

    if (selectedPlace) {
      const favoritePlace: FavoritePlaceSummaryType = {
        placeId: selectedPlace.placeId,
        placeName: selectedPlace.placeName,
      };

      addFavoritePlace(favoritePlace);
      successToast();
      setIsFavoriteModalOpen(false);
    }
  };

  return (
    <AddFavoriteContainer $isVisible={isFavoriteModalOpen}>
      {showToast && <AddFavoriteToast>{toastMessage}</AddFavoriteToast>}
      <AddFavoriteHeader>
        <AddFavoriteTitle>{selectedPlace?.placeName} 목록에 저장</AddFavoriteTitle>
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
          onClick={() => handleSaveFavoritePlace()}
          size='large'
        />
      </AddFavoriteFooter>
    </AddFavoriteContainer>
  );
};

export default AddFavoriteModal;
