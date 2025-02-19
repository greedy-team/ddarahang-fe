import styled from 'styled-components';
import { colors } from '../../../styles/Theme';

export const YoutubeCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 342px;
  height: 315px;
  margin: 12px;
  padding: 17px 13px 14px 13px;
  border-radius: 15px;
  border: 1px solid ${colors.GRAY_200};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.51);
  background: ${colors.WHITE};
`;

export const YoutubeThumbnail = styled.img`
  width: 100%;
  aspect-ratio: 16/9;
  object-fit: cover;
  border-radius: 10px;
`;

export const YoutubeTitle = styled.h2`
  font-size: 18px;
  margin-top: 16.5px;
  margin-bottom: 6px;
  word-wrap: break-word;
  overflow: hidden;
  color: ${colors.BLACK};
`;

export const YoutubeChannelName = styled.div`
  font-size: 14px;
  margin: 4px 0;
  color: ${colors.GREY_500};
`;

export const MetaData = styled.div`
  display: flex;
  width: 100%;
  font-size: 14px;
  margin: 4px 0;
  color: ${colors.GREY_500};
  gap: 10px;
`;
