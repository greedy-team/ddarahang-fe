import { Suspense, lazy } from 'react';
import Footer from '../../components/main/Footer/Footer';
import Header from '../../components/main/Header/Header';
import SortDropdown from '../../components/main/SortDropdown/SortDropdown';
import { StyledMainPageLayout, StyledContentsWrapper } from './MainPage.style';
import { SortByType } from '../../types';
import { useSortOptionContext } from '../../hooks/context/useSortOptionContext';
import DeferredComponent from '../../components/common/Deferred/DeferredComponent';
import Loading from '../../components/common/Loading/Loading';
import PageLayout from '../../components/layout/PageLayout';

const TravelVideoList = lazy(() => import('../../components/main/TravelVideoList/TravelVideoList'));

const MainPage = () => {
  const { setSortOption } = useSortOptionContext();

  const handleSubmitDropdown = (sortBy: SortByType) => {
    setSortOption(sortBy);
  };

  const handleSubmitOption = () => {
    setSortOption('uploadDate');
  };

  return (
    <StyledMainPageLayout>
      <Header onSubmitOption={handleSubmitOption} />

      <SortDropdown onSubmitDropdown={handleSubmitDropdown} />
      <StyledContentsWrapper>
        <Suspense
          fallback={
            <DeferredComponent>
              <Loading loading={true} />
            </DeferredComponent>
          }
        >
          <TravelVideoList isFavoritePage={false} />
        </Suspense>
      </StyledContentsWrapper>
      <Footer />
    </StyledMainPageLayout>
  );
};

export default MainPage;
