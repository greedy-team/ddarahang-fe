import { TravelVideoListContainer } from './TravelVideoList.style';
import { TravelList } from '../../../types';
import YoutubeCard from '../YoutubeCard/YoutubeCard';

interface TravelVideoListProps {
  videoList: TravelList[];
}

const TravelVideoList = ({ videoList }: TravelVideoListProps) => {
  return (
    <TravelVideoListContainer>
      {videoList.map((video) => {
        return (
          <YoutubeCard
            imgUrl={video.thumbnailUrl}
            title={video.title}
            creator={video.creator}
            uploadDate={video.uploadDate}
            viewCount={video.viewCount}
            onClick={() => {}}
          />
        );
      })}
    </TravelVideoListContainer>
  );
};

export default TravelVideoList;
