import styled from 'styled-components';
import { colors, size } from '../../../../styles/Theme';

export const StyledPageButton = styled.button<{ color: string; isActive: boolean }>`
  width: ${size.SIZE_011};
  height: ${size.SIZE_011};
  border-radius: ${size.SIZE_018};
  background: ${(props) => (props.isActive ? colors.PRIMARY : colors.WHITE)};
  color: ${(props) => (props.isActive ? colors.WHITE : colors.BLACK)};

  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  transition: all 50ms;

  &:hover {
    background: ${(props) => (props.isActive ? colors.PRIMARY : colors.GRAY_200)};
    color: ${(props) => (props.isActive ? colors.WHITE : colors.BLACK)};
  }
`;
