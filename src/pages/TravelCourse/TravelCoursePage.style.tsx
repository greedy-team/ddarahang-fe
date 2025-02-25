import { styled } from 'styled-components';
import { size } from '../../styles/Theme';

export const PageContainer = styled.div`
  min-height: 100vh;
  width: 100vw;
  height: auto;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  gap: ${size.SIZE_006};
`;

export const TravelCourseContainer = styled.div`
  width: 50vw;
  height: auto;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;
