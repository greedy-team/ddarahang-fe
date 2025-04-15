import styled from 'styled-components';
import { colors, size } from '../../../styles/Theme';

export const FavoriteButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background: transparent;
  border: none;
  cursor: pointer;
  pointer-events: auto;
`;

export const PlaceCardContainer = styled.li<{ $isSelected: boolean }>`
  min-width: ${size.SIZE_021};
  width: 100%;
  height: 4.5rem;
  padding: ${size.SIZE_006} ${size.SIZE_010};
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-direction: column;
  border: 1px solid ${colors.GRAY_200};
  border-radius: ${size.SIZE_006};
  box-shadow: ${size.SIZE_003} ${size.SIZE_003} ${size.SIZE_003} rgba(0, 0, 0, 0.1);
  background-color: ${(props) => (props.$isSelected ? colors.GRAY_200 : 'transparent')};

  &:hover {
    background-color: ${colors.GRAY_200};
  }

  ${FavoriteButton}:hover {
    transform: scale(1.1);
    transition: transform 0.2s ease-in-out;
  }
`;

export const PlaceCardHeader = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: ${size.SIZE_006};
`;

export const PlaceName = styled.span<{ $isSelected: boolean }>`
  max-width: 90%;
  font-weight: ${(props) => (props.$isSelected ? 600 : 'normal')};
  font-family: ${(props) => (props.$isSelected ? "'Pretendard-SemiBold', sans-serif" : 'inherit')};
`;

export const PlaceCardWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 80%;
  gap: ${size.SIZE_010};
`;

export const PlaceCircleStep = styled.div`
  width: ${size.SIZE_011};
  height: ${size.SIZE_011};
  font-size: ${size.SIZE_007};
  padding: ${size.SIZE_006};
  color: ${colors.WHITE};
  background-color: ${colors.LIGHT_BLUE};
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: ${size.SIZE_019};
`;
