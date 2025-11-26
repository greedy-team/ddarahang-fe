import { describe, it, expect } from 'vitest';
import { getRegionOptionList, getSortedOption, transformTodefaultFormPlaces } from '../../utils/index';
import { COUNTRYOPTION, KOREAREGIONOPTION, JAPANREGIONOPTION } from '../../constants/options';
import { FavoritePlaceType } from '../../types';

describe('Utils', () => {
  describe('getRegionOptionList', () => {
    it('isCountryOption이 true이면 국가 목록을 반환합니다.', () => {
      expect(getRegionOptionList({ isCountryOption: true, countryName: '대한민국', selectedOptionLabel: '' })).toEqual(
        COUNTRYOPTION,
      );
    });

    it('countryName에 따라 올바른 지역 목록을 반환합니다.', () => {
      expect(getRegionOptionList({ isCountryOption: false, countryName: '대한민국', selectedOptionLabel: '' })).toEqual(
        KOREAREGIONOPTION,
      );
      expect(getRegionOptionList({ isCountryOption: false, countryName: '일본', selectedOptionLabel: '' })).toEqual(
        JAPANREGIONOPTION,
      );
    });
  });

  describe('getSortedOption', () => {
    it('sortOption 값에 따라 올바른 문자열을 반환합니다.', () => {
      expect(getSortedOption('uploadDate')).toBe('최신순');
      expect(getSortedOption('viewCount')).toBe('조회순');
      expect(getSortedOption('invalid')).toBe('정렬 옵션');
    });
  });

  describe('transformTodefaultFormPlaces', () => {
    it('FavoritePlaceType 배열을 OneDayCourseType 배열로 올바르게 변환합니다.', () => {
      const favoritePlaces: FavoritePlaceType[] = [
        { placeName: '장소A', placeAddress: '주소A', tag: '음식', orderInPlace: 1, latitude: 37.1, longitude: 127.1 },
      ];
      const result = transformTodefaultFormPlaces(favoritePlaces);
      expect(result[0]).toHaveProperty('address', '주소A');
      expect(result[0]).toHaveProperty('orderInday', 1);
      expect(result[0]).toHaveProperty('position', { lat: 37.1, lng: 127.1 });
      expect(result[0]).toHaveProperty('day', 1);
    });
  });
});
