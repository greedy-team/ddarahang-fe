import { styled } from 'styled-components';
import { size } from '../../styles/Theme';

export const TravelCoursePageLayout = styled.div`
  display: flex;
  justify-content: center;
  width: 100vw;
  min-height: 57.8rem;

  @media screen and (max-width: 780px) {
    gap: 0;
    height: 100vh;
    min-height: 31.25rem;
  }
`;

export const TravelCourseContainer = styled.div`
  width: 37.5rem;
  display: flex;
  flex-direction: column;
  gap: ${size.SIZE_010};

  @media screen and (max-width: 780px) {
    gap: 0;
  }
`;

export const MapContainer = styled.div`
  flex: 1 1 0%;
  display: flex;
  justify-content: flex-start;

  @media screen {
    min-height: 15.625rem;
  }
`;
