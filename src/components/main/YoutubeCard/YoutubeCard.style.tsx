import styled from 'styled-components';

export const YoutubeCardContainer = styled.div`
  display: flex;
  max-width: 342px;
  max-height: 315px;
  margin: 12px;
  padding-top: 17px;
  padding-left: 13px;
  padding-right: 13px;
  padding-bottom: 14px;
  border-radius: 15px;
  border: 1px solid #f5f5f5;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.51);
  background: #fff;
`;

export const YoutubeThumbnail = styled.img`
  width: 100%;
  height: auto;
  border-radius: 10px;
`;

export const YoutubeTitle = styled.h2`
  width: 100%;
  font-size: 18px;
  margin: 16.5px 13px 6px 13px;
  color: #000;
`;

export const YoutubeChannelName = styled.p`
  font-size: 14px;
  margin: 4px 0;
  color: #757575;
`;

export const MetaData = styled.p`
  font-size: 14px;
  margin: 4px 0;
  color: #757575;
`;
