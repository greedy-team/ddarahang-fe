import { TravelVideoListContainer } from './TravelVideoList.style';
import YoutubeCard from '../YoutubeCard/YoutubeCard';
import { useNavigate } from 'react-router-dom';
import { ERROR_MESSAGE, NO_DATA_ERROR_MESSAGE } from '../../../constants/messages';
import ErrorLayout from '../../common/Error/ErrorLayout';
import useTravelVideoList from '../../../hooks/quries/useGetTravelVideoList';
import { useSortOptionContext } from '../../../hooks/context/useSortOptionContext';
import { useSelectOptionContext } from '../../../hooks/context/useSelectOptionContext';
import Pagination from '../Pagination/Pagination';
import { colors } from '../../../styles/Theme';
import { startTransition, useEffect, useState } from 'react';

interface TravelVideoListProps {
  error?: unknown;
  isFavoritePage: boolean;
}

const TravelVideoList = ({ error, isFavoritePage }: TravelVideoListProps) => {
  const navigate = useNavigate();

  const savedPageNumber = localStorage.getItem('currentPageNumber');
  const initialPageNumber = savedPageNumber ? parseInt(savedPageNumber, 10) : 1;
  const [currentPageNumber, setCurrentPageNumber] = useState(initialPageNumber);

  const { sortOption } = useSortOptionContext();
  const { selectedOption } = useSelectOptionContext();

  const { data: videoListResponse } = useTravelVideoList({
    sortField: sortOption,
    countryName: selectedOption.countryName,
    regionName: selectedOption.selectedOptionLabel,
    pageNumber: currentPageNumber - 1,
  });

  useEffect(() => {
    setCurrentPageNumber(1);
  }, [selectedOption.countryName, selectedOption.selectedOptionLabel, sortOption]);

  const handlePageNumber = (movePageNumber: number) => {
    startTransition(() => {
      setCurrentPageNumber(movePageNumber);
      localStorage.setItem('currentPageNumber', String(movePageNumber));
    });
  };

  const videoList = videoListResponse.content ?? [];
  const totalPages = videoListResponse.totalPages ?? 0;

  const renderErrorMessage = () => {
    if (error) {
      return (
        <ErrorLayout
          errorTitle={ERROR_MESSAGE}
          errorDescription={String(error)}
        />
      );
    }

    if (videoList.length === 0) {
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

      <Pagination
        color={colors.WHITE}
        currentPageNumber={currentPageNumber}
        totalPageNumber={totalPages}
        onPageClick={handlePageNumber}
      />
    </>
  );
};

export default TravelVideoList;
