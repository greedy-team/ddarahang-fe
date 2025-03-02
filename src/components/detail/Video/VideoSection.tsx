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
import { useNavigate } from 'react-router-dom';
import { useSelectOptionContext } from '../../../hooks/select/useSelectOptionContext';
import { MIN_VIEW } from '../../../constants';

interface VideoProps {
  videoId: string;
  travelCourseDetail: TravelCourseDetail | null;
}

const VideoSection = ({ videoId, travelCourseDetail }: VideoProps) => {
  if (!travelCourseDetail) return <></>;
  const { selectedOption } = useSelectOptionContext();
  const route = useNavigate();

  const simpleViewCount = parseFloat((travelCourseDetail.viewCount / MIN_VIEW).toFixed(1)) + '만회';

  const hasRegion = () => {
    if (selectedOption.selectedOptionLabel === '여행 지역 검색') {
      return '';
    }
    return selectedOption.selectedOptionLabel;
  };

  return (
    <VideoSectionContainer>
      <VideoSectionHeader>
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
          {selectedOption.countryName}
          {hasRegion()}
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
            <span>조회수 {simpleViewCount}</span>
          </VideoMeta>
        </VideoInfo>
      </VideoContainer>
    </VideoSectionContainer>
  );
};

export default VideoSection;
