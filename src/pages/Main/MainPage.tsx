import { useState, Suspense, lazy, useEffect } from 'react';
import Footer from '../../components/main/Footer/Footer';
import Header from '../../components/main/Header/Header';
import Pagination from '../../components/main/Pagination/Pagination';
import SortDropdown from '../../components/main/SortDropdown/SortDropdown';

import { colors } from '../../styles/Theme';
import { StyledMainPageLayout, StyledContentsWrapper } from './MainPage.style';
import { useSelectOptionContext } from '../../hooks/context/useSelectOptionContext';
import { SortByType } from '../../types';
import { useSortOptionContext } from '../../hooks/context/useSortOptionContext';
import Loading from '../../components/common/Loading/Loading';
import useTravelVideoList from '../../hooks/quries/useGetTravelVideoList';

const TravelVideoList = lazy(() => import('../../components/main/TravelVideoList/TravelVideoList'));

const MainPage = () => {
  const savedPageNumber = localStorage.getItem('currentPageNumber');
  const initialPageNumber = savedPageNumber ? parseInt(savedPageNumber, 10) : 1;

  const [currentPageNumber, setCurrentPageNumber] = useState<number>(initialPageNumber);
  const { sortOption, setSortOption } = useSortOptionContext();

  const { selectedOption } = useSelectOptionContext();

  const { videoListResponse, loading, error, getTravelVideoList } = useTravelVideoList();

  const videoList = videoListResponse?.content ?? [];
  const totalPages = videoListResponse?.totalPages ?? 0;

  useEffect(() => {
    getTravelVideoList({
      sortField: 'uploadDate',
      countryName: selectedOption.countryName,
      regionName: selectedOption.selectedOptionLabel,
      pageNumber: 0,
    });
  }, []);

  useEffect(() => {
    localStorage.setItem('currentPageNumber', String(currentPageNumber));
  }, [currentPageNumber]);

  useEffect(() => {
    getTravelVideoList({
      sortField: 'uploadDate',
      countryName: selectedOption.countryName,
      regionName: selectedOption.selectedOptionLabel,
      pageNumber: currentPageNumber - 1,
    });
  }, [selectedOption]);

  useEffect(() => {
    getTravelVideoList({
      sortField: sortOption,
      countryName: selectedOption.countryName,
      regionName: selectedOption.selectedOptionLabel,
      pageNumber: currentPageNumber - 1,
    });
  }, [currentPageNumber]);

  const handleSubmitDropdown = (sortBy: SortByType) => {
    setSortOption(sortBy);
    setCurrentPageNumber(1);
    getTravelVideoList({
      sortField: sortBy,
      countryName: selectedOption.countryName,
      regionName: selectedOption.selectedOptionLabel,
      pageNumber: 0,
    });
  };

  const handleSubmitOption = () => {
    setCurrentPageNumber(1);
    getTravelVideoList({
      sortField: 'uploadDate',
      countryName: selectedOption.countryName,
      regionName: selectedOption.selectedOptionLabel,
      pageNumber: 0,
    });
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
              videoList={videoList}
            />
            <Pagination
              color={colors.WHITE}
              currentPageNumber={currentPageNumber}
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
