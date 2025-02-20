import styled from 'styled-components';
import { colors, size } from '../../../styles/Theme';

export const StyledLogo = styled.button`
  color: ${colors.PRIMARY};
  font-size: ${size.SIZE_010};
  font-weight: 700;
  background-color: ${colors.WHITE};
  border: none;

  span {
    font-size: ${size.SIZE_008};
  }
`;
