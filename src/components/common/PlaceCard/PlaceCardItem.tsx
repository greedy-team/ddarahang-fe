import { useEffect, useState } from 'react';
import { OneDayCourseType } from '../../../types';
import { PlaceCardContainer, PlaceCardWrapper, PlaceCircleStep } from './PlaceCardItem.style';

interface PlaceCardProps {
  ondayCourse: OneDayCourseType;
  number: number;
  onClickPanel: (placeName: string) => void;
  selectedPanel: string | null;
}

const PlaceCardItem = ({ selectedPanel, ondayCourse, number, onClickPanel }: PlaceCardProps) => {
  const [isSelected, setIsSelected] = useState(false);

  useEffect(() => {
    if (selectedPanel === ondayCourse.place) {
      setIsSelected(!isSelected);
    }
  }, [selectedPanel]);

  return (
    <PlaceCardWrapper>
      <PlaceCircleStep>{number + 1}</PlaceCircleStep>
      <PlaceCardContainer
        isSelected={isSelected}
        onClick={() => onClickPanel(ondayCourse.place)}
      >
        <span>{ondayCourse.place}</span>
      </PlaceCardContainer>
    </PlaceCardWrapper>
  );
};

export default PlaceCardItem;
