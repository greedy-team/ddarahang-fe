import styled from 'styled-components';
import { colors, size } from '../../../styles/Theme';

export const StyledLogo = styled.button`
  color: ${colors.PRIMARY};
  font-family: 'Ownglyph_ParkDaHyun';
  font-size: ${size.SIZE_012};
  font-weight: 700;
  background-color: transparent;
  border: none;
  display: flex;
  gap: ${size.SIZE_003};
  align-items: center;

  span {
    font-size: ${size.SIZE_008};
  }
`;
