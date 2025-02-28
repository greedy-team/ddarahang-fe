import { TravelCourses } from '../../../types';
import { PlaceCardContainer, PlaceCardWrapper, PlaceCircleStep } from './PlaceCardItem.style';

interface PlaceCardProps {
  travelCources: Omit<TravelCourses, 'day'>;
  color: string;
  onClickPanel: (placeName: string) => void;
}

const PlaceCardItem = ({ travelCources, onClickPanel, color }: PlaceCardProps) => {
  return (
    <PlaceCardWrapper>
      <PlaceCircleStep>{travelCources.orderInDay}</PlaceCircleStep>
      <PlaceCardContainer
        color={color}
        onClick={() => onClickPanel(travelCources.placeName)}
      >
        <span>{travelCources.placeName}</span>
      </PlaceCardContainer>
    </PlaceCardWrapper>
  );
};

export default PlaceCardItem;
