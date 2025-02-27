import { useMemo, useState } from 'react';

import Footer from '../../components/main/Footer/Footer';
import Header from '../../components/main/Header/Header';
import Pagination from '../../components/main/Pagination/Pagination';
import SortDropdown from '../../components/main/SortDropdown/SortDropdown';
import TravelVideoList from '../../components/main/TravelVideoList/TravelVideoList';

import { colors } from '../../styles/Theme';
import { StyledMainPageLayout, StyledContentsWrapper } from './MainPage.style';

import { VIDEO_NUMBERS_IN_PAGE } from '../../constants';
import { useSelectOptionContext } from '../../hooks/select/useSelectOptionContext';
import useTravelVideoList from '../../hooks/quries/useGetTravelVideoList';
import { SortByType } from '../../types';

const MainPage = () => {
  const [currentPageNumber, setCurrentPageNumber] = useState<number>(1);
  const [sortOption, setSortOption] = useState<SortByType>('default');

  const { videoList, loading, error, getTravelVideoList } = useTravelVideoList({
    filter: 'default',
    countryName: '대한민국',
    regionName: '',
  });

  const { selectedOption } = useSelectOptionContext();
  const totalPageNumber = useMemo(() => Math.ceil(videoList.length / VIDEO_NUMBERS_IN_PAGE), [videoList]);

  const handleSubmitOption = () => {
    if (selectedOption.selectedOptionLabel === '여행 지역 검색') {
      getTravelVideoList({ filter: 'default', countryName: selectedOption.countryName, regionName: '' });
    } else {
      getTravelVideoList({
        filter: 'default',
        countryName: selectedOption.countryName,
        regionName: selectedOption.selectedOptionLabel,
      });
    }
  };

  const handleSubmitDropdown = (sortBy: SortByType) => {
    getTravelVideoList({
      filter: sortBy,
      countryName: selectedOption.countryName,
      regionName: selectedOption.selectedOptionLabel,
    });

    setSortOption(sortBy);
  };

  const handleCurrentPage = (currentPage: number) => {
    setCurrentPageNumber(currentPage);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  /**추후 에러, 로딩 공통컴포넌트
   * 만들 방법 생각해볼 예정
   */
  if (loading) return <p>로딩 중...</p>;
  if (error) return <p>데이터를 불러오는 중 오류가 발생했습니다.</p>;

  return (
    <StyledMainPageLayout>
      <Header
        color={colors.WHITE}
        onSubmitOption={handleSubmitOption}
      />
      <SortDropdown
        sortOption={sortOption}
        onSubmitDropdown={(sortBy: SortByType) => handleSubmitDropdown(sortBy)}
      />
      <StyledContentsWrapper>
        <TravelVideoList
          currentPageNumber={currentPageNumber}
          videoList={videoList}
        />
        <Pagination
          color={colors.WHITE}
          totalPageNumber={totalPageNumber}
          currentPageNumber={currentPageNumber}
          onPageClick={handleCurrentPage}
        />
      </StyledContentsWrapper>
      <Footer />
    </StyledMainPageLayout>
  );
};

export default MainPage;
