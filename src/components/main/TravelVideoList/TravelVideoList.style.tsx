import styled from 'styled-components';
import { size } from '../../../styles/Theme';

export const TravelVideoListContainer = styled.div`
  width: 95%;
  height: auto;
  margin-top: ${size.SIZE_006};
  display: grid;
  justify-items: center;
  align-items: center;
  grid-template-columns: repeat(4, 2fr);
`;
