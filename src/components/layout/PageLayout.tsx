import { Outlet, useLocation } from 'react-router-dom';
import useMobile from '../../hooks/screen/useMobile';
import GlobalHeader from '../common/GlobalHeader/GlobalHeader';
import { StyledPageLayout } from './PageLayout.style';

const PageLayout = () => {
  const { isMobile } = useMobile();
  const { pathname } = useLocation();

  const isMain = pathname === '/';

  return (
    <StyledPageLayout>
      <GlobalHeader
        isMainHeader={isMain}
        isMobile={isMobile}
      />
      <Outlet />
    </StyledPageLayout>
  );
};

export default PageLayout;
