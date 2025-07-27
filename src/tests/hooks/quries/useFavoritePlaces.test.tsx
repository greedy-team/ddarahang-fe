import { renderHook, waitFor } from '@testing-library/react';
import { describe, it, expect, vi, afterEach } from 'vitest';
import axios from 'axios';
import useFavoritePlaces from '../../../hooks/quries/useFavoritePlaces';
import * as AddFavoriteContext from '../../../hooks/context/useAddFavoriteContext';
import { FavoritePlaceType } from '../../../types';

vi.mock('axios');
const mockedAxios = vi.mocked(axios);

vi.mock('../../../hooks/context/useAddFavoriteContext');
const mockedUseAddFavoriteContext = vi.spyOn(AddFavoriteContext, 'useAddFavoriteContext');

// localStorage 모킹
const localStorageMock = {
  getItem: vi.fn(),
  setItem: vi.fn(),
  clear: vi.fn(),
};
Object.defineProperty(window, 'localStorage', { value: localStorageMock, writable: true });

describe('Hook: useFavoritePlaces', () => {
  afterEach(() => {
    vi.resetAllMocks();
  });

  it('찜한 장소가 있을 때, 해당 ID로 API를 호출하고 데이터를 반환해야 합니다.', async () => {
    const favoritePlaceIds = [
      { placeId: 1, placeName: '장소A' },
      { placeId: 2, placeName: '장소B' },
    ];
    const mockApiResponse: FavoritePlaceType[] = [
      { placeName: '장소A', placeAddress: '주소A', tag: '음식', orderInPlace: 1, latitude: 37.1, longitude: 127.1 },
    ];

    mockedUseAddFavoriteContext.mockReturnValue({ favoritePlaces: favoritePlaceIds } as any);
    localStorageMock.getItem.mockReturnValue(JSON.stringify(favoritePlaceIds));
    mockedAxios.post.mockResolvedValue({ data: mockApiResponse });

    const { result } = renderHook(() => useFavoritePlaces());

    expect(result.current.loading).toBe(true);
    expect(mockedAxios.post).toHaveBeenCalledWith('/api/v1/favorite', { placeIds: [1, 2] });

    await waitFor(() => {
      expect(result.current.loading).toBe(false);
      expect(result.current.favoritePlaces).toEqual(mockApiResponse);
    });
  });

  it('찜한 장소가 없을 때, API를 호출하지 않고 빈 배열을 반환해야 합니다.', () => {
    mockedUseAddFavoriteContext.mockReturnValue({ favoritePlaces: [] } as any);
    localStorageMock.getItem.mockReturnValue(JSON.stringify([]));

    const { result } = renderHook(() => useFavoritePlaces());

    expect(result.current.loading).toBe(false);
    expect(result.current.favoritePlaces).toEqual([]);
    expect(mockedAxios.post).not.toHaveBeenCalled();
  });
});
