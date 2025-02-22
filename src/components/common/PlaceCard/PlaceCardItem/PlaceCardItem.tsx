import { TravelCourses } from '../../../../types';
import { PlaceCardContainer, PlaceCardWrapper, PlaceStep } from './PlaceCardItem.style';

interface PlaceCardProps {
  travelCources: Omit<TravelCourses, 'day'>;
  onClick: (event: React.MouseEvent<HTMLDivElement>) => void;
}

const PlaceCardItem = ({ travelCources }: PlaceCardProps) => {
  return (
    <PlaceCardWrapper>
      <PlaceStep>{travelCources.orderInDay}</PlaceStep>
      <PlaceCardContainer>
        <span>{travelCources.placeName}</span>
      </PlaceCardContainer>
    </PlaceCardWrapper>
  );
};

export default PlaceCardItem;
