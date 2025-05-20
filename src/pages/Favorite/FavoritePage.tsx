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

const FavoritePage = () => {
  const { favoritePlaces, loading, error } = useFavoritePlaces();

  const favoriteListTitle = '나만의 여행 장소 목록';
  const favoriteListDescription = '기본 여행 장소 목록';

  const [selectedTagTab, setSelectedTagTab] = useState<TagType>('전체');

  const filteredPlaces =
    selectedTagTab === '전체' ? favoritePlaces : favoritePlaces.filter((place) => place.tag === selectedTagTab);

  const mapData = favoritePlaces.map((place, index) => ({
    placeId: index + 1,
    placeName: place.placeName,
    address: place.address,
    tag: place.tag as TagType,
    orderInday: place.orderInday,
    position: {
      lat: place.position.lat,
      lng: place.position.lng,
    },
    day: 1,
  }));

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
            <TabPanel oneDayCourse={filteredPlaces} />
          </FavoritePlaceListSection>
          <TravelMapWrapper>
            <TravelMap oneDayCourses={mapData} />
          </TravelMapWrapper>
        </StyledFavoritePageLayout>
      )}
    </>
  );
};

export default FavoritePage;
