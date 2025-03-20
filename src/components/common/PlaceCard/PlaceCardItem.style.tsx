import styled from 'styled-components';
import { colors, size } from '../../../styles/Theme';

export const PlaceCardContainer = styled.li<{ $isSelected: boolean }>`
  min-width: ${size.SIZE_021};
  width: 100%;
  height: 4.5rem;
  padding-left: ${size.SIZE_010};
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  gap: ${size.SIZE_006};
  border: 1px solid ${colors.GRAY_200};
  border-radius: ${size.SIZE_006};
  box-shadow: ${size.SIZE_003} ${size.SIZE_003} ${size.SIZE_003} rgba(0, 0, 0, 0.1);
  cursor: pointer;
  background-color: ${(props) => (props.$isSelected ? colors.GRAY_200 : 'transparent')};
  font-weight: ${(props) => (props.$isSelected ? 700 : 'normal')};
  font-family: ${(props) => (props.$isSelected ? "'Pretendard-SemiBold', sans-serif" : 'inherit')};

  &:hover {
    background-color: ${colors.GRAY_200};
  }
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
