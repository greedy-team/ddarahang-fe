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
import { useSelectFavoriteListContext } from '../../../hooks/context/useSelectFavotieListContext';

interface PlaceCardProps {
  placeItem: OneDayCourseType | FavoritePlaceType;
  orderInList: number;
}

const PlaceCardItem = ({ placeItem, orderInList }: PlaceCardProps) => {
  const [isSelected, setIsSelected] = useState(false);
  const { selectedPanel, setSelectedPanel } = useSelectedPanel();
  const { setIsFavoriteListSelectOpen } = useSelectFavoriteListContext();

  useEffect(() => {
    if (selectedPanel === placeItem.placeName) {
      setIsSelected(!isSelected);
    } else {
      setIsSelected(false);
    }
  }, [selectedPanel]);

  const handleOpenFavoriteListSelect = () => {
    setIsFavoriteListSelectOpen(true);
  };

  const handlePlaceCardClick = (placeName: string) => {
    if (selectedPanel === placeName) {
      setSelectedPanel('');
    } else {
      setSelectedPanel(placeName);
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
          <FavoriteButton
            type='button'
            title='찜 버튼'
            aria-label='navigation menu'
            onClick={(e) => {
              e.stopPropagation();
              handleOpenFavoriteListSelect();
            }}
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
