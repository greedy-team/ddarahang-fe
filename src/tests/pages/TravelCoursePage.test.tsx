import { screen, waitFor, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect, vi, beforeEach, beforeAll } from 'vitest';
import TravelCoursePage from '../../pages/TravelCourse/TravelCoursePage';
import { AddFavoriteProvider } from '../../store/AddFavoriteContext';
import { SelectedPanelProvider } from '../../store/SelectedPanelContext';
import * as useGetTravelCourse from '../../hooks/quries/useGetTravelCourse';
import { mockTravelCourse } from '../data/mockData';
import rtlRender from '../Render';

const localStorageMock = (() => {
  let store: Record<string, string> = {};
  return {
    getItem: (key: string) => store[key] || null,
    setItem: vi.fn((key: string, value: string) => {
      store[key] = value.toString();
    }),
    clear: () => {
      store = {};
      vi.fn().mockClear();
    },
    removeItem: (key: string) => {
      delete store[key];
    },
  };
})();
Object.defineProperty(window, 'localStorage', { value: localStorageMock, writable: true });

vi.mock('react-router-dom', async (importOriginal) => ({
  ...(await importOriginal<any>()),
  useParams: () => ({ id: '1' }),
}));
vi.mock('../../hooks/quries/useGetTravelCourse');
vi.mock('@googlemaps/react-wrapper', () => ({
  Wrapper: ({ children }: any) => <div data-testid='mock-google-map'>{children}</div>,
  Status: {},
}));

beforeAll(() => {
  window.scrollTo = vi.fn();
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

const renderTravelCoursePage = () =>
  rtlRender(
    <SelectedPanelProvider>
      <AddFavoriteProvider>
        <TravelCoursePage />
      </AddFavoriteProvider>
    </SelectedPanelProvider>,
  );

const mockedUseGetTravelCourse = useGetTravelCourse.default as vi.Mock;

describe('Page: TravelCoursePage', () => {
  beforeEach(() => {
    mockedUseGetTravelCourse.mockReturnValue({
      travelCourse: mockTravelCourse,
      loading: false,
      error: null,
    });
    localStorageMock.setItem.mockClear();
    vi.useRealTimers();
  });

  it('데이터 로딩 성공 시 코스 정보와 장소 목록을 렌더링해야 합니다.', async () => {
    renderTravelCoursePage();
    expect(await screen.findByText(mockTravelCourse.title)).toBeInTheDocument();
    expect(screen.getByText('경복궁')).toBeInTheDocument();
  });

  it('다른 날짜 탭을 클릭하면 해당 날짜의 장소 목록을 렌더링해야 합니다.', async () => {
    const user = userEvent.setup();
    renderTravelCoursePage();
    const day2Tab = await screen.findByText('2일차');
    await user.click(day2Tab);
    await waitFor(() => expect(screen.getByText('명동')).toBeInTheDocument());
  });

  it('찜하기 버튼 클릭 시 찜하기 모달을 열어야 합니다.', async () => {
    const user = userEvent.setup();
    renderTravelCoursePage();
    const favoriteButtons = await screen.findAllByLabelText('찜하기 버튼');
    await user.click(favoriteButtons[0]);
    expect(await screen.findByText('경복궁 목록에 저장')).toBeInTheDocument();
  });

  it.skip('찜하기 모달의 저장 버튼 클릭 시 localStorage에 저장되고 모달이 닫혀야 합니다.', async () => {
    vi.useFakeTimers();
    const user = userEvent.setup({ advanceTimers: vi.advanceTimersByTime });
    renderTravelCoursePage();

    const favoriteButton = (await screen.findAllByLabelText('찜하기 버튼'))[0];
    await user.click(favoriteButton);

    const listItem = await screen.findByText(/기본 여행 저장 목록입니다/);
    await user.click(listItem);

    const saveButton = await screen.findByRole('button', { name: '해당 목록에 저장하기' });
    await user.click(saveButton);

    await screen.findByText('저장되었습니다.');

    expect(localStorageMock.setItem).toHaveBeenCalledWith(
      'favoritePlaceIds',
      JSON.stringify([{ placeId: 1, placeName: '경복궁' }]),
    );

    await act(async () => {
      await vi.runAllTimersAsync();
    });

    expect(screen.queryByText('경복궁 목록에 저장')).not.toBeInTheDocument();
  });
});
