import { TravelVideoListContainer } from './TravelVideoList.style';
import { TravelList } from '../../../types';
import YoutubeCard from '../YoutubeCard/YoutubeCard';

import { VIDEO_NUMBERS_IN_PAGE } from '../../../constants';

interface TravelVideoListProps {
  videoList: TravelList[];
  currentPageNumber: number;
}

const TravelVideoList = ({ videoList, currentPageNumber }: TravelVideoListProps) => {
  const startVideoNumber = (currentPageNumber - 1) * VIDEO_NUMBERS_IN_PAGE;

  const currentVideoList = videoList.slice(startVideoNumber, startVideoNumber + VIDEO_NUMBERS_IN_PAGE);

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
