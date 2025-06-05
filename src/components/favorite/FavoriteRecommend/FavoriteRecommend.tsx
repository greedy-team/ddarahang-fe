import { StyledFavoriteRecommend } from './FavoriteRecommend.styled';
import useTravelVideoList from '../../../hooks/quries/useGetTravelVideoList';
import TravelVideoList from '../../main/TravelVideoList/TravelVideoList';
import Loading from '../../common/Loading/Loading';
import { Suspense } from 'react';
import { TitleWrapper } from '../../../pages/Favorite/FavoritePage.style';
import { useSelectOptionContext } from '../../../hooks/context/useSelectOptionContext';

const FavoriteRecommend = () => {
  const { selectedOption } = useSelectOptionContext();

  const { videoListResponse, loading, error } = useTravelVideoList({
    sortField: 'viewCount',
    countryName: selectedOption.countryName,
    regionName: selectedOption.selectedOptionLabel,
    pageNumber: 0,
  });

  const videoList = videoListResponse?.content ?? [];

  if (error) return <p>오류가 발생했어요.</p>;

  return (
    <StyledFavoriteRecommend>
      <TitleWrapper>
        <p>
          {selectedOption.selectedOptionLabel !== '여행 지역 검색'
            ? selectedOption.selectedOptionLabel
            : selectedOption.countryName}
          (으)로 떠나시나요?
        </p>
        <h3>
          {' '}
          {selectedOption.selectedOptionLabel !== '여행 지역 검색'
            ? selectedOption.selectedOptionLabel
            : selectedOption.countryName}{' '}
          추천 영상
        </h3>
      </TitleWrapper>
      {loading ? (
        <Loading loading={true} />
      ) : (
        <Suspense fallback={<Loading loading={true} />}>
          <TravelVideoList
            error={error}
            videoList={videoList}
            isFavoritePage={true}
          />
        </Suspense>
      )}
    </StyledFavoriteRecommend>
  );
};

export default FavoriteRecommend;
