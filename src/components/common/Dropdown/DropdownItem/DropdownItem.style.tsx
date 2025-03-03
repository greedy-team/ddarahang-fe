import styled from 'styled-components';
import { colors, size } from '../../../../styles/Theme';

export const DropdownItemButton = styled.button`
  width: 7.5rem;
  height: ${size.SIZE_012};
  font-size: ${size.SIZE_009};
  background-color: ${colors.WHITE};
  border-radius: ${size.SIZE_003};
  padding: ${size.SIZE_002};
  display: flex;
  border: none;
  justify-content: center;
  flex-direction: column;
  align-items: flex-start;

  &:hover {
    background-color: ${colors.GRAY_200};
  }
`;
