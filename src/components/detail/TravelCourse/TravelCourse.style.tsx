import styled from 'styled-components';
import { size } from '../../../styles/Theme';

export const TravelCourseContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${size.SIZE_006};
  padding: ${size.SIZE_008} 0px;

  h3 {
    font-size: ${size.SIZE_010};
    padding-left: ${size.SIZE_010};
    font-family: 'Pretendard-SemiBold';
  }

  @media screen and (max-width: 780px) {
    max-height: 100vh;
    padding: 0;
    max-height: none;
  }
`;

export const TravelCourseLayout = styled.div`
  width: 29rem;
  display: flex;
  overflow-y: auto;
  flex-direction: column;
  gap: ${size.SIZE_010};

  @media screen and (max-width: 780px) {
    gap: 0;
  }
`;
