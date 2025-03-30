import BackButton from '../../common/Button/CircleButton/CircleButton';
import {
  VideoSectionContainer,
  VideoContainer,
  VideoWrapper,
  Iframe,
  VideoSectionHeader,
  HeaderTitle,
  ChannelName,
  VideoInfo,
  VideoTitle,
  VideoMeta,
  VideoSectionTitle,
  ToggleContainer,
  ToggleItem,
} from './VideoSection.style';
import { size, colors } from '../../../styles/Theme';
import { TravelCourse } from '../../../types';
import { useNavigate } from 'react-router-dom';
import { useSelectOptionContext } from '../../../hooks/context/useSelectOptionContext';
import { MIN_VIEW } from '../../../constants';

interface VideoProps {
  videoUrl: string;
  travelCourse: TravelCourse | null;
  setIsMobileMapVisible: React.Dispatch<React.SetStateAction<boolean>>;
  isMobileMapVisible: boolean;
  isMobile: boolean;
}

const VideoSection = ({ videoUrl, travelCourse, isMobile, setIsMobileMapVisible, isMobileMapVisible }: VideoProps) => {
  if (!travelCourse) return [];
  const { selectedOption } = useSelectOptionContext();
  const route = useNavigate();

  const simpleViewCount = parseFloat((travelCourse.viewCount / MIN_VIEW).toFixed(1)) + '만회';

  const hasRegion = () => {
    if (selectedOption.selectedOptionLabel === '여행 지역 검색') {
      return '';
    }
    return selectedOption.selectedOptionLabel;
  };

  const handleClickMapIcon = () => {
    setIsMobileMapVisible(!isMobileMapVisible);
  };

  const videoId = videoUrl.match(/v=([^&]+)/)?.[1];

  return (
    <VideoSectionContainer>
      <VideoSectionHeader>
        <VideoSectionTitle>
          <BackButton
            color={colors.WHITE}
            size={size.SIZE_011}
            iconPath='/icon/back.svg'
            iconAlt='뒤로가기 아이콘'
            onClick={() => {
              route('/');
            }}
          />
          <HeaderTitle>
            {selectedOption.countryName} {hasRegion()}
          </HeaderTitle>
        </VideoSectionTitle>
        {isMobile && (
          <ToggleContainer>
            <ToggleItem
              $selected={!isMobileMapVisible}
              onClick={() => handleClickMapIcon()}
            >
              영상 보기
            </ToggleItem>

            <ToggleItem
              $selected={isMobileMapVisible}
              onClick={() => handleClickMapIcon()}
            >
              지도 보기
            </ToggleItem>
          </ToggleContainer>
        )}
      </VideoSectionHeader>

      <VideoContainer $isMobileMapVisible={isMobileMapVisible}>
        <VideoWrapper>
          <Iframe
            data-testid='video-player'
            src={`https://www.youtube.com/embed/${videoId}`}
            allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
            allowFullScreen
          />
        </VideoWrapper>

        <VideoInfo>
          <ChannelName>{travelCourse.creator}</ChannelName>
          <VideoTitle>{travelCourse.title}</VideoTitle>
          <VideoMeta>
            <span>업로드 날짜 {travelCourse.uploadDate}</span>
            <span>조회수 {simpleViewCount}</span>
          </VideoMeta>
        </VideoInfo>
      </VideoContainer>
    </VideoSectionContainer>
  );
};

export default VideoSection;
