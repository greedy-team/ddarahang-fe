import { screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect, vi, beforeEach, beforeAll } from 'vitest';
import FavoritePage from '../../pages/Favorite/FavoritePage';
import { AddFavoriteProvider } from '../../store/AddFavoriteContext';
import { SelectedPanelProvider } from '../../store/SelectedPanelContext';
import * as useFavoritePlaces from '../../hooks/quries/useFavoritePlaces';
import rtlRender from '../Render';
import { FavoritePlaceType } from '../../types';

vi.mock('../../hooks/quries/useFavoritePlaces');
vi.mock('@googlemaps/react-wrapper', () => ({
  Wrapper: ({ children }: { children: React.ReactNode }) => <div data-testid='mock-google-map'>{children}</div>,
}));
vi.mock('../../components/favorite/FavoriteRecommend/FavoriteRecommend', () => ({
  default: () => <div data-testid='favorite-recommend' />,
}));

beforeAll(() => {
  global.IntersectionObserver = vi.fn(() => ({
    observe: vi.fn(),
    unobserve: vi.fn(),
    disconnect: vi.fn(),
    takeRecords: () => [],
    root: null,
    rootMargin: '0px',
    thresholds: [],
  }));
});

const renderFavoritePage = () =>
  rtlRender(
    <SelectedPanelProvider>
      <AddFavoriteProvider>
        <FavoritePage />
      </AddFavoriteProvider>
    </SelectedPanelProvider>,
  );

const mockedUseFavoritePlaces = useFavoritePlaces.default as vi.Mock;

const mockFavoritePlacesData: FavoritePlaceType[] = [
  {
    placeName: '중앙떡볶이',
    placeAddress: '대구 중구',
    tag: '음식',
    orderInPlace: 1,
    latitude: 35.8,
    longitude: 128.6,
  },
  { placeName: '동성로', placeAddress: '대구 중구', tag: '관광', orderInPlace: 2, latitude: 35.8, longitude: 128.6 },
  { placeName: '상무팥죽', placeAddress: '광주 서구', tag: '음식', orderInPlace: 3, latitude: 35.1, longitude: 126.8 },
];

describe('Page: FavoritePage', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('찜한 장소가 있을 때 목록과 지도를 렌더링해야 합니다.', async () => {
    mockedUseFavoritePlaces.mockReturnValue({
      favoritePlaces: mockFavoritePlacesData,
      loading: false,
      error: null,
    });
    renderFavoritePage();

    expect(await screen.findByText('중앙떡볶이')).toBeInTheDocument();
    expect(screen.getByText('동성로')).toBeInTheDocument();
    expect(screen.getByText('상무팥죽')).toBeInTheDocument();
    expect(screen.getByTestId('mock-google-map')).toBeInTheDocument();
  });

  it('찜한 장소가 없을 때 추천 컴포넌트를 렌더링해야 합니다.', async () => {
    mockedUseFavoritePlaces.mockReturnValue({
      favoritePlaces: [],
      loading: false,
      error: null,
    });
    renderFavoritePage();

    expect(await screen.findByTestId('favorite-recommend')).toBeInTheDocument();
    expect(screen.queryByTestId('mock-google-map')).not.toBeInTheDocument();
  });

  it('태그 탭을 클릭하면 장소 목록이 필터링되어야 합니다.', async () => {
    const user = userEvent.setup();
    mockedUseFavoritePlaces.mockReturnValue({
      favoritePlaces: mockFavoritePlacesData,
      loading: false,
      error: null,
    });
    renderFavoritePage();

    const foodTab = await screen.findByRole('button', { name: /음식/ });
    await user.click(foodTab);

    await waitFor(() => {
      expect(screen.getByText('중앙떡볶이')).toBeInTheDocument();
      expect(screen.getByText('상무팥죽')).toBeInTheDocument();
      expect(screen.queryByText('동성로')).not.toBeInTheDocument();
    });
  });

  it('필터링 후 전체 탭을 클릭하면 모든 장소가 다시 보여야 합니다.', async () => {
    const user = userEvent.setup();
    mockedUseFavoritePlaces.mockReturnValue({
      favoritePlaces: mockFavoritePlacesData,
      loading: false,
      error: null,
    });
    renderFavoritePage();

    const foodTab = await screen.findByRole('button', { name: /음식/ });
    await user.click(foodTab);
    await waitFor(() => expect(screen.queryByText('동성로')).not.toBeInTheDocument());

    const allTab = await screen.findByRole('button', { name: /전체/ });
    await user.click(allTab);

    await waitFor(() => expect(screen.getByText('동성로')).toBeInTheDocument());
  });
});
