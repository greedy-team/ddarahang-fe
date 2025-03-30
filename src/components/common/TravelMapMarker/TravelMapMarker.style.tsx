import styled from 'styled-components';
import { colors, size } from '../../../styles/Theme';

export const MarkerWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Circle = styled.div<{ isSelected: boolean }>`
  color: ${colors.WHITE};
  width: ${size.SIZE_013};
  height: ${size.SIZE_013};
  font-size: 14px;
  background: ${(props) => (props.isSelected ? colors.RED : colors.PRIMARY)};
  border-radius: 100px;
  border: 3px solid ${colors.WHITE};
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: ${(props) => (props.isSelected ? 10 : 2)};
  transition: 0.3s all;

  &:hover {
    background-color: ${(props) => (props.isSelected ? colors.LIGHT_RED : colors.LIGHT_BLUE)};
  }
`;

export const PlaceCard = styled.div`
  background-color: rgba(255, 255, 255, 0.8);
  color: ${colors.BLACK};
  box-shadow:
    inset 0 0 0 2px ${colors.GRAY_200},
    ${size.SIZE_002} ${size.SIZE_002} ${size.SIZE_002} rgba(55, 55, 55, 0.2);
  width: fit-content;
  padding: 10px;
  border-radius: 20px;
  height: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
`;

export const StyledMarker = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 0px;
`;
