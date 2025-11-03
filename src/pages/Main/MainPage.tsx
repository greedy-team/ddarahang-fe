import { Suspense, lazy, startTransition } from 'react';
import Footer from '../../components/main/Footer/Footer';
import Header from '../../components/main/Header/Header';
import SortDropdown from '../../components/main/SortDropdown/SortDropdown';
import Loading from '../../components/common/Loading/Loading';
import { StyledMainPageLayout, StyledContentsWrapper } from './MainPage.style';
import { SortByType } from '../../types';
import { useSortOptionContext } from '../../hooks/context/useSortOptionContext';
import DeferredComponent from '../../components/common/Deffered/DefferedComponent';
const TravelVideoList = lazy(() => import('../../components/main/TravelVideoList/TravelVideoList'));

const MainPage = () => {
  const { setSortOption } = useSortOptionContext();

  const handleSubmitDropdown = (sortBy: SortByType) => {
    startTransition(() => {
      setSortOption(sortBy);
    });
  };

  const handleSubmitOption = () => {
    startTransition(() => {
      setSortOption('uploadDate');
    });
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
