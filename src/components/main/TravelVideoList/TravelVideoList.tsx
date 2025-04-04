import { TravelVideoListContainer } from './TravelVideoList.style';
import { TravelList } from '../../../types';
import YoutubeCard from '../YoutubeCard/YoutubeCard';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { StyledContentsWrapper, StyledErrorMessage } from '../../../pages/Main/MainPage.style';
import { ERROR_MESSAGE, NO_DATA_ERROR_MESSAGE } from '../../../constants/messages';

interface TravelVideoListProps {
  error?: unknown;
  videoList: TravelList[];
}

const TravelVideoList = ({ error, videoList }: TravelVideoListProps) => {
  const [showNoDataMessage, setShowNoDataMessage] = useState(false);

  useEffect(() => {
    setShowNoDataMessage(videoList.length === 0);
  }, [videoList]);

  const navigate = useNavigate();

  const renderErrorMessage = () => {
    if (error) {
      return (
        <StyledContentsWrapper>
          <StyledErrorMessage>
            <p>{ERROR_MESSAGE}</p>
            <span>{String(error)}</span>
          </StyledErrorMessage>
        </StyledContentsWrapper>
      );
    }

    if (showNoDataMessage) {
      return (
        <StyledContentsWrapper>
          <StyledErrorMessage>
            <p>{NO_DATA_ERROR_MESSAGE}</p>
            <span>{ERROR_MESSAGE}</span>
          </StyledErrorMessage>
        </StyledContentsWrapper>
      );
    }

    return null;
  };

  return (
    <>
      {renderErrorMessage()}

      <TravelVideoListContainer>
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
