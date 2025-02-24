import { TravelVideoListContainer } from './TravelVideoList.style';
import { TravelList } from '../../../types';
import YoutubeCard from '../YoutubeCard/YoutubeCard';

import { ITEMS_PER_PAGE } from '../../../constants';

interface TravelVideoListProps {
  videoList: TravelList[];
  currentPageNumber: number;
}

const TravelVideoList = ({ videoList, currentPageNumber }: TravelVideoListProps) => {
  const startVideoNumber = (currentPageNumber - 1) * ITEMS_PER_PAGE;

  const currentVideoList = videoList.slice(startVideoNumber, startVideoNumber + ITEMS_PER_PAGE);

  return (
    <TravelVideoListContainer>
      {currentVideoList.map((video) => {
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
