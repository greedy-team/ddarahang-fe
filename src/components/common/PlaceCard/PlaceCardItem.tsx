import { TravelCourses } from '../../../types';
import { PlaceCardContainer, PlaceCardWrapper, PlaceCircleStep } from './PlaceCardItem.style';

interface PlaceCardProps {
  travelCources: Omit<TravelCourses, 'day'>;
  onClick: (event: React.MouseEvent<HTMLDivElement>) => void;
}

const PlaceCardItem = ({ travelCources }: PlaceCardProps) => {
  return (
    <PlaceCardWrapper>
      <PlaceCircleStep>{travelCources.orderInDay}</PlaceCircleStep>
      <PlaceCardContainer>
        <span>{travelCources.placeName}</span>
      </PlaceCardContainer>
    </PlaceCardWrapper>
  );
};

export default PlaceCardItem;
