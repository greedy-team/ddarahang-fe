import styled from 'styled-components';
import { colors, size } from '../../../../styles/Theme';

export const StyledRectangleButton = styled.button`
  background: ${colors.WHITE};
  color: ${colors.PRIMARY};
  padding: ${size.SIZE_006} ${size.SIZE_010};
  border: none;
  border-radius: ${size.SIZE_005};
  transition: all 0.3s ease;
  cursor: pointer;
  font-size: ${size.SIZE_009};
  font-family: 'Pretendard-SemiBold', sans-serif;
  box-shadow: 2px 4px 8px rgba(0, 0, 0, 0.1);

  &:hover {
    background: ${colors.SECONDARY};
    box-shadow: 4px 6px 12px rgba(0, 0, 0, 0.15);
  }
`;
