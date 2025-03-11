import { useState, useMemo } from 'react';

import Footer from '../../components/main/Footer/Footer';
import Header from '../../components/main/Header/Header';
import Pagination from '../../components/main/Pagination/Pagination';
import SortDropdown from '../../components/main/SortDropdown/SortDropdown';
import TravelVideoList from '../../components/main/TravelVideoList/TravelVideoList';

import { colors } from '../../styles/Theme';
import { StyledMainPageLayout, StyledContentsWrapper, StyledErrorMessage } from './MainPage.style';

import { useSelectOptionContext } from '../../hooks/context/useSelectOptionContext';
import { SortByType } from '../../types';
import Loading from '../../components/common/Loading/Loading';
import useMediaScreen from '../../hooks/screen/useMediaScreen';
import { ERROR_MESSAGE, LOAD_ERROR_MESSAGE, NO_DATA_ERROR_MESSAGE } from '../../constants';
import { useSortOptionContext } from '../../hooks/context/useSortOptionContext';
import useTravelVideoList from '../../hooks/quries/useGetTravelVideoList';

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
  const { selectedOption } = useSelectOptionContext();

  const { videoList, loading, error, getTravelVideoList } = useTravelVideoList({
    filter: 'default',
    countryName: selectedOption.countryName,
    regionName: selectedOption.selectedOptionLabel,
  });

  const { videoNumberInPage } = useMediaScreen();

  const totalPageNumber = useMemo(() => Math.ceil(videoList.length / videoNumberInPage), [videoList]);

  const handleSubmitOption = () => {
    getTravelVideoList({
      filter: 'default',
      countryName: selectedOption.countryName,
      regionName: selectedOption.selectedOptionLabel,
    });
  };

  const handleSubmitDropdown = (sortBy: SortByType) => {
    getTravelVideoList({
      filter: sortBy,
      countryName: selectedOption.countryName,
      regionName: selectedOption.selectedOptionLabel,
    });

    setSortOption(sortBy);
  };

  if (loading) return <Loading loading={loading} />;
  if (videoList.length === 0) return renderMainErrorMessage(handleSubmitOption, NO_DATA_ERROR_MESSAGE);
  if (error) return renderMainErrorMessage(handleSubmitOption, LOAD_ERROR_MESSAGE);

  return (
    <StyledMainPageLayout>
      <Header
        color={colors.WHITE}
        onSubmitOption={handleSubmitOption}
      />
      <SortDropdown onSubmitDropdown={handleSubmitDropdown} />
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
