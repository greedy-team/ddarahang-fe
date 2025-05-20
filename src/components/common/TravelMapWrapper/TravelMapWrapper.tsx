import { LOAD_ERROR_MESSAGE, MAP_LOAD_ERROR_MESSAGE } from '../../../constants/messages';
import GlobalHeader from '../GlobalHeader/GlobalHeader';
import { MapContainer } from './TravelMapWrapper.style';
import { Status, Wrapper } from '@googlemaps/react-wrapper';
import { type PropsWithChildren, type ReactNode } from 'react';

const renderMap = (status: Status, children: ReactNode) => {
  switch (status) {
    case Status.LOADING:
      return renderErrorMessage(MAP_LOAD_ERROR_MESSAGE);
    case Status.FAILURE:
      return renderErrorMessage(LOAD_ERROR_MESSAGE);
    case Status.SUCCESS:
      return <>{children}</>;
  }
};

const renderErrorMessage = (children: ReactNode) => (
  <>
    <GlobalHeader
      isMobile={window.innerWidth <= 780}
      isIconVisible={false}
      isMainHeader={false}
    />
    {children}
  </>
);

const TravelMapWrapper = ({ children }: PropsWithChildren) => {
  const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY_DEV;

  return (
    <MapContainer>
      <Wrapper
        apiKey={apiKey}
        render={(status) => renderMap(status, children)}
        libraries={['marker']}
      />
    </MapContainer>
  );
};

export default TravelMapWrapper;
