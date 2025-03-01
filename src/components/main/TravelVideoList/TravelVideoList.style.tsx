import styled from 'styled-components';
import { size } from '../../../styles/Theme';

export const TravelVideoListContainer = styled.div`
  width: 95%;
  min-height: 45rem;
  margin-top: ${size.SIZE_006};
  display: grid;
  justify-items: center;
  grid-template-columns: repeat(4, minmax(0, 2fr));
  grid-template-rows: repeat(2, auto);
  overflow: hidden;

  @media screen and (max-width: 1440px) {
    grid-template-columns: repeat(3, minmax(0, 2fr));
    grid-template-rows: repeat(2, auto);
  }

  @media screen and (max-width: 1080px) {
    grid-template-columns: repeat(2, minmax(0, 2fr));
    grid-template-rows: repeat(2, auto);
  }
`;
