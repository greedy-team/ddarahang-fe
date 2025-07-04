import styled, { css } from 'styled-components';
import { colors, size } from '../../../../styles/Theme';

interface StyledRectangleButtonProps {
  $variant?: 'default' | 'save' | 'blue' | 'white';
  $size?: 'large' | 'small';
}

export const StyledRectangleButton = styled.button<StyledRectangleButtonProps>`
  border: none;
  border-radius: ${size.SIZE_005};
  white-space: nowrap;
  transition: all 0.3s ease;
  cursor: pointer;
  font-size: ${size.SIZE_009};
  font-family: 'Pretendard-SemiBold', sans-serif;
  box-shadow: ${size.SIZE_002} ${size.SIZE_003} ${size.SIZE_005} rgba(0, 0, 0, 0.1);

  ${({ $variant }) => css`
    background: ${colors.WHITE};
    color: ${colors.PRIMARY};

    &:hover {
      background: ${colors.SECONDARY};
      box-shadow: ${size.SIZE_003} ${size.SIZE_004} ${size.SIZE_007} rgba(0, 0, 0, 0.15);
    }

    ${$variant === 'blue' &&
    css`
      background: ${colors.PRIMARY};
      color: ${colors.WHITE};

      &:hover {
        background: ${colors.LIGHT_BLUE};
        box-shadow: ${size.SIZE_003} ${size.SIZE_004} ${size.SIZE_007} rgba(0, 0, 0, 0.15);
      }
    `}
  `}

  ${({ $size }) => css`
    padding: ${size.SIZE_006} ${size.SIZE_010};
    ${$size === 'large' &&
    css`
      width: 100%;
    `}
  `}
`;
