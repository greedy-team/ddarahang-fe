import { MarkerWrapper, Circle, IconWrapper } from './TravelMapMarker.style';

const TravelMapMarker = ({ number }: { number: number }) => {
  return (
    <MarkerWrapper>
      <Circle>{number}</Circle>
      <IconWrapper>
        <img
          width={15}
          height={17}
          src='./icon/MarkerTriangle.svg'
          alt='마커 세모 아이콘'
        />
      </IconWrapper>
    </MarkerWrapper>
  );
};

export default TravelMapMarker;
