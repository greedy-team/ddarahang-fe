import styled from 'styled-components';
import { colors, size } from '../../../../styles/Theme';

export const StyledPageButton = styled.button<{ color: string; isActive: boolean }>`
  width: ${size.SIZE_013};
  height: ${size.SIZE_013};
  border-radius: ${size.SIZE_018};
  background: ${(props) => (props.isActive ? colors.PRIMARY : colors.WHITE)};
  color: ${(props) => (props.isActive ? colors.WHITE : colors.BLACK)};

  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  transition: all 0.3s;

  &:hover {
    background: ${(props) => (props.isActive ? colors.PRIMARY : colors.GRAY_200)};
    color: ${(props) => (props.isActive ? colors.WHITE : colors.BLACK)};
  }
`;
