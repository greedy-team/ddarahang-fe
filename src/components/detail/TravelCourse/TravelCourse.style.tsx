import styled from 'styled-components';
import { size } from '../../../styles/Theme';

export const TravelCourseContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${size.SIZE_006};

  h3 {
    font-size: ${size.SIZE_010};
    padding-left: ${size.SIZE_010};
    font-family: 'Pretendard-SemiBold';
  }
`;

export const TravelCourseLayout = styled.div`
  width: 29rem;
  display: flex;
  overflow-y: auto;
  flex-direction: column;
  gap: ${size.SIZE_010};

  @media screen and (max-width: 900px) {
    width: 100%;
    gap: 0;
  }
`;
