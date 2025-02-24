import { useMemo, useState } from 'react';

import Footer from '../../components/main/Footer/Footer';
import Header from '../../components/main/Header/Header';
import Pagination from '../../components/main/Pagination/Pagination';
import SortDropdown from '../../components/main/SortDropdown/SortDropdown';
import TravelVideoList from '../../components/main/TravelVideoList/TravelVideoList';
import useGetTravelVideoList from '../../hooks/quries/useGetTravelVideoList';

import { colors } from '../../styles/Theme';
import { StyledMainPageLayout, StyledContentsWrapper } from './MainPage.style';

import { ITEMS_PER_PAGE } from '../../constants';

const MainPage = () => {
  const [currentPageNumber, setCurrentPageNumber] = useState<number>(1);

  const { loading, error, videoList } = useGetTravelVideoList();

  const totalPageNumber = useMemo(() => Math.ceil(videoList.length / ITEMS_PER_PAGE), [videoList]);

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
      <Header color={colors.WHITE} />
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
