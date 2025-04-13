import React, { useState } from 'react';
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
} from './FavoriteListSelect.style';
import { size } from '../../../styles/Theme';

interface TravelListSelectorProps {
  onClose: () => void;
  onSave: () => void;
}

const FavoriteListSelect = ({ onClose, onSave }: TravelListSelectorProps) => {
  const [selectedItem, setSelectedItem] = useState(false);

  const handleSelectedItemClick = () => {
    setSelectedItem(!selectedItem);
  };

  return (
    <Container>
      <Header>
        <Title>여행 목록 선택하기</Title>
        <CloseButton onClick={onClose}>×</CloseButton>
      </Header>
      <ListWrapper>
        <TravelItem
          $isSelected={selectedItem}
          onClick={() => handleSelectedItemClick()}
        >
          <TravelName>여행</TravelName>
          <TravelDescContainer>
            <TravelDesc $size={size.SIZE_008}>기본 여행 저장 목록입니다.</TravelDesc>
            <TravelDesc $size={size.SIZE_006}>5개의 여행장소</TravelDesc>
          </TravelDescContainer>
        </TravelItem>
      </ListWrapper>
      <Footer>
        <SaveButton onClick={onSave}>해당 목록에 저장하기</SaveButton>
      </Footer>
    </Container>
  );
};

export default FavoriteListSelect;
