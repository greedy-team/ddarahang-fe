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
  box-shadow: ${size.SIZE_002} ${size.SIZE_003} ${size.SIZE_005} rgba(0, 0, 0, 0.1);

  &:hover {
    background: ${colors.SECONDARY};
    box-shadow: ${size.SIZE_003} ${size.SIZE_004} ${size.SIZE_007} rgba(0, 0, 0, 0.15);
  }
`;

export const SaveButtonStyle = styled(StyledRectangleButton)`
  width: 100%;
  border-radius: ${size.SIZE_007};
  padding: ${size.SIZE_007};
  font-weight: bold;
  box-shadow: 0 0.25rem ${size.SIZE_008} rgba(0, 0, 0, 0.1);

  &:hover {
    background-color: ${colors.GRAY_200};
  }
`;
