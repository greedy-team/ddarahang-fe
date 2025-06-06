import { useEffect, useState } from 'react';
import { OneDayCourseType } from '../../../types';
import { PlaceCardContainer, PlaceCardWrapper, PlaceCircleStep, PlaceName } from './PlaceCardItem.style';
import { useSelectedPanel } from '../../../hooks/context/useSelectedPanelContext';
import Tag from '../../detail/Tag/Tag';

interface PlaceCardProps {
  oneDayCourse: OneDayCourseType;
  orderInDay: number;
  setSelectedPanel: React.Dispatch<React.SetStateAction<string>>;
}

const PlaceCardItem = ({ oneDayCourse, orderInDay, setSelectedPanel }: PlaceCardProps) => {
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
        onClick={() => setSelectedPanel(oneDayCourse.placeName)}
      >
        <PlaceName $isSelected={isSelected}>{oneDayCourse.placeName}</PlaceName>
        <Tag tagName={oneDayCourse.tag} />
      </PlaceCardContainer>
    </PlaceCardWrapper>
  );
};

export default PlaceCardItem;
