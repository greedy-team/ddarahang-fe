import { useState } from 'react';
import {
  Container,
  Header,
  Title,
  CloseButton,
  ListWrapper,
  TravelItem,
  TravelName,
  TravelDesc,
  Footer,
  SaveButton,
  TravelDescContainer,
  Toast,
} from './FavoriteListSelect.style';
import { size } from '../../../styles/Theme';
import { useSelectFavoriteListContext } from '../../../hooks/context/useSelectFavotieListContext';

interface TravelListSelectorProps {
  placeCount: number;
}

const FAVORITE_STORAGE_KEY = 'favoritePlaceIds';

const FavoriteListSelect = ({ placeCount }: TravelListSelectorProps) => {
  const [selectedItem, setSelectedItem] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const { isFavoriteListSelectOpen, setIsFavoriteListSelectOpen } = useSelectFavoriteListContext();

  const saveFavoritePlaceId = (id: string) => {
    const stored = localStorage.getItem(FAVORITE_STORAGE_KEY);
    const parsed: string[] = stored ? JSON.parse(stored) : [];

    if (!parsed.includes(id)) {
      const updated = [...parsed, id];
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
      <Container $isVisible={isFavoriteListSelectOpen}>
        {showToast && <Toast>저장되었습니다!</Toast>}
        <Header>
          <Title>여행 목록 선택하기</Title>
          <CloseButton onClick={() => handleCloseFavoriteListSelect()}>×</CloseButton>
        </Header>
        <ListWrapper>
          <TravelItem
            $isSelected={selectedItem}
            onClick={() => handleSelectedItemClick()}
          >
            <TravelName>여행</TravelName>
            <TravelDescContainer>
              <TravelDesc $size={size.SIZE_008}>기본 여행 저장 목록입니다.</TravelDesc>
              <TravelDesc $size={size.SIZE_006}>{placeCount}개의 여행장소</TravelDesc>
            </TravelDescContainer>
          </TravelItem>
        </ListWrapper>
        <Footer>
          <SaveButton onClick={() => handleSaveFavoriteListPlace()}>해당 목록에 저장하기</SaveButton>
        </Footer>
      </Container>
    </>
  );
};

export default FavoriteListSelect;
