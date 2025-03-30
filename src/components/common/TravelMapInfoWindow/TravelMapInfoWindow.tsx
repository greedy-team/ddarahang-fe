import { MapInfoWindowContainer, StyledGoogleLink, BodyContent, GoogleLink } from './TravelMapInfoWindow.style';

interface TravelMapInfoWindowProps {
  address: string;
}

const TravelMapInfoWindow = ({ address }: TravelMapInfoWindowProps) => {
  return (
    <MapInfoWindowContainer id='content'>
      <BodyContent id='bodyContent'>
        <p>{address}</p>
        <StyledGoogleLink>
          <GoogleLink
            href='https://www.google.com/maps/search/?q=${place}+${address}'
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
