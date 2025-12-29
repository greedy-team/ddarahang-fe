import { styled } from 'styled-components';
import { MOBILE_MAP_BREAKPOINT } from '../../constants/size';

export const TravelCoursePageLayout = styled.div`
  display: flex;
  justify-content: center;
  width: 100vw;
  min-height: 100dvh;

  @media screen and (max-width: ${MOBILE_MAP_BREAKPOINT}) {
    width: 100%;
    display: block;
    min-height: 100dvh;
    gap: 0;
    /* overflow-x: hidden; */
  }
`;
