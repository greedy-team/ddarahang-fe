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
  font-size: 15px;
  background: ${(props) => (props.isSelected ? colors.RED : colors.PRIMARY)};
  border-radius: 100px;
  border: 2px solid ${colors.WHITE};
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: ${(props) => (props.isSelected ? 10 : 2)};
  transition: 0.3s all;

  &:hover {
    background-color: ${(props) => (props.isSelected ? colors.LIGHT_RED : colors.LIGHT_BLUE)};
  }
`;
