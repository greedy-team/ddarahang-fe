import styled from 'styled-components';
import { size } from '../../../../styles/Theme';

export const Panels = styled.div`
  width: 100%;
  max-height: 500px;
  height: auto;
  overflow-y: auto;
  overflow-x: hidden;
  padding: ${size.SIZE_008};
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${size.SIZE_011};

  @media screen and (max-width: 780px) {
    max-height: unset;
    height: auto;
    overflow-y: unset;
  }
`;
