import styled from 'styled-components';
import { colors, size } from '../../../styles/Theme';

export const GlobalHeaderWrapper = styled.div<{ $isIconVisible: boolean }>`
  width: 100%;
  height: ${size.SIZE_017};
  padding: ${size.SIZE_001} ${size.SIZE_016};
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 2px solid ${colors.GRAY_200};

  background-color: ${colors.WHITE};

  ${({ $isIconVisible }) =>
    !$isIconVisible &&
    `
      border-bottom: 2px solid  ${colors.GRAY_200};  
    `}
`;
