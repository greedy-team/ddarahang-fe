import styled from 'styled-components';
import { colors, size } from '../../../styles/Theme';

export const StyledLogo = styled.button`
  color: ${colors.PRIMARY};
  font-family: var(--font-logo);
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

  img {
    @media (max-width: 780px) {
      width: 2.813rem;
      height: 2.625rem;
    }
  }

  @media screen and (max-width: 780px) {
    font-size: ${size.SIZE_011};
  }
`;
