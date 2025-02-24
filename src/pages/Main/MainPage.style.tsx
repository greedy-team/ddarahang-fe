import styled from 'styled-components';
import { size } from '../../styles/Theme';

export const MainPageLayout = styled.div`
  min-height: 100vh;
  width: 100vw;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
  gap: ${size.SIZE_006};
`;

export const ContentsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${size.SIZE_006};
  align-items: center;
`;
