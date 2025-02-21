import styled from 'styled-components';
import { colors, size } from '../../../styles/Theme';

export const VideoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  min-height: 100vh;
  gap: 30px;
`;

export const VideoWrapper = styled.div`
  position: relative;
  width: 100%;
  max-width: 720px;
  aspect-ratio: 16/9;
`;

export const Iframe = styled.iframe`
  position: absolute;
  border-radius: 15px;
  width: 100%;
  height: 100%;
  border: none;
`;
