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
  FavoriteListSelectSaveButton,
  FavoriteListSelectToast,
} from './FavoriteListSelect.style';
import { size } from '../../../styles/Theme';
import { useSelectFavoriteListContext } from '../../../hooks/context/useSelectFavotieListContext';

const FAVORITE_STORAGE_KEY = 'favoritePlaceIds';

const FavoriteListSelect = () => {
  const [selectedItem, setSelectedItem] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const { isFavoriteListSelectOpen, setIsFavoriteListSelectOpen } = useSelectFavoriteListContext();

  const saveFavoritePlaceId = (placeId: string) => {
    const stored = localStorage.getItem(FAVORITE_STORAGE_KEY);
    const parsed: string[] = stored ? JSON.parse(stored) : [];

    if (!parsed.includes(placeId)) {
      const updated = [...parsed, placeId];
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
    saveFavoritePlaceId('1');
    setShowToast(true);

    setTimeout(() => setShowToast(false), 2000);
  };

  return (
    <>
      <FavoriteListSelectContainer $isVisible={isFavoriteListSelectOpen}>
        {showToast && <FavoriteListSelectToast>저장되었습니다!</FavoriteListSelectToast>}
        <FavoriteListSelectHeader>
          <FavoriteListSelectHeader>여행 목록 선택하기</FavoriteListSelectHeader>
          <FavoriteListSelectCloseButton onClick={() => handleCloseFavoriteListSelect()}>
            ×
          </FavoriteListSelectCloseButton>
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
          <FavoriteListSelectSaveButton onClick={() => handleSaveFavoriteListPlace()}>
            해당 목록에 저장하기
          </FavoriteListSelectSaveButton>
        </FavoriteListSelectFooter>
      </FavoriteListSelectContainer>
    </>
  );
};

export default FavoriteListSelect;
