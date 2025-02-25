import styled from 'styled-components';
import { size } from '../../../../styles/Theme';

export const Panels = styled.div`
  width: 100%;
  max-height: 500px;
  overflow-y: scroll;
  overflow-x: hidden;
  padding: ${size.SIZE_008};
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${size.SIZE_011};
`;
