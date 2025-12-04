import styled from 'styled-components';
import { size } from '../../../styles/Theme';
import { MOBILE_MAP_BREAKPOINT } from '../../../constants/size';

export const TravelCourseLayout = styled.div`
  width: 29rem;
  display: flex;
  overflow-y: auto;

  flex-direction: column;
  gap: ${size.SIZE_010};

  @media (max-width: ${MOBILE_MAP_BREAKPOINT}px) {
    width: 100%;
    gap: 0;
  }
`;

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

export const VideoAndMapSection = styled.div<{ $isVisible: boolean }>`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media (max-width: ${MOBILE_MAP_BREAKPOINT}px) {
    height: ${({ $isVisible }) => ($isVisible ? '50rem' : 'auto')};
  }
`;
