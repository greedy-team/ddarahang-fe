import { FavoritePlaceType } from '../types';

export const adaptPlace = (places: FavoritePlaceType[]) =>
  places.map((place) => ({
    ...place,
    placeId: place.placeId,
    address: place.placeAddress,
    orderInday: place.orderInPlace,
    position: {
      lat: place.latitude,
      lng: place.longitude,
    },
    day: 1,
  }));
