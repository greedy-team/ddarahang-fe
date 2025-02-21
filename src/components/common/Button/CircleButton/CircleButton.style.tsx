import styled from 'styled-components';
import { colors, size } from '../../../../styles/Theme';

export const StyledCircleButton = styled.button<{ size: string, color: string }>`
  width: ${size.SIZE_016}; // ${(props) => props.size};
  height: ${size.SIZE_016}; // ${(props) => props.size};
  border-radius: ${size.SIZE_018};
  background: ${(props) => props.color};
  color: ${colors.WHITE};
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
`;
