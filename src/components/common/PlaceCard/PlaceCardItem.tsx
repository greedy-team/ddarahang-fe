import { useEffect, useState } from 'react';
import { OneDayCourseType } from '../../../types';
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
import FavoriteFillIcon from '/icon/fill-heart.svg';
import { useSelectFavoriteListContext } from '../../../hooks/context/useSelectFavotieListContext';
import { FavoritePlaceSummaryType } from '../../../types';

interface PlaceCardProps {
  placeItem: OneDayCourseType;
  orderInList: number;
}

const FAVORITE_STORAGE_KEY = 'favoritePlaceIds';

const PlaceCardItem = ({ placeItem, orderInList }: PlaceCardProps) => {
  const [isSelected, setIsSelected] = useState(false);
  const { selectedPanel, setSelectedPanel } = useSelectedPanel();
  const { setIsFavoriteListSelectOpen, setSelectedPlace, favoritePlaces, setFavoritePlaces } =
    useSelectFavoriteListContext();

  const savedFavoritePlaceNames = favoritePlaces.map((place) => place.placeName);
  const isFavoritedPlace = savedFavoritePlaceNames.includes(placeItem.placeName);

  useEffect(() => {
    if (selectedPanel === placeItem.placeName) {
      setIsSelected(!isSelected);
    } else {
      setIsSelected(false);
    }
  }, [selectedPanel]);

  const handleOpenFavoriteListSelect = (placeItem: OneDayCourseType) => {
    if (isFavoritedPlace) {
      const newFavoritePlaceList = favoritePlaces.filter((place) => place.placeName !== placeItem.placeName);
      setFavoritePlaces(newFavoritePlaceList);
      updateFavoritePlaces(newFavoritePlaceList);
    }

    setSelectedPlace(placeItem);
    setIsFavoriteListSelectOpen(true);
  };

  const handlePlaceCardClick = (placeName: string) => {
    if (selectedPanel === placeName) {
      setSelectedPanel('');
    } else {
      setSelectedPanel(placeName);
    }
  };

  const updateFavoritePlaces = (newFavoritePlaces: FavoritePlaceSummaryType[]) => {
    localStorage.setItem(FAVORITE_STORAGE_KEY, JSON.stringify(newFavoritePlaces));
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
              handleOpenFavoriteListSelect(placeItem);
            }}
          >
            {isFavoritedPlace ? (
              <img
                src={FavoriteFillIcon}
                alt='찜 채우기 아이콘'
                width={20}
                height={20}
              />
            ) : (
              <img
                src={FavoriteIcon}
                alt='찜 아이콘'
                width={20}
                height={20}
              />
            )}
          </FavoriteButton>
        </PlaceCardHeader>
        <Tag tagName={placeItem.tag} />
      </PlaceCardContainer>
    </PlaceCardWrapper>
  );
};

export default PlaceCardItem;
