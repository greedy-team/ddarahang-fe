import { Outlet, useLocation } from 'react-router-dom';
import GlobalHeader from '../common/GlobalHeader/GlobalHeader';
import { StyledPageLayout } from './PageLayout.style';

const PageLayout = () => {
  const { pathname } = useLocation();

  const isMain = pathname === '/';

  return (
    <StyledPageLayout>
      <GlobalHeader isMainHeader={isMain} />
      <Outlet />
    </StyledPageLayout>
  );
};

export default PageLayout;
