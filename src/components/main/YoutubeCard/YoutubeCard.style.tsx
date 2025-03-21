import styled from 'styled-components';
import { colors, size } from '../../../styles/Theme';

export const YoutubeCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 400px;
  height: 355px;
  margin: ${size.SIZE_007};
  padding: ${size.SIZE_010} ${size.SIZE_007} ${size.SIZE_010} ${size.SIZE_007};
  border-radius: ${size.SIZE_008};
  border: 1px solid ${colors.GRAY_200};
  box-shadow: ${size.SIZE_001} ${size.SIZE_005} ${size.SIZE_005} rgba(0, 0, 0, 0.1);
  transition: all 0.5s;

  &:hover {
    cursor: pointer;
    transform: translateY(-15px);
  }
`;

export const YoutubeTitle = styled.h2`
  font-size: 1.125rem;
  padding-top: ${size.SIZE_006};
  padding-bottom: ${size.SIZE_003};
  overflow-wrap: break-word;
  line-height: 1.4;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  color: ${colors.BLACK};

  @media screen and (max-width: 780px) {
    font-family: 'Pretendard-Regular';
  }
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
