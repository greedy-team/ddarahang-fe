import { useEffect, useState } from 'react';
import { FavoritePlaceType, OneDayCourseType } from '../../../types';
import {
  PlaceCardContainer,
  PlaceCardWrapper,
  PlaceCardHeader,
  PlaceCircleStep,
  PlaceName,
  FavoriteButton,
} from './PlaceCardItem.style';
import { useSelectedPanel } from '../../../hooks/context/useSelectedPanelContext';
import Tag from '../../detail/Tag/Tag';
import FavoriteIcon from '/icon/favorite.svg';

interface PlaceCardProps {
  placeItem: OneDayCourseType | FavoritePlaceType;
  orderInList: number;
}

const PlaceCardItem = ({ placeItem, orderInList }: PlaceCardProps) => {
  const [isSelected, setIsSelected] = useState(false);
  const { selectedPanel, setSelectedPanel } = useSelectedPanel();

  useEffect(() => {
    if (selectedPanel === placeItem.placeName) {
      setIsSelected(!isSelected);
    } else {
      setIsSelected(false);
    }
  }, [selectedPanel]);

  return (
    <PlaceCardWrapper>
      <PlaceCircleStep>{orderInList}</PlaceCircleStep>
      <PlaceCardContainer
        $isSelected={isSelected}
        onClick={() => setSelectedPanel(placeItem.placeName)}
      >
        <PlaceCardHeader>
          <PlaceName $isSelected={isSelected}>{placeItem.placeName}</PlaceName>
          <FavoriteButton
            type='button'
            title='찜 버튼'
            aria-label='navigation menu'
            onClick={() => {}}
          >
            <img
              src={FavoriteIcon}
              alt='찜 아이콘'
              width={20}
              height={20}
            />
          </FavoriteButton>
        </PlaceCardHeader>
        <Tag tagName={placeItem.tag} />
      </PlaceCardContainer>
    </PlaceCardWrapper>
  );
};

export default PlaceCardItem;
