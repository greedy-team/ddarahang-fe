import styled from 'styled-components';
import { size } from '../../../styles/Theme';

export const TravelCourseContainer = styled.div`
  max-height: 420px;
  display: flex;
  flex-direction: column;
  gap: ${size.SIZE_006};

  h3 {
    font-size: ${size.SIZE_010};
    padding-left: ${size.SIZE_010};
    font-family: 'Pretendard-SemiBold';
  }

  @media screen and (max-width: 780px) {
    margin-top: ${size.SIZE_010};
    height: 100%;
    max-height: 420px;
    gap: 0px;
  }
`;
