import { TravelVideoListContainer } from './TravelVideoList.style';
import { TravelList } from '../../../types';
import YoutubeCard from '../YoutubeCard/YoutubeCard';
import { useNavigate } from 'react-router-dom';

interface TravelVideoListProps {
  videoNumberInPage: number;
  videoList: TravelList[];
  currentPageNumber: number;
}

const TravelVideoList = ({ videoNumberInPage, videoList, currentPageNumber }: TravelVideoListProps) => {
  const startVideoNumber = (currentPageNumber - 1) * videoNumberInPage;

  const currentVideoList = videoList.slice(startVideoNumber, startVideoNumber + videoNumberInPage);

  const route = useNavigate();
  return (
    <TravelVideoListContainer>
      {currentVideoList.map((video) => {
        return (
          <YoutubeCard
            key={video.travelCourseId}
            imgUrl={video.thumbnailUrl}
            title={video.title}
            creator={video.creator}
            uploadDate={video.uploadDate}
            viewCount={video.viewCount}
            onClick={() => {
              route(`/travelcourse/${video.travelCourseId}`);
            }}
          />
        );
      })}
    </TravelVideoListContainer>
  );
};

export default TravelVideoList;
