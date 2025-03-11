import { useEffect, useState, useMemo, Suspense } from 'react';
import Footer from '../../components/main/Footer/Footer';
import Header from '../../components/main/Header/Header';
import Pagination from '../../components/main/Pagination/Pagination';
import SortDropdown from '../../components/main/SortDropdown/SortDropdown';
import TravelVideoList from '../../components/main/TravelVideoList/TravelVideoList';

import { colors } from '../../styles/Theme';
import { StyledMainPageLayout, StyledContentsWrapper, StyledErrorMessage } from './MainPage.style';

import { useSelectOptionContext } from '../../hooks/context/useSelectOptionContext';
import { SortByType } from '../../types';
import useSubmitOption from '../../hooks/select/useSubmitOption';
import useMediaScreen from '../../hooks/screen/useMediaScreen';
import { ERROR_MESSAGE, LOAD_ERROR_MESSAGE, NO_DATA_ERROR_MESSAGE } from '../../constants';
import { useSortOptionContext } from '../../hooks/context/useSortOptionContext';
import Loading from '../../components/common/Loading/Loading';

const renderMainErrorMessage = (handleSubmitOption: () => void, message: string) => {
  return (
    <StyledMainPageLayout>
      <Header
        color={colors.WHITE}
        onSubmitOption={handleSubmitOption}
      />
      <StyledContentsWrapper>
        <StyledErrorMessage>
          <p>{message}</p>
          <span>{ERROR_MESSAGE}</span>
        </StyledErrorMessage>
      </StyledContentsWrapper>
      <Footer />
    </StyledMainPageLayout>
  );
};

const MainPage = () => {
  const [currentPageNumber, setCurrentPageNumber] = useState<number>(1);
  const { setSortOption } = useSortOptionContext();
  const [showNoDataMessage, setShowNoDataMessage] = useState(false);

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

  useEffect(() => {
    if (!loading) {
      setShowNoDataMessage(videoList.length === 0);
    }
  }, [loading, videoList]);

  if (showNoDataMessage) return renderMainErrorMessage(handleSubmitOption, NO_DATA_ERROR_MESSAGE);
  if (error) renderMainErrorMessage(handleSubmitOption, LOAD_ERROR_MESSAGE);

  return (
    <StyledMainPageLayout>
      <Header
        color={colors.WHITE}
        onSubmitOption={handleSubmitOption}
      />
      <SortDropdown onSubmitDropdown={handleSubmitDropdown} />
      <StyledContentsWrapper>
        <Suspense fallback={<Loading />}>
          <TravelVideoList
            videoNumberInPage={videoNumberInPage}
            currentPageNumber={currentPageNumber}
            videoList={videoList}
          />
        </Suspense>
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
