import PlaceCardItem from '../PlaceCardItem/PlaceCardItem';
import { PlaceCardListContainer } from './PlaceCardList.style';

const TRAVELCOURSES = [
  {
    orderInDay: 1,
    placeName: '광안리 해수욕장',
    placeAddress: '',
  },
  {
    orderInDay: 2,
    placeName: '광안리 해수욕장',
    placeAddress: '',
  },
  {
    orderInDay: 3,
    placeName: '광안리 해수욕장',
    placeAddress: '',
  },
  {
    placeName: '광안리 해수욕장',
    placeAddress: '',
  },
  {
    orderInDay: 5,
    placeName: '광안리 해수욕장',
    placeAddress: '',
  },
  {
    orderInDay: 6,
    placeName: '광안리 해수욕장',
    placeAddress: '',
  },
  {
    orderInDay: 7,
    placeName: '광안리 해수욕장',
    placeAddress: '',
  },
  {
    orderInDay: 8,
    placeName: '광안리 해수욕장',
    placeAddress: '',
  },
];

const PlaceCardList = () => {
  return (
    <PlaceCardListContainer>
      {TRAVELCOURSES.map((course) => {
        return (
          <PlaceCardItem
            key={course.orderInDay}
            travelCources={course}
            onClick={() => {}}
          />
        );
      })}
    </PlaceCardListContainer>
  );
};

export default PlaceCardList;
