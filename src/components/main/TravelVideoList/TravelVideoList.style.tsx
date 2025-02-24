import styled from 'styled-components';
import { size } from '../../../styles/Theme';

export const TravelVideoListContainer = styled.div`
  width: 95%;
  min-height: 51.25rem;
  margin-top: ${size.SIZE_006};
  display: grid;
  justify-items: center;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(2, auto);
  overflow: hidden;
`;
