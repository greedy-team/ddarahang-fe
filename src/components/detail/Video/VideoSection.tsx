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
import { MIN_VIEW } from '../../../constants/size';
import useMobile from '../../../hooks/screen/useMobile';

interface VideoProps {
  videoUrl: string;
  travelCourse: TravelCourse | null;
  isMobileMapVisible: boolean;
  setIsMobileMapVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

const VideoSection = ({ videoUrl, travelCourse, isMobileMapVisible, setIsMobileMapVisible }: VideoProps) => {
  if (!travelCourse) return [];
  const route = useNavigate();
  const { isMobile } = useMobile();

  const simpleViewCount = parseFloat((travelCourse.viewCount / MIN_VIEW).toFixed(1)) + '만회';

  const handleClickMapIcon: () => void = () => {
    setIsMobileMapVisible(!isMobileMapVisible);
  };

  const videoId = videoUrl?.match(/v=([^&]+)/)?.[1] ?? [];

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
            {travelCourse.countryName} {travelCourse.regionName}
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

      <VideoContainer>
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
