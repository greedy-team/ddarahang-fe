import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import FavoriteToggleButton from '../../../components/favorite/FavoriteToggleButton/FavoriteToggleButton';
import { useAddFavoriteContext } from '../../../hooks/context/useAddFavoriteContext';
import { useSaveFavoritePlaces } from '../../../hooks/favorite/useSaveFavoritePlaces';
import { OneDayCourseType } from '../../../types';

vi.mock('../../../hooks/context/useAddFavoriteContext');
vi.mock('../../../hooks/favorite/useSaveFavoritePlaces');

const mockPlaceItem: OneDayCourseType = {
  placeId: 1,
  placeName: '테스트 장소',
  day: 1,
  tag: '관광',
  orderInday: 1,
  address: '테스트 주소',
  position: { lat: 37, lng: 127 },
};

describe('Component: FavoriteToggleButton', () => {
  const mockSetIsFavoriteModalOpen = vi.fn();
  const mockSetSelectedPlace = vi.fn();
  const mockRemoveFavoritePlace = vi.fn();

  beforeEach(() => {
    vi.clearAllMocks();
    vi.mocked(useSaveFavoritePlaces).mockReturnValue({
      removeFavoritePlace: mockRemoveFavoritePlace,
    } as any);
  });

  describe('찜하지 않은 상태일 때', () => {
    beforeEach(() => {
      vi.mocked(useAddFavoriteContext).mockReturnValue({
        favoritePlaces: [],
        setIsFavoriteModalOpen: mockSetIsFavoriteModalOpen,
        setSelectedPlace: mockSetSelectedPlace,
      } as any);
    });

    it('"찜하기 버튼"을 렌더링해야 합니다.', () => {
      render(<FavoriteToggleButton placeItem={mockPlaceItem} />);
      expect(screen.getByLabelText('찜하기 버튼')).toBeInTheDocument();
    });

    it('버튼 클릭 시 모달을 여는 함수를 호출해야 합니다.', () => {
      render(<FavoriteToggleButton placeItem={mockPlaceItem} />);
      fireEvent.click(screen.getByLabelText('찜하기 버튼'));

      expect(mockSetSelectedPlace).toHaveBeenCalledWith(mockPlaceItem);
      expect(mockSetIsFavoriteModalOpen).toHaveBeenCalledWith(true);
    });
  });

  describe('이미 찜한 상태일 때', () => {
    beforeEach(() => {
      vi.mocked(useAddFavoriteContext).mockReturnValue({
        favoritePlaces: [{ placeId: 1, placeName: '테스트 장소' }],
        setIsFavoriteModalOpen: mockSetIsFavoriteModalOpen,
      } as any);
    });

    it('"찜 해제 버튼"을 렌더링해야 합니다.', () => {
      render(<FavoriteToggleButton placeItem={mockPlaceItem} />);
      expect(screen.getByLabelText('찜 해제 버튼')).toBeInTheDocument();
    });

    it('버튼 클릭 시 장소를 제거하는 함수를 호출해야 합니다.', () => {
      render(<FavoriteToggleButton placeItem={mockPlaceItem} />);
      fireEvent.click(screen.getByLabelText('찜 해제 버튼'));
      expect(mockRemoveFavoritePlace).toHaveBeenCalledWith(mockPlaceItem.placeId);
    });
  });
});
