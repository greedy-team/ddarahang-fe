import { useState, useMemo, Suspense, lazy, useEffect } from 'react';
import Footer from '../../components/main/Footer/Footer';
import Header from '../../components/main/Header/Header';
import Pagination from '../../components/main/Pagination/Pagination';
import SortDropdown from '../../components/main/SortDropdown/SortDropdown';

import { colors } from '../../styles/Theme';
import { StyledMainPageLayout, StyledContentsWrapper } from './MainPage.style';
import { useSelectOptionContext } from '../../hooks/context/useSelectOptionContext';
import { SortByType } from '../../types';
import useMediaScreen from '../../hooks/screen/useMediaScreen';
import { useSortOptionContext } from '../../hooks/context/useSortOptionContext';
import Loading from '../../components/common/Loading/Loading';
import useTravelVideoList from '../../hooks/quries/useGetTravelVideoList';

const TravelVideoList = lazy(() => import('../../components/main/TravelVideoList/TravelVideoList'));

const MainPage = () => {
  const savedPageNumber = localStorage.getItem('currentPageNumber');
  const initialPageNumber = savedPageNumber ? parseInt(savedPageNumber, 10) : 1;

  const [currentPageNumber, setCurrentPageNumber] = useState<number>(initialPageNumber);
  const { setSortOption } = useSortOptionContext();

  const { selectedOption } = useSelectOptionContext();

  const { videoListResponse, loading, error, getTravelVideoList } = useTravelVideoList({
    sortField: 'uploadDate',
    countryName: selectedOption.countryName,
    regionName: selectedOption.selectedOptionLabel,
    pageNumber: 0,
  });

  const videoList = videoListResponse?.content ?? [];
  const totalPages = videoListResponse?.totalPages ?? 0;
  const currentPage = videoListResponse?.number ?? 0;

  const { videoNumberInPage } = useMediaScreen();

  useEffect(() => {
    localStorage.setItem('currentPageNumber', String(currentPageNumber));
  }, [currentPageNumber]);

  const handleSubmitDropdown = (sortBy: SortByType) => {
    getTravelVideoList({
      sortField: sortBy,
      countryName: selectedOption.countryName,
      regionName: selectedOption.selectedOptionLabel,
      pageNumber: 0,
    });

    setSortOption(sortBy);
  };

  const handleSubmitOption = () => {
    getTravelVideoList({
      sortField: 'uploadDate',
      countryName: selectedOption.countryName,
      regionName: selectedOption.selectedOptionLabel,
      pageNumber: 0,
    });

    setCurrentPageNumber(1);
  };

  return (
    <StyledMainPageLayout>
      <Header
        onSubmitOption={handleSubmitOption}
        setCurrentPageNumber={setCurrentPageNumber}
      />
      <SortDropdown onSubmitDropdown={handleSubmitDropdown} />
      <StyledContentsWrapper>
        {loading ? (
          <Loading loading={true} />
        ) : (
          <Suspense fallback={<Loading loading={true} />}>
            <TravelVideoList
              error={error}
              videoNumberInPage={videoNumberInPage}
              currentPageNumber={currentPageNumber}
              videoList={videoList}
            />
            <Pagination
              color={colors.WHITE}
              currentPageNumber={currentPage}
              totalPageNumber={totalPages}
              onPageClick={setCurrentPageNumber}
            />
          </Suspense>
        )}
      </StyledContentsWrapper>
      <Footer />
    </StyledMainPageLayout>
  );
};

export default MainPage;
