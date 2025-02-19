import {
  YoutubeCardContainer,
  YoutubeThumbnail,
  YoutubeTitle,
  YoutubeChannelName,
  MetaData,
} from './YoutubeCard.style';

interface YoutubeCardProps {
  thumbnailUrl: string;
  title: string;
  channelName: string;
  uploadDate: string;
  viewCount: string;
  onClick: (event: React.MouseEvent<HTMLDivElement>) => void;
}

const YoutubeCard = ({ thumbnailUrl, title, channelName, uploadDate, viewCount, onClick }: YoutubeCardProps) => {
  return (
    <YoutubeCardContainer onClick={onClick}>
      <YoutubeThumbnail
        src={thumbnailUrl}
        alt={title}
      />
      <YoutubeTitle>{title}</YoutubeTitle>
      <YoutubeChannelName>{channelName}</YoutubeChannelName>
      <MetaData>
        <span>{uploadDate}</span>
        <span>{viewCount}</span>
      </MetaData>
    </YoutubeCardContainer>
  );
};

export default YoutubeCard;
