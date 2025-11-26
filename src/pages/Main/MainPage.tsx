import { useState, Suspense, lazy, useEffect } from 'react';
import Footer from '../../components/main/Footer/Footer';
import Header from '../../components/main/Header/Header';
import Pagination from '../../components/main/Pagination/Pagination';
import SortDropdown from '../../components/main/SortDropdown/SortDropdown';

import { colors } from '../../styles/Theme';
import { StyledMainPageLayout, StyledContentsWrapper } from './MainPage.style';
import { useSelectOptionContext } from '../../hooks/context/useSelectOptionContext';
import { CountryType, SortByType } from '../../types';
import { useSortOptionContext } from '../../hooks/context/useSortOptionContext';
import Loading from '../../components/common/Loading/Loading';
import useTravelVideoList from '../../hooks/quries/useGetTravelVideoList';
import { useNavigate, useSearchParams } from 'react-router-dom';

const TravelVideoList = lazy(() => import('../../components/main/TravelVideoList/TravelVideoList'));

const MainPage = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const initialCountryName = (searchParams.get('country') as CountryType) || '';
  const initialRegionName = searchParams.get('region') || '';
  const initialSortOption = (searchParams.get('sort') as SortByType) || 'uploadDate';
  const initialPageNumber = parseInt(searchParams.get('page') || '1', 10);

  const [isInitialized, setIsInitialized] = useState(false);
  const [currentPageNumber, setCurrentPageNumber] = useState<number>(initialPageNumber);
  const { sortOption, setSortOption } = useSortOptionContext();
  const { selectedOption, setSelectedOption } = useSelectOptionContext();

  const { videoListResponse, loading, error, getTravelVideoList } = useTravelVideoList({
    sortField: sortOption,
    countryName: selectedOption.countryName,
    regionName: selectedOption.selectedOptionLabel,
    pageNumber: currentPageNumber - 1,
  });

  const videoList = videoListResponse?.content ?? [];
  const totalPages = videoListResponse?.totalPages ?? 0;

  useEffect(() => {
    setSortOption(initialSortOption);
    setSelectedOption({
      countryName: initialCountryName,
      selectedOptionLabel: initialRegionName,
      isCountryOption: initialRegionName === '',
    });
    setCurrentPageNumber(initialPageNumber);
    setIsInitialized(true);
  }, [searchParams]);

  useEffect(() => {
    if (isInitialized) {
      const newSearchParams = new URLSearchParams();
      if (selectedOption.countryName) newSearchParams.set('country', selectedOption.countryName);
      if (selectedOption.selectedOptionLabel) newSearchParams.set('region', selectedOption.selectedOptionLabel);
      if (sortOption) newSearchParams.set('sort', sortOption);
      if (currentPageNumber) newSearchParams.set('page', String(currentPageNumber));
      navigate(`?${newSearchParams.toString()}`, { replace: true });

      getTravelVideoList({
        sortField: sortOption,
        countryName: selectedOption.countryName,
        regionName: selectedOption.selectedOptionLabel,
        pageNumber: currentPageNumber - 1,
      });
    }
  }, [isInitialized, currentPageNumber, selectedOption, sortOption]);

  const handlePageNumber = (movePageNumber: number) => {
    setCurrentPageNumber(movePageNumber);
  };

  const handleSubmitDropdown = (sortBy: SortByType) => {
    setSortOption(sortBy);
    setCurrentPageNumber(1);
  };

  const handleSubmitOption = () => {
    setSortOption('uploadDate');
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
              videoList={videoList}
              isFavoritePage={false}
            />
            <Pagination
              color={colors.WHITE}
              currentPageNumber={currentPageNumber}
              totalPageNumber={totalPages}
              onPageClick={handlePageNumber}
            />
          </Suspense>
        )}
      </StyledContentsWrapper>
      <Footer />
    </StyledMainPageLayout>
  );
};

export default MainPage;
