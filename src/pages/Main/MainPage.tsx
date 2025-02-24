import Footer from '../../components/main/Footer/Footer';
import Header from '../../components/main/Header/Header';
import Pagination from '../../components/main/Pagination/Pagination';
import SortDropdown from '../../components/main/SortDropdown/SortDropdown';
import YoutubeCardList from '../../components/main/TravelVideoList/TravelVideoList';
import useGetTravelVideoList from '../../hooks/quries/useGetTravelVideoList';
import { colors } from '../../styles/Theme';
import { MainPageLayout } from './MainPage.style';
import { ContentsWrapper } from './MainPage.style';

const MainPage = () => {
  const { loading, error, videoList } = useGetTravelVideoList();

  if (loading) {
    return <p>로딩 중...</p>;
  }

  if (videoList) {
    console.log(videoList);
  }

  return (
    <MainPageLayout>
      <Header color={colors.WHITE} />
      <ContentsWrapper>
        <SortDropdown />
        <YoutubeCardList videoList={videoList} />
        <Pagination
          color={colors.WHITE}
          pageSize={5}
          onClick={() => {}}
        />
      </ContentsWrapper>
      <Footer />
    </MainPageLayout>
  );
};

export default MainPage;
