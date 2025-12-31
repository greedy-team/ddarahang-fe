import styled from 'styled-components';
import { colors, size } from '../../styles/Theme';
import { MOBILE_MAP_BREAKPOINT } from '../../constants/size';

export const StyledFavoritePageLayout = styled.div`
  display: flex;
  flex-direction: row;
  width: 100vw;
  height: 100vh;

  @media screen and (max-width: ${MOBILE_MAP_BREAKPOINT}px) {
    gap: 0;
    height: 100vh;
  }
`;

export const FavoritePlaceListSection = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media screen and (max-width: ${MOBILE_MAP_BREAKPOINT}px) {
    gap: 0;
    height: 100vh;
    width: 100%;
  }
`;

export const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-top: ${size.SIZE_010};
  padding-left: ${size.SIZE_012};
  padding-bottom: ${size.SIZE_006};

  h3 {
    font-family: 'Pretendard-SemiBold';
    font-size: 22px;
    font-weight: 800;
  }

  p {
    color: ${colors.GREY_500};
    font-size: 14px;
  }
`;
