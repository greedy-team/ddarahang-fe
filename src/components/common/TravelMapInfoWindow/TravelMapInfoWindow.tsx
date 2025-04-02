import { MapInfoWindowContainer, StyledGoogleLink, BodyContent, GoogleLink } from './TravelMapInfoWindow.style';

interface TravelMapInfoWindowProps {
  address: string;
  placeName: string;
}

const TravelMapInfoWindow = ({ address, placeName }: TravelMapInfoWindowProps) => {
  return (
    <MapInfoWindowContainer id='content'>
      <BodyContent id='bodyContent'>
        <p>{address}</p>
        <StyledGoogleLink>
          <GoogleLink
            href={`https://www.google.com/maps/search/?q=${placeName}+${address}`}
            target='_blank'
          >
            Google 지도로 확인하기
          </GoogleLink>
        </StyledGoogleLink>
      </BodyContent>
    </MapInfoWindowContainer>
  );
};

export default TravelMapInfoWindow;
