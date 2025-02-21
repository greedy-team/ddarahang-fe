import { VideoContainer, VideoWrapper, Iframe } from './Video.style';

interface YoutubeVideoProps {
  videoId: string;
}

const Video = ({ videoId }: YoutubeVideoProps) => {
  return (
    <VideoContainer>
      <VideoWrapper>
        <Iframe
          src={`https://www.youtube.com/embed/${videoId}`}
          allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
          allowFullScreen
        />
      </VideoWrapper>
    </VideoContainer>
  );
};

export default Video;
