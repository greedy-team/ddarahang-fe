import styled from 'styled-components';
import { colors, size } from '../../styles/Theme';

export const StyledFavoritePageLayout = styled.div`
  display: flex;
  flex-direction: row;
  width: 100vw;
  min-height: 57.8rem;

  @media screen and (max-width: 780px) {
    gap: 0;
    height: 100vh;
    min-height: 31.25rem;
  }
`;

export const FavoritePlaceListSection = styled.div`
  width: 37.5rem;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-top: ${size.SIZE_010};
  padding-left: ${size.SIZE_012};
  gap: 1rem;

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
