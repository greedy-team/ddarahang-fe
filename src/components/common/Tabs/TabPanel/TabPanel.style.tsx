import styled from 'styled-components';
import { size } from '../../../../styles/Theme';

export const Panels = styled.div`
  width: 100%;
  height: 200px;
  overflow-y: auto;
  padding: ${size.SIZE_008};
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${size.SIZE_011};
`;
