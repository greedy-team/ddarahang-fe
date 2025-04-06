import { useState } from 'react';
import GlobalHeader from '../../components/common/GlobalHeader/GlobalHeader';
import TabPanel from '../../components/common/Tabs/TabPanel/TabPanel';
import TravelMap from '../../components/common/TravelMap/TravelMap';
import TravelMapWrapper from '../../components/common/TravelMapWrapper/TravelMapWrapper';
import FavoriteTabs from '../../components/favorite/FavoriteTabs/FavoriteTabs';
import { TagType } from '../../types';
import { StyledFavoritePageLayout, FavoritePlaceListSection, TitleWrapper } from './FavoritePage.style';

const FavoritePage = () => {
  const courses = [
    {
      id: 1,
      placeName: '쇼핑하실래요?',
      address: '주소1',
      tag: '쇼핑' as TagType,
      orderInday: 1,
      position: { lat: 37.5365, lng: 126.978 },
      day: 1,
    },
    {
      id: 2,
      placeName: '해장국밥 맛집',
      address: '주소1',
      tag: '음식' as TagType,
      orderInday: 1,
      position: { lat: 37.5665, lng: 126.978 },
      day: 1,
    },
  ];

  const favoriteListTitle = '나만의 여행 장소 목록';
  const favoriteListDescription = '기본 여행 장소 목록';

  const [selectedTagTab, setSelectedTagTab] = useState<TagType>('전체');

  const filteredCourses =
    selectedTagTab === '전체' ? courses : courses.filter((course) => course.tag === selectedTagTab);

  return (
    <>
      <GlobalHeader
        isMobile={false}
        isIconVisible={false}
        isMainHeader={false}
      />
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
          <TabPanel oneDayCourse={filteredCourses} />
        </FavoritePlaceListSection>
        <TravelMapWrapper>
          <TravelMap oneDayCourses={courses} />
        </TravelMapWrapper>
      </StyledFavoritePageLayout>
    </>
  );
};

export default FavoritePage;
