import styled from 'styled-components';
import { colors } from '../../../../styles/Theme';

export const StyledCircleButton = styled.button<{ color: string }>`
  width: 50px;
  height: 50px;
  border-radius: 100px;
  background: ${(props) => props.color};
  color: ${colors.WHITE};
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
`;
