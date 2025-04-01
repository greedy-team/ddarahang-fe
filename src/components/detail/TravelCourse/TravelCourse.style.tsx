import styled from 'styled-components';
import { size } from '../../../styles/Theme';

export const TravelCourseContainer = styled.div`
  max-height: 26.25rem;
  display: flex;
  flex-direction: column;
  gap: ${size.SIZE_006};

  h3 {
    font-size: ${size.SIZE_010};
    padding-left: ${size.SIZE_010};
    font-family: 'Pretendard-SemiBold';
  }

  @media screen and (max-width: 780px) {
    max-height: 100vh;
    gap: ${size.SIZE_001};
    max-height: none;
  }
`;
