import {
  YoutubeCardContainer,
  YoutubeThumbnail,
  YoutubeTitle,
  YoutubeChannelName,
  MetaData,
} from './YoutubeCard.style';

const YoutubeCard = () => {
  return (
    <YoutubeCardContainer>
      <YoutubeThumbnail />
      <YoutubeTitle />
      <YoutubeChannelName />
      <MetaData />
    </YoutubeCardContainer>
  );
};

export default YoutubeCard;
