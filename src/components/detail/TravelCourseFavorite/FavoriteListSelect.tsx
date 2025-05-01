import { useState } from 'react';
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
  // FavoriteListSelectSaveButton,
  FavoriteListSelectTitle,
  FavoriteListSelectToast,
} from './FavoriteListSelect.style';
import { size } from '../../../styles/Theme';
import { useSelectFavoriteListContext } from '../../../hooks/context/useSelectFavotieListContext';
import FavoriteListSelectSaveButton from '../../common/Button/RectangleButton/RectangleButton';

const FAVORITE_STORAGE_KEY = 'favoritePlaceIds';

const FavoriteListSelect = () => {
  const [selectedItem, setSelectedItem] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  const { isFavoriteListSelectOpen, setIsFavoriteListSelectOpen } = useSelectFavoriteListContext();

  const saveFavoritePlaceId = (placeId: string) => {
    const favoritePlaceIdStore = localStorage.getItem(FAVORITE_STORAGE_KEY);
    const favoritePlaceIdParsed: string[] = favoritePlaceIdStore ? JSON.parse(favoritePlaceIdStore) : [];

    if (!favoritePlaceIdParsed.includes(placeId)) {
      const updated = [...favoritePlaceIdParsed, placeId];
      localStorage.setItem(FAVORITE_STORAGE_KEY, JSON.stringify(updated));
    }
  };

  const handleSelectedItemClick = () => {
    setSelectedItem(!selectedItem);
  };

  const handleCloseFavoriteListSelect = () => {
    setIsFavoriteListSelectOpen(!isFavoriteListSelectOpen);
  };

  const handleSaveFavoriteListPlace = () => {
    if (!selectedItem) {
      setToastMessage('목록을 선택해주세요.');
      setShowToast(true);
      setTimeout(() => setShowToast(false), 2000);
      return;
    }

    saveFavoritePlaceId('1');
    setToastMessage('저장되었습니다.');
    setShowToast(true);

    setTimeout(() => setShowToast(false), 2000);
  };

  return (
    <FavoriteListSelectContainer $isVisible={isFavoriteListSelectOpen}>
      {showToast && <FavoriteListSelectToast>{toastMessage}</FavoriteListSelectToast>}
      <FavoriteListSelectHeader>
        <FavoriteListSelectTitle>여행 목록 선택하기</FavoriteListSelectTitle>
        <FavoriteListSelectCloseButton onClick={() => handleCloseFavoriteListSelect()}>×</FavoriteListSelectCloseButton>
      </FavoriteListSelectHeader>
      <FavoriteListSelectListWrapper>
        <FavoriteListSelectItem
          $isSelected={selectedItem}
          onClick={() => handleSelectedItemClick()}
        >
          <FavoriteListSelectItemName>여행</FavoriteListSelectItemName>
          <FavoriteListSelectItemDescContainer>
            <FavoriteListSelectItemDesc $size={size.SIZE_008}>기본 여행 저장 목록입니다.</FavoriteListSelectItemDesc>
            <FavoriteListSelectItemDesc $size={size.SIZE_006}>0개의 여행장소</FavoriteListSelectItemDesc>
          </FavoriteListSelectItemDescContainer>
        </FavoriteListSelectItem>
      </FavoriteListSelectListWrapper>
      <FavoriteListSelectFooter>
        <FavoriteListSelectSaveButton
          text='해당 목록에 저장하기'
          onClick={() => handleSaveFavoriteListPlace()}
          variant='save'
        ></FavoriteListSelectSaveButton>
      </FavoriteListSelectFooter>
    </FavoriteListSelectContainer>
  );
};

export default FavoriteListSelect;
