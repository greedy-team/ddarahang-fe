import { TravelVideoListContainer } from './TravelVideoList.style';
import { TravelList } from '../../../types';
import YoutubeCard from '../YoutubeCard/YoutubeCard';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { ERROR_MESSAGE, NO_DATA_ERROR_MESSAGE } from '../../../constants/messages';
import ErrorLayout from '../../common/Error/ErrorLayout';

interface TravelVideoListProps {
  error?: unknown;
  videoList: TravelList[];
  isFavoritePage: boolean;
}

const TravelVideoList = ({ error, videoList, isFavoritePage }: TravelVideoListProps) => {
  const [showNoDataMessage, setShowNoDataMessage] = useState(false);

  useEffect(() => {
    setShowNoDataMessage(videoList.length === 0);
  }, [videoList]);

  const navigate = useNavigate();

  const renderErrorMessage = () => {
    if (error) {
      return (
        <ErrorLayout
          errorTitle={ERROR_MESSAGE}
          errorDescription={String(error)}
        />
      );
    }

    if (showNoDataMessage) {
      return (
        <ErrorLayout
          errorTitle={NO_DATA_ERROR_MESSAGE}
          errorDescription={ERROR_MESSAGE}
        />
      );
    }

    return null;
  };

  return (
    <>
      {renderErrorMessage()}

      <TravelVideoListContainer $isFavoritePage={isFavoritePage}>
        {videoList.map((video) => (
          <YoutubeCard
            key={video.travelCourseId}
            imgUrl={video.thumbnailUrl}
            title={video.title}
            creator={video.creator}
            uploadDate={video.uploadDate}
            viewCount={video.viewCount}
            onClick={() => {
              navigate(`/travelcourse/${video.travelCourseId}`);
            }}
          />
        ))}
      </TravelVideoListContainer>
    </>
  );
};

export default TravelVideoList;
