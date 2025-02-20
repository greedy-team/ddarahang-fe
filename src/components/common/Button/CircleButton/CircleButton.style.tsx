import styled from 'styled-components';
import { colors, size } from '../../../../styles/Theme';

export const StyledCircleButton = styled.button<{ color: string }>`
  width: ${size.SIZE_016};
  height: ${size.SIZE_016};
  border-radius: ${size.SIZE_018};
  background: ${(props) => props.color};
  color: ${colors.WHITE};
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
`;
