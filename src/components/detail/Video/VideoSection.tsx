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
} from './VideoSection.style';
import { size, colors } from '../../../styles/Theme';
import { TravelCourseDetail } from '../../../types';

interface VideoProps {
  videoId: string;
  country: string;
  region: string;
  travelCourseDetail: TravelCourseDetail | null;
}

const VideoSection = ({ videoId, country, region, travelCourseDetail }: VideoProps) => {
  if (!travelCourseDetail) return <></>;
  return (
    <VideoSectionContainer>
      <VideoSectionHeader>
        <BackButton
          color={colors.WHITE}
          size={size.SIZE_011}
          iconPath='/icon/back.svg'
          iconAlt='뒤로가기 아이콘'
          onClick={() => {}}
        />
        <HeaderTitle>
          {country} {region}
        </HeaderTitle>
      </VideoSectionHeader>

      <VideoContainer>
        <VideoWrapper>
          <Iframe
            src={`https://www.youtube.com/embed/${videoId}`}
            allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
            allowFullScreen
          />
        </VideoWrapper>

        <VideoInfo>
          <ChannelName>{travelCourseDetail.creator}</ChannelName>
          <VideoTitle>{travelCourseDetail.title}</VideoTitle>
          <VideoMeta>
            <span>업로드 날짜 {travelCourseDetail.uploadDate}</span>
            <span>조회수 {travelCourseDetail.viewCount}회</span>
          </VideoMeta>
        </VideoInfo>
      </VideoContainer>
    </VideoSectionContainer>
  );
};

export default VideoSection;
