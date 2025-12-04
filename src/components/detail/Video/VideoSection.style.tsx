import styled from 'styled-components';
import { colors, size } from '../../../styles/Theme';

export const VideoSectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  padding-bottom: ${size.SIZE_003};
`;

export const VideoSectionHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${size.SIZE_010};
  text-indent: ${size.SIZE_006};
`;

export const HeaderTitle = styled.p`
  font-size: ${size.SIZE_010};
  color: ${colors.BLACK};
  font-family: 'Pretendard-SemiBold';
`;

export const VideoSectionTitle = styled.div`
  display: flex;
  flex-direction: row;
  gap: ${size.SIZE_006};
`;

export const VideoContainer = styled.div<{ $isMobileMapVisible: boolean }>`
  display: ${({ $isMobileMapVisible }) => ($isMobileMapVisible ? 'none' : 'flex')};
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
`;

export const ToggleContainer = styled.div`
  display: flex;
  border-radius: ${size.SIZE_005};
  background-color: ${colors.GRAY_200};
  overflow: hidden;
`;

export const ToggleItem = styled.button<{ $selected: boolean }>`
  flex: 1;
  padding: ${size.SIZE_005} ${size.SIZE_009};
  color: ${({ $selected }) => ($selected ? colors.WHITE : colors.GREY_600)};
  background-color: ${({ $selected }) => ($selected ? colors.PRIMARY : 'transparent')};
  border: none;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    color: ${colors.WHITE};
    background-color: ${({ $selected }) => ($selected ? colors.PRIMARY : colors.LIGHT_BLUE)};
  }
`;

export const VideoWrapper = styled.div`
  position: relative;
  width: 90%;
  aspect-ratio: 16/9;
`;

export const Iframe = styled.iframe`
  position: absolute;
  border-radius: ${size.SIZE_008};
  width: 100%;
  height: 100%;
  border: none;
`;

export const VideoInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 90%;
  gap: ${size.SIZE_004};
  padding-top: ${size.SIZE_010};

  @media screen and (max-width: 780px) {
    margin-bottom: ${size.SIZE_010};
  }
`;

export const ChannelName = styled.p`
  font-size: ${size.SIZE_008};
  color: ${colors.GREY_500};
`;

export const VideoTitle = styled.h3`
  font-size: 1.125rem;
  font-family: 'Pretendard-SemiBold';
  color: ${colors.BLACK};
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  line-height: 1.3;
`;

export const VideoMeta = styled.p`
  font-size: ${size.SIZE_008};
  word-spacing: ${size.SIZE_002};
  color: ${colors.GREY_500};

  & > span {
    margin-right: ${size.SIZE_010};
  }
`;
