import { useEffect, useState } from 'react';
import { OneDayCourseType } from '../../../types';
import {
  PlaceCardContainer,
  PlaceCardWrapper,
  PlaceCardHeader,
  PlaceCircleStep,
  PlaceName,
} from './PlaceCardItem.style';
import { useSelectedPanel } from '../../../hooks/context/useSelectedPanelContext';
import Tag from '../../detail/Tag/Tag';
import FavoriteToggleButton from '../../favorite/FavoriteToggleButton/FavoriteToggleButton';

interface PlaceCardProps {
  placeItem: OneDayCourseType;
  orderInList: number;
  setIsMobileMapVisible?: (isVisible: boolean) => void;
}

const PlaceCardItem = ({ placeItem, orderInList, setIsMobileMapVisible }: PlaceCardProps) => {
  const [isSelected, setIsSelected] = useState(false);
  const { selectedPanel, setSelectedPanel } = useSelectedPanel();

  useEffect(() => {
    if (selectedPanel === placeItem.placeName) {
      setIsSelected(!isSelected);
    } else {
      setIsSelected(false);
    }
  }, [selectedPanel]);

  const handlePlaceCardClick = (placeName: string) => {
    if (selectedPanel === placeName) {
      setSelectedPanel('');
    } else {
      setSelectedPanel(placeName);
      setIsMobileMapVisible && setIsMobileMapVisible(true);
    }
  };

  return (
    <PlaceCardWrapper>
      <PlaceCircleStep>{orderInList}</PlaceCircleStep>
      <PlaceCardContainer
        $isSelected={isSelected}
        onClick={() => handlePlaceCardClick(placeItem.placeName)}
      >
        <PlaceCardHeader>
          <PlaceName $isSelected={isSelected}>{placeItem.placeName}</PlaceName>
          <FavoriteToggleButton placeItem={placeItem} />
        </PlaceCardHeader>
        <Tag tagName={placeItem.tag} />
      </PlaceCardContainer>
    </PlaceCardWrapper>
  );
};

export default PlaceCardItem;
