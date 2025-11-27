import styled from 'styled-components';
import { colors, size } from '../../../styles/Theme';

export const GlobalHeaderWrapper = styled.div<{ $isMobile: boolean }>`
  width: 100vw;
  height: ${size.SIZE_018};
  padding: ${size.SIZE_001} ${size.SIZE_016};
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${colors.WHITE};

  @media screen and (max-width: 780px) {
    height: ${size.SIZE_016};
    padding: ${size.SIZE_001} ${size.SIZE_008};
    ${({ $isMobile }) => $isMobile && 'display: none;'};
    position: sticky;
    top: 0;
    z-index: 10;
  }
`;

export const Tab = styled.p`
  cursor: pointer;
  color: ${colors.GREY_600};

  &:hover {
    color: ${colors.PRIMARY};

    font-weight: 800;
  }
`;
