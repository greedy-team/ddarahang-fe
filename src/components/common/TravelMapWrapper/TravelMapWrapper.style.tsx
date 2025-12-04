import styled from 'styled-components';
import { MOBILE_MAP_BREAKPOINT } from '../../../constants/size';

export const MapContainer = styled.div`
  flex: 1 1 0%;
  display: flex;
  width: 100%;
  flex-shrink: 0;

  @media (max-width: ${MOBILE_MAP_BREAKPOINT}) {
    max-height: 100px;
    min-height: 15.625rem;
  }
`;
