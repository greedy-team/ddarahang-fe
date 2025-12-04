import styled from 'styled-components';
import { size } from '../../styles/Theme';

export const StyledPageLayout = styled.div`
  display: flex;
  width: 100%;
  min-height: 100vh;
  flex-direction: column;

  @media screen and (max-width: 780px) {
    gap: ${size.SIZE_002};
    padding: ${size.SIZE_004} 0;
  }
`;
