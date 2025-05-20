import styled from 'styled-components';
import { colors, size } from '../../../styles/Theme';

export const UnselectedFavoriteTab = styled.button`
  width: 4rem;
  height: 1.875rem;
  border-radius: ${size.SIZE_003};
  border: none;
  background: transparent;
  color: ${colors.GREY_400};
  font-size: 15px;
`;
