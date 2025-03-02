import { useMemo, useState } from 'react';

import Footer from '../../components/main/Footer/Footer';
import Header from '../../components/main/Header/Header';
import Pagination from '../../components/main/Pagination/Pagination';
import SortDropdown from '../../components/main/SortDropdown/SortDropdown';
import TravelVideoList from '../../components/main/TravelVideoList/TravelVideoList';

import { colors } from '../../styles/Theme';
import { StyledMainPageLayout, StyledContentsWrapper, StyledErrorMessage } from './MainPage.style';

import { useSelectOptionContext } from '../../hooks/select/useSelectOptionContext';
import { SortByType } from '../../types';
import Loading from '../../components/common/Loading/Loading';
import useSubmitOption from '../../hooks/select/useSubmitOption';
import useMediaScreen from '../../hooks/screen/useMediaScreen';
import { ERROR_MESSAGE, LOAD_ERROR_MESSAGE, NO_DATA_ERROR_MESSAGE } from '../../constants';

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

  if (videoList.length === 0) {
    return (
      <>
        <StyledMainPageLayout>
          <Header
            color={colors.WHITE}
            onSubmitOption={handleSubmitOption}
          />
          <StyledContentsWrapper>
            <StyledErrorMessage>
              <p>{NO_DATA_ERROR_MESSAGE}</p>
              <span>{ERROR_MESSAGE}</span>
            </StyledErrorMessage>
          </StyledContentsWrapper>
          <Footer />
        </StyledMainPageLayout>
      </>
    );
  }

  if (error) {
    return (
      <>
        <StyledMainPageLayout>
          <Header
            color={colors.WHITE}
            onSubmitOption={handleSubmitOption}
          />
          <StyledContentsWrapper>
            <StyledErrorMessage>
              <p>{LOAD_ERROR_MESSAGE}</p>
              <span>{ERROR_MESSAGE}</span>
            </StyledErrorMessage>
          </StyledContentsWrapper>
          <Footer />
        </StyledMainPageLayout>
      </>
    );
  }

  return (
    <StyledMainPageLayout>
      <Header
        color={colors.WHITE}
        onSubmitOption={handleSubmitOption}
      />
      <Loading loading={loading} />
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
