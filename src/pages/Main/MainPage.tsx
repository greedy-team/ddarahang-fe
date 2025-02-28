import { useMemo, useState } from 'react';

import Footer from '../../components/main/Footer/Footer';
import Header from '../../components/main/Header/Header';
import Pagination from '../../components/main/Pagination/Pagination';
import SortDropdown from '../../components/main/SortDropdown/SortDropdown';
import TravelVideoList from '../../components/main/TravelVideoList/TravelVideoList';

import { colors } from '../../styles/Theme';
import { StyledMainPageLayout, StyledContentsWrapper } from './MainPage.style';

import { useSelectOptionContext } from '../../hooks/select/useSelectOptionContext';
import { SortByType } from '../../types';
import Loading from '../../components/common/Loading/Loading';
import useSubmitOption from '../../hooks/select/useSubmitOption';
import useMediaScreen from '../../hooks/screen/useMediaScreen';

const MainPage = () => {
  const [currentPageNumber, setCurrentPageNumber] = useState<number>(1);
  const [sortOption, setSortOption] = useState<SortByType>('default');

  const { videoList, loading, error, handleSubmitOption, getTravelVideoList } = useSubmitOption();
  const { selectedOption } = useSelectOptionContext();
  const { videoNumberInPage } = useMediaScreen();

  const totalPageNumber = useMemo(() => Math.ceil(videoList.length / videoNumberInPage), [videoList]);

  const handleSubmitDropdown = (sortBy: SortByType) => {
    getTravelVideoList({
      filter: sortBy,
      countryName: selectedOption.countryName,
      regionName: selectedOption.selectedOptionLabel,
    });

    setSortOption(sortBy);
  };

  /**추후 에러, 로딩 공통컴포넌트
   * 만들 방법 생각해볼 예정
   */
  if (loading) return <Loading />;
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
          videoNumberInPage={videoNumberInPage}
          currentPageNumber={currentPageNumber}
          videoList={videoList}
        />
        <Pagination
          color={colors.WHITE}
          currentPageNumber={currentPageNumber}
          totalPageNumber={totalPageNumber}
          onPageClick={setCurrentPageNumber}
        />
      </StyledContentsWrapper>
      <Footer />
    </StyledMainPageLayout>
  );
};

export default MainPage;
