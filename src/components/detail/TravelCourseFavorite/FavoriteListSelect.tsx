import React from 'react';
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

const FavoriteListSelect: React.FC<TravelListSelectorProps> = ({ onClose, onSave }) => {
  return (
    <Container>
      <Header>
        <Title>여행 목록 선택하기</Title>
        <CloseButton onClick={onClose}>×</CloseButton>
      </Header>
      <ListWrapper>
        <TravelItem>
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
