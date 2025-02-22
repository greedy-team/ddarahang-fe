import styled from 'styled-components';
import { size } from '../../../../styles/Theme';

export const PlaceCardListContainer = styled.div`
  width: ${size.SIZE_026};
  height: 400px; //height 임의 지정했습니다.
  overflow-y: auto;
  padding: ${size.SIZE_008};
  display: flex;
  flex-direction: column;
  gap: ${size.SIZE_011};
`;
