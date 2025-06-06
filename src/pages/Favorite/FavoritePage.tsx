import { useState } from 'react';
import GlobalHeader from '../../components/common/GlobalHeader/GlobalHeader';
import TabPanel from '../../components/common/Tabs/TabPanel/TabPanel';
import TravelMap from '../../components/common/TravelMap/TravelMap';
import TravelMapWrapper from '../../components/common/TravelMapWrapper/TravelMapWrapper';
import FavoriteTabs from '../../components/favorite/FavoriteTabs/FavoriteTabs';
import { TagType } from '../../types';
import { StyledFavoritePageLayout, FavoritePlaceListSection, TitleWrapper } from './FavoritePage.style';
import useFavoritePlaces from '../../hooks/quries/useFavoritePlaces';
import Loading from '../../components/common/Loading/Loading';
import FavoriteRecommend from '../../components/favorite/FavoriteRecommend/FavoriteRecommend';
import ErrorLayout from '../../components/common/Error/ErrorLayout';
import { ERROR_MESSAGE } from '../../constants/messages';
import { transformTodefaultFormPlaces } from '../../utils';

const FavoritePage = () => {
  const { favoritePlaces, loading, error } = useFavoritePlaces();
  const [selectedTagTab, setSelectedTagTab] = useState<TagType>('전체');

  /**
   * 임의의 타이틀, 설명
   */
  const favoriteListTitle = '나만의 여행 장소 목록';
  const favoriteListDescription = '기본 여행 장소 목록';

  const filteredPlaces =
    selectedTagTab === '전체' ? favoritePlaces : favoritePlaces.filter((place) => place.tag === selectedTagTab);

  const defaultFormPlaces = transformTodefaultFormPlaces(filteredPlaces);

  if (error)
    return (
      <ErrorLayout
        errorTitle={ERROR_MESSAGE}
        errorDescription={String(error)}
      />
    );

  return (
    <>
      <GlobalHeader
        isMobile={false}
        isIconVisible={false}
        isMainHeader={false}
      />
      <Loading loading={loading} />
      {!loading && (
        <StyledFavoritePageLayout>
          <FavoritePlaceListSection>
            <TitleWrapper>
              <p>{favoriteListDescription}</p>
              <h3>{favoriteListTitle}</h3>
            </TitleWrapper>
            <FavoriteTabs
              selectedTagTab={selectedTagTab}
              setSelectedTagTab={setSelectedTagTab}
            />
            <TabPanel
              isFavorite={true}
              oneDayCourse={defaultFormPlaces}
            />
          </FavoritePlaceListSection>
          {defaultFormPlaces.length !== 0 ? (
            <TravelMapWrapper>
              <TravelMap oneDayCourses={defaultFormPlaces} />
            </TravelMapWrapper>
          ) : (
            <FavoriteRecommend />
          )}
        </StyledFavoritePageLayout>
      )}
    </>
  );
};

export default FavoritePage;
