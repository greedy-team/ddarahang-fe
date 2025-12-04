import styled from 'styled-components';
import { MOBILE_MAP_BREAKPOINT } from '../../../constants/size';

export const MapWrapper = styled.div`
  display: flex;
  width: 100%;

  @media (max-width: ${MOBILE_MAP_BREAKPOINT}) {
    flex: none;
    height: 15rem;
  }
`;

export const MapContainer = styled.div`
  width: 100%;
  border: 1px solid #ddd;

  @media (max-width: ${MOBILE_MAP_BREAKPOINT}) {
    flex: none;
    height: 15rem;
  }
`;
