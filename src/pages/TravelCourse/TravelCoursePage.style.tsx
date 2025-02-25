import { styled } from 'styled-components';
import { size } from '../../styles/Theme';

export const TravelCourseContainer = styled.div`
  min-height: 100vh;
  width: 100vw;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
  gap: ${size.SIZE_006};
`;
