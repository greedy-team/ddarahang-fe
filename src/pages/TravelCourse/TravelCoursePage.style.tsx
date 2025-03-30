import { styled } from 'styled-components';
import { size } from '../../styles/Theme';

export const TravelCoursePageLayout = styled.div`
  display: flex;
  justify-content: center;
  width: 100vw;
  min-height: 925px;

  @media screen and (max-width: 780px) {
    gap: 0;
    height: 100vh;
    min-height: 500px;
  }
`;

export const TravelCourseContainer = styled.div`
  width: 600px;
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

  @media screen {
    min-height: 250px;
  }
`;
