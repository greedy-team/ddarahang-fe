import styled from 'styled-components';
import { colors, size } from '../../../styles/Theme';

export const YoutubeCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 400px;
  height: ${size.SIZE_024};
  margin: ${size.SIZE_007};
  padding: ${size.SIZE_012} ${size.SIZE_007} ${size.SIZE_012} ${size.SIZE_007};
  border-radius: ${size.SIZE_008};
  border: 1px solid ${colors.GRAY_200};
  box-shadow: ${size.SIZE_001} ${size.SIZE_005} ${size.SIZE_005} rgba(0, 0, 0, 0.1);
  transition: all 0.5s;

  &:hover {
    cursor: pointer;
    transform: translateY(-15px);
  }
`;

export const YoutubeThumbnail = styled.img`
  width: 100%;
  aspect-ratio: 16/9;
  object-fit: cover;
  border-radius: ${size.SIZE_006};
`;

export const YoutubeTitle = styled.h2`
  font-size: 1.125rem;
  margin-top: ${size.SIZE_010};
  margin-bottom: ${size.SIZE_004};
  overflow-wrap: break-word;
  line-height: 1.4;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  color: ${colors.BLACK};
`;

export const YoutubeChannelName = styled.div`
  font-size: ${size.SIZE_008};
  margin: ${size.SIZE_003} ${size.SIZE_001};
  color: ${colors.GREY_500};
`;

export const MetaData = styled.div`
  display: flex;
  width: 100%;
  font-size: ${size.SIZE_008};
  margin: ${size.SIZE_003} ${size.SIZE_001};
  color: ${colors.GREY_500};
  gap: ${size.SIZE_006};
`;
