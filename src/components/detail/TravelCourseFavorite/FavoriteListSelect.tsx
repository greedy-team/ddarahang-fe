import { useEffect, useState } from 'react';
import {
  FavoriteListSelectCloseButton,
  FavoriteListSelectContainer,
  FavoriteListSelectFooter,
  FavoriteListSelectHeader,
  FavoriteListSelectItem,
  FavoriteListSelectItemDesc,
  FavoriteListSelectItemDescContainer,
  FavoriteListSelectItemName,
  FavoriteListSelectListWrapper,
  FavoriteListSelectTitle,
  FavoriteListSelectToast,
} from './FavoriteListSelect.style';
import { size } from '../../../styles/Theme';
import { useAddFavoriteContext } from '../../../hooks/context/useAddFavoriteContext';
import SaveButton from '../../common/Button/RectangleButton/RectangleButton';
import { FavoritePlaceSummaryType } from '../../../types';

const FAVORITE_STORAGE_KEY = 'favoritePlaceIds';

const FavoriteListSelect = () => {
  const [selectedItem, setSelectedItem] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  const { isFavoriteModalOpen, setIsFavoriteModalOpen, selectedPlace, favoritePlaces } = useAddFavoriteContext();
  const [placeCount, setPlaceCount] = useState(0);

  const saveFavoritePlaceId = (placeId: number, placeName: string) => {
    const favoritePlaceStore = localStorage.getItem(FAVORITE_STORAGE_KEY);
    const favoritePlaces: FavoritePlaceSummaryType[] = favoritePlaceStore ? JSON.parse(favoritePlaceStore) : [];

    const isAlreadySaved = favoritePlaces.some((place) => place.placeId === placeId);

    if (!isAlreadySaved) {
      const updated = [...favoritePlaces, { placeId, placeName }];
      localStorage.setItem(FAVORITE_STORAGE_KEY, JSON.stringify(updated));
    }
  };

  const handleSelectedItemClick = () => {
    setSelectedItem(!selectedItem);
  };

  const handleCloseFavoriteModal = () => {
    setIsFavoriteModalOpen(!isFavoriteModalOpen);
  };

  const updateFavoritePlaces = (newFavoritePlaces: FavoritePlaceSummaryType) => {
    const newFavoritePlaceList = [...favoritePlaces, newFavoritePlaces];
    localStorage.setItem(FAVORITE_STORAGE_KEY, JSON.stringify(newFavoritePlaceList));
  };

  const handleSaveFavoriteListPlace = () => {
    if (!selectedItem) {
      setToastMessage('목록을 선택해주세요.');
      setShowToast(true);
      setTimeout(() => setShowToast(false), 2000);
      return;
    }

    if (selectedPlace) {
      saveFavoritePlaceId(selectedPlace?.placeId, selectedPlace?.placeName);
    }

    setToastMessage('저장되었습니다.');
    setShowToast(true);

    const newFavoritePalce = {
      placeId: selectedPlace ? selectedPlace.placeId : 0,
      placeName: selectedPlace ? selectedPlace.placeName : '',
    };

    updateFavoritePlaces(newFavoritePalce);
    setTimeout(() => setShowToast(false), 2000);
  };

  useEffect(() => {
    const favoritePlaceIdStore = localStorage.getItem(FAVORITE_STORAGE_KEY);
    const favoritePlaceIdParsed: string[] = favoritePlaceIdStore ? JSON.parse(favoritePlaceIdStore) : [];
    setPlaceCount(favoritePlaceIdParsed.length);
  }, [isFavoriteModalOpen]);

  return (
    <FavoriteListSelectContainer $isVisible={isFavoriteModalOpen}>
      {showToast && <FavoriteListSelectToast>{toastMessage}</FavoriteListSelectToast>}
      <FavoriteListSelectHeader>
        <FavoriteListSelectTitle>여행 목록 선택하기</FavoriteListSelectTitle>
        <FavoriteListSelectCloseButton onClick={() => handleCloseFavoriteModal()}>×</FavoriteListSelectCloseButton>
      </FavoriteListSelectHeader>
      <FavoriteListSelectListWrapper>
        <FavoriteListSelectItem
          $isSelected={selectedItem}
          onClick={() => handleSelectedItemClick()}
        >
          <FavoriteListSelectItemName>여행</FavoriteListSelectItemName>
          <FavoriteListSelectItemDescContainer>
            <FavoriteListSelectItemDesc $size={size.SIZE_008}>기본 여행 저장 목록입니다.</FavoriteListSelectItemDesc>
            <FavoriteListSelectItemDesc $size={size.SIZE_006}>{placeCount}개의 여행장소</FavoriteListSelectItemDesc>
          </FavoriteListSelectItemDescContainer>
        </FavoriteListSelectItem>
      </FavoriteListSelectListWrapper>
      <FavoriteListSelectFooter>
        <SaveButton
          text='해당 목록에 저장하기'
          onClick={() => handleSaveFavoriteListPlace()}
          variant='save'
        ></SaveButton>
      </FavoriteListSelectFooter>
    </FavoriteListSelectContainer>
  );
};

export default FavoriteListSelect;
