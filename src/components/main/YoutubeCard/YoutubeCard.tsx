import {
  YoutubeCardContainer,
  YoutubeThumbnail,
  YoutubeTitle,
  YoutubeChannelName,
  MetaData,
} from './YoutubeCard.style';

interface YoutubeCardProps {
  imgUrl: string;
  title: string;
  creator: string;
  uploadDate: string;
  viewCount: string;
  onClick: (event: React.MouseEvent<HTMLDivElement>) => void;
}

const YoutubeCard = ({ imgUrl, title, creator, uploadDate, viewCount, onClick }: YoutubeCardProps) => {
  return (
    <YoutubeCardContainer onClick={onClick}>
      <YoutubeThumbnail
        src={imgUrl}
        alt={title}
      />
      <YoutubeTitle>{title}</YoutubeTitle>
      <YoutubeChannelName>{creator}</YoutubeChannelName>
      <MetaData>
        <span>{uploadDate}</span>
        <span>{viewCount}</span>
      </MetaData>
    </YoutubeCardContainer>
  );
};

export default YoutubeCard;
