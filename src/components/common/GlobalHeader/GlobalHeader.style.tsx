import styled from 'styled-components';
import { colors, size } from '../../../styles/Theme';

export const GlobalHeaderWrapper = styled.div<{ $isMobile: boolean; $isIconVisible: boolean }>`
  width: 100%;
  height: ${size.SIZE_018};
  padding: ${size.SIZE_001} ${size.SIZE_016};
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 100;
  background-color: ${colors.WHITE};

  ${({ $isIconVisible }) =>
    !$isIconVisible &&
    `
      border-bottom: 2px solid  ${colors.GRAY_200};  
    `}

  @media screen and (max-width: 780px) {
    padding: ${size.SIZE_001} ${size.SIZE_008};
    ${({ $isMobile }) => $isMobile && 'display: none;'};
    position: sticky;
    top: 0;
  }
`;
