import { renderHook, act } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { useSaveFavoritePlaces } from '../../../hooks/favorite/useSaveFavoritePlaces';
import * as AddFavoriteContext from '../../../hooks/context/useAddFavoriteContext';
import { FavoritePlaceSummaryType } from '../../../types';

vi.mock('../../../hooks/context/useAddFavoriteContext');

const localStorageMock = {
  setItem: vi.fn(),
};
Object.defineProperty(window, 'localStorage', { value: localStorageMock, writable: true });

describe('Hook: useSaveFavoritePlaces', () => {
  const setFavoritePlacesMock = vi.fn();
  const mockedUseAddFavoriteContext = vi.spyOn(AddFavoriteContext, 'useAddFavoriteContext');

  const initialFavoritePlaces: FavoritePlaceSummaryType[] = [{ placeId: 1, placeName: '기존 장소' }];

  beforeEach(() => {
    vi.clearAllMocks();
    mockedUseAddFavoriteContext.mockReturnValue({
      favoritePlaces: initialFavoritePlaces,
      setFavoritePlaces: setFavoritePlacesMock,
    } as any);
  });

  describe('addFavoritePlace', () => {
    it('새로운 장소를 추가하면 Context와 localStorage가 업데이트되어야 합니다.', () => {
      const { result } = renderHook(() => useSaveFavoritePlaces());
      const newPlace = { placeId: 2, placeName: '새로운 장소' };
      const expectedUpdatedPlaces = [...initialFavoritePlaces, newPlace];

      act(() => {
        result.current.addFavoritePlace(newPlace);
      });

      expect(setFavoritePlacesMock).toHaveBeenCalledWith(expectedUpdatedPlaces);
      expect(localStorageMock.setItem).toHaveBeenCalledWith('favoritePlaceIds', JSON.stringify(expectedUpdatedPlaces));
    });

    it('이미 존재하는 장소를 추가하려고 하면 아무 동작도 하지 않아야 합니다.', () => {
      const { result } = renderHook(() => useSaveFavoritePlaces());
      act(() => {
        result.current.addFavoritePlace({ placeId: 1, placeName: '기존 장소' });
      });

      expect(setFavoritePlacesMock).not.toHaveBeenCalled();
      expect(localStorageMock.setItem).not.toHaveBeenCalled();
    });
  });

  describe('removeFavoritePlace', () => {
    it('장소를 제거하면 Context와 localStorage가 업데이트되어야 합니다.', () => {
      const { result } = renderHook(() => useSaveFavoritePlaces());
      const expectedUpdatedPlaces: FavoritePlaceSummaryType[] = [];

      act(() => {
        result.current.removeFavoritePlace(1);
      });

      expect(setFavoritePlacesMock).toHaveBeenCalledWith(expectedUpdatedPlaces);
      expect(localStorageMock.setItem).toHaveBeenCalledWith('favoritePlaceIds', JSON.stringify(expectedUpdatedPlaces));
    });
  });
});
