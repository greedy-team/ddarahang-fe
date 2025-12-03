import { styled } from 'styled-components';
import { size } from '../../styles/Theme';

export const TravelCoursePageLayout = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  min-height: 100dvh;

  @media screen and (max-width: 780px) {
    gap: 0;
    min-height: 100dvh;
  }
`;

export const TravelCourseContainer = styled.div`
  width: 29rem;
  display: flex;
  flex-direction: column;
  gap: ${size.SIZE_010};
  padding-bottom: 0;
  overflow-y: auto;

  @media screen and (max-width: 780px) {
    gap: 0;
    overflow-y: visible;
  }
`;
