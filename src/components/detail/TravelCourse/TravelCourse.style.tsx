import styled from 'styled-components';
import { size } from '../../../styles/Theme';

export const TravelCourseContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${size.SIZE_006};

  h3 {
    padding-left: ${size.SIZE_018};
    padding-top: ${size.SIZE_004};
  }
`;
