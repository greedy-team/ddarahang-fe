import { useState, useMemo, Suspense, lazy } from 'react';
import Footer from '../../components/main/Footer/Footer';
import Header from '../../components/main/Header/Header';
import Pagination from '../../components/main/Pagination/Pagination';
import SortDropdown from '../../components/main/SortDropdown/SortDropdown';

import { colors } from '../../styles/Theme';
import { StyledMainPageLayout, StyledContentsWrapper } from './MainPage.style';
import { useSelectOptionContext } from '../../hooks/context/useSelectOptionContext';
import { SortByType } from '../../types';
import useSubmitOption from '../../hooks/select/useSubmitOption';
import useMediaScreen from '../../hooks/screen/useMediaScreen';
import { useSortOptionContext } from '../../hooks/context/useSortOptionContext';
import Loading from '../../components/common/Loading/Loading';

const TravelVideoList = lazy(() => import('../../components/main/TravelVideoList/TravelVideoList'));

const MainPage = () => {
  const [currentPageNumber, setCurrentPageNumber] = useState<number>(1);
  const { setSortOption } = useSortOptionContext();

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

  return (
    <StyledMainPageLayout>
      <Header
        color={colors.WHITE}
        onSubmitOption={handleSubmitOption}
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
          </Suspense>
        )}
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
