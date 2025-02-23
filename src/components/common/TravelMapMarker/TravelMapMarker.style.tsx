import styled from 'styled-components';
import { colors, size } from '../../../styles/Theme';

export const MarkerWrapper = styled.div`
  width: ${size.SIZE_015};
  height: ${size.SIZE_016};
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Circle = styled.div`
  color: ${colors.WHITE};
  width: ${size.SIZE_013};
  height: ${size.SIZE_013};
  font-size: 15px;
  background-color: ${colors.PRIMARY};
  border-radius: 100px;
  border: 2px solid ${colors.WHITE};
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2;
  transition: 0.3s all;

  &:hover {
    background-color: ${colors.LIGHT_BLUE};
  }
`;
