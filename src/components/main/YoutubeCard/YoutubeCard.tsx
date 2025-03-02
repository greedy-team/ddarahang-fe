import { MIN_VIEW } from '../../../constants';
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
  viewCount: number;
  onClick: (event: React.MouseEvent<HTMLDivElement>) => void;
}

const YoutubeCard = ({ imgUrl, title, creator, uploadDate, viewCount, onClick }: YoutubeCardProps) => {
  const simpleViewCount = parseFloat((viewCount / MIN_VIEW).toFixed(1)) + '만회';

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
        <span>{simpleViewCount}</span>
      </MetaData>
    </YoutubeCardContainer>
  );
};

export default YoutubeCard;
