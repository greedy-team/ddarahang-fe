import { useEffect, useState } from 'react';
import { OneDayCourseType } from '../../../types';
import { PlaceCardContainer, PlaceCardWrapper, PlaceCircleStep } from './PlaceCardItem.style';
import { useSelectedPanel } from '../../../hooks/select/useSelectedPanel';

interface PlaceCardProps {
  oneDayCourse: OneDayCourseType;
  orderInDay: number;
  onClickPanel: (placeName: string) => void;
}

const PlaceCardItem = ({ oneDayCourse, orderInDay, onClickPanel }: PlaceCardProps) => {
  const [isSelected, setIsSelected] = useState(false);
  const { selectedPanel } = useSelectedPanel();

  useEffect(() => {
    if (selectedPanel === oneDayCourse.placeName) {
      setIsSelected(!isSelected);
    } else {
      setIsSelected(false);
    }
  }, [selectedPanel]);

  return (
    <PlaceCardWrapper>
      <PlaceCircleStep>{orderInDay}</PlaceCircleStep>
      <PlaceCardContainer
        $isSelected={isSelected}
        onClick={() => onClickPanel(oneDayCourse.placeName)}
      >
        <span>{oneDayCourse.placeName}</span>
      </PlaceCardContainer>
    </PlaceCardWrapper>
  );
};

export default PlaceCardItem;
