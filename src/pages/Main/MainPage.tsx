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

  const { videoList, loading, error, getTravelVideoList } = useTravelVideoList({
    filter: 'default',
    countryName: selectedOption.countryName,
    regionName: selectedOption.selectedOptionLabel,
  });

  const { videoNumberInPage } = useMediaScreen();

  const totalPageNumber = useMemo(() => Math.ceil(videoList.length / videoNumberInPage), [videoList]);

  useEffect(() => {
    localStorage.setItem('currentPageNumber', String(currentPageNumber));
  }, [currentPageNumber]);

  const handleSubmitDropdown = (sortBy: SortByType) => {
    getTravelVideoList({
      filter: sortBy,
      countryName: selectedOption.countryName,
      regionName: selectedOption.selectedOptionLabel,
    });

    setSortOption(sortBy);
  };

  const handleSubmitOption = () => {
    getTravelVideoList({
      filter: 'default',
      countryName: selectedOption.countryName,
      regionName: selectedOption.selectedOptionLabel,
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
              currentPageNumber={currentPageNumber}
              totalPageNumber={totalPageNumber}
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
