import { styled } from 'styled-components';
import { size, colors } from '../../styles/Theme';

export const PageContainer = styled.div`
  min-height: 100vh;
  width: 100vw;
  height: auto;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

export const TravelCourseContainer = styled.div`
  width: 50vw;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border-top: ${size.SIZE_002} solid ${colors.GRAY_200};
`;
