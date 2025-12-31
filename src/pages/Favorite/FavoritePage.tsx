import { useState } from 'react';
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
import { adaptPlace } from '../../utils/adaptPlace';
import useMobile from '../../hooks/screen/useMobile';

const FavoritePage = () => {
  const { favoritePlaces, error, loading } = useFavoritePlaces();
  const [selectedTagTab, setSelectedTagTab] = useState<TagType>('전체');
  const { isMobile } = useMobile();

  /**
   * 임의의 타이틀, 설명
   */
  const favoriteListTitle = '여행 장소';

  const filteredPlaces =
    selectedTagTab === '전체' ? favoritePlaces : favoritePlaces.filter((place) => place.tag === selectedTagTab);

  const defaultFormPlaces = adaptPlace(filteredPlaces);

  if (error)
    return (
      <ErrorLayout
        errorTitle={ERROR_MESSAGE}
        errorDescription={String(error)}
      />
    );

  if (loading) return <Loading />;

  return (
    <>
      <StyledFavoritePageLayout>
        <FavoritePlaceListSection>
          {!isMobile ? (
            <TitleWrapper>
              <h3>{favoriteListTitle}</h3>
            </TitleWrapper>
          ) : (
            <TravelMapWrapper>
              <TravelMap oneDayCourses={defaultFormPlaces} />
            </TravelMapWrapper>
          )}

          <FavoriteTabs
            selectedTagTab={selectedTagTab}
            setSelectedTagTab={setSelectedTagTab}
          />

          <TabPanel
            isFavorite={true}
            oneDayCourse={defaultFormPlaces}
          />
        </FavoritePlaceListSection>
        {defaultFormPlaces.length !== 0
          ? !isMobile && (
              <TravelMapWrapper>
                <TravelMap oneDayCourses={defaultFormPlaces} />
              </TravelMapWrapper>
            )
          : !isMobile && <FavoriteRecommend />}
      </StyledFavoritePageLayout>
    </>
  );
};

export default FavoritePage;
