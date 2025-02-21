import styled from 'styled-components';
import { colors, size } from '../../../styles/Theme';

export const VideoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border-color: black;
  width: 100%;
  max-height: 720px;
  gap: 10px;
`;

export const VideoWrapper = styled.div`
  position: relative;
  width: 100%;
  max-width: 800px;
  aspect-ratio: 16/9;
  margin: 40px 0;
`;

export const Iframe = styled.iframe`
  position: absolute;
  border-radius: 15px;
  width: 100%;
  height: 100%;
  border: none;
`;
