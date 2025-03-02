import styled from 'styled-components';
import { colors, size } from '../../../../styles/Theme';

interface CircleButtonProps {
  $size: string;
  $color: string;
}

export const StyledCircleButton = styled.button<CircleButtonProps>`
  width: ${(props) => props.$size};
  height: ${(props) => props.$size};
  border-radius: ${size.SIZE_018};
  background: ${(props) => props.$color};
  color: ${colors.WHITE};
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  ${(props) =>
    props.$color === colors.PRIMARY
      ? `
      &:hover {
        background: ${colors.LIGHT_BLUE};
      } 
      `
      : `
      &:hover {
        background: ${colors.GRAY_200};
      } 
      `}
`;
