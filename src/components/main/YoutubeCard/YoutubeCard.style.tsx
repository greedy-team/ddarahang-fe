import styled from 'styled-components';
import { colors } from '../../../styles/Theme';

export const YoutubeCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 21.25rem;
  height: 20rem;
  margin: 0.75rem;
  padding: 0.75rem 0.75rem 0.875rem 0.75rem;
  border-radius: 0.875rem;
  border: 1px solid ${colors.GRAY_200};
  box-shadow: 0rem 0.5rem 0.5rem rgba(0, 0, 0, 0.51);
  justify-content: center;
`;

export const YoutubeThumbnail = styled.img`
  width: 100%;
  aspect-ratio: 16/9;
  object-fit: cover;
  border-radius: 0.625rem;
`;

export const YoutubeTitle = styled.h2`
  font-size: 1.125rem;
  margin-top: 1rem;
  margin-bottom: 0.375rem;
  overflow-wrap: break-word;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  color: ${colors.BLACK};
`;

export const YoutubeChannelName = styled.div`
  font-size: 0.875rem;
  margin: 0.25rem 0;
  color: ${colors.GREY_500};
`;

export const MetaData = styled.div`
  display: flex;
  width: 100%;
  font-size: 0.875rem;
  margin: 0.25rem 0;
  color: ${colors.GREY_500};
  gap: 0.625rem;
`;
