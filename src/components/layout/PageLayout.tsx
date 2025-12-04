import { Outlet, useLocation } from 'react-router-dom';
import GlobalHeader from '../common/GlobalHeader/GlobalHeader';
import { StyledPageLayout } from './PageLayout.style';
import useMobile from '../../hooks/screen/useMobile';

const PageLayout = () => {
  const { pathname } = useLocation();
  const isMobile = useMobile().isMobile;
  const isMain = pathname === '/';
  const isTravelCoursePage = pathname.startsWith('/travelcourse/');

  const notShowHeader = isMobile && isTravelCoursePage;

  return (
    <StyledPageLayout>
      {!notShowHeader && <GlobalHeader isMainHeader={isMain} />}
      <Outlet />
    </StyledPageLayout>
  );
};

export default PageLayout;
