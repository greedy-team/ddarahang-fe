import { screen, waitFor, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect, vi, beforeEach, beforeAll } from 'vitest';
import MainPage from '../../pages/Main/MainPage';
import { SortOptionProvider } from '../../store/SortOptionContext';
import { SelectOptionProvider } from '../../store/SelectOptionContext';
import * as useGetTravelVideoList from '../../hooks/quries/useGetTravelVideoList';
import { videoList } from '../data/mockData';
import { TravelVideoListResponse } from '../../types';
import rtlRender from '../Render';
import { AddFavoriteProvider } from '../../store/AddFavoriteContext';
import { ERROR_MESSAGE, NO_DATA_ERROR_MESSAGE } from '../../constants/messages';

const mockGetTravelVideoList = vi.fn();
vi.mock('../../hooks/quries/useGetTravelVideoList', () => ({
  default: vi.fn(() => ({
    videoListResponse: null,
    loading: true,
    error: null,
    getTravelVideoList: mockGetTravelVideoList,
  })),
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

const renderMainPage = () =>
  rtlRender(
    <SelectOptionProvider>
      <SortOptionProvider>
        <AddFavoriteProvider>
          <MainPage />
        </AddFavoriteProvider>
      </SortOptionProvider>
    </SelectOptionProvider>,
  );

const mockedUseTravelVideoList = useGetTravelVideoList.default as vi.Mock;

describe('Page: MainPage', () => {
  beforeEach(() => {
    vi.clearAllMocks();
    localStorage.clear();
  });

  it('초기 렌더링 시 로딩 상태를 올바르게 표시해야 합니다.', () => {
    mockedUseTravelVideoList.mockReturnValue({
      videoListResponse: null,
      loading: true,
      error: null,
      getTravelVideoList: mockGetTravelVideoList,
    });
    renderMainPage();
    expect(screen.getByTestId('loader')).toBeInTheDocument();
  });

  it('데이터 로딩 성공 시 비디오 목록과 페이지네이션을 렌더링해야 합니다.', async () => {
    const mockResponse: TravelVideoListResponse = {
      content: videoList,
      totalPages: 5,
      totalElements: 50,
      number: 0,
      size: 10,
      first: true,
      last: false,
    };
    mockedUseTravelVideoList.mockReturnValue({
      videoListResponse: mockResponse,
      loading: false,
      error: null,
      getTravelVideoList: mockGetTravelVideoList,
    });
    renderMainPage();
    expect(await screen.findByText('서울 여행 코스 추천, 데이트 코스')).toBeInTheDocument();
    expect(screen.getByText('부산 여행 코스 추천, 데이트 코스')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: '1' })).toBeInTheDocument();
  });

  it('데이터가 없을 때 안내 메시지를 표시해야 합니다.', async () => {
    const mockResponse: TravelVideoListResponse = {
      content: [],
      totalPages: 0,
      totalElements: 0,
      number: 0,
      size: 10,
      first: true,
      last: true,
    };
    mockedUseTravelVideoList.mockReturnValue({
      videoListResponse: mockResponse,
      loading: false,
      error: null,
      getTravelVideoList: mockGetTravelVideoList,
    });
    renderMainPage();
    expect(await screen.findByText(NO_DATA_ERROR_MESSAGE)).toBeInTheDocument();
    expect(screen.getByText(ERROR_MESSAGE)).toBeInTheDocument();
  });

  it('데이터 로딩 실패 시 에러 메시지를 표시해야 합니다.', async () => {
    const error = new Error('Failed to fetch');
    mockedUseTravelVideoList.mockReturnValue({
      videoListResponse: null,
      loading: false,
      error,
      getTravelVideoList: mockGetTravelVideoList,
    });
    renderMainPage();
    expect(await screen.findByText(ERROR_MESSAGE)).toBeInTheDocument();
    expect(screen.getByText(`Error: ${error.message}`)).toBeInTheDocument();
  });

  it('페이지네이션 버튼 클릭 시 데이터를 다시 요청해야 합니다.', async () => {
    const user = userEvent.setup();
    const mockResponse: TravelVideoListResponse = {
      content: videoList,
      totalPages: 5,
      totalElements: 50,
      number: 0,
      size: 10,
      first: true,
      last: false,
    };
    mockedUseTravelVideoList.mockReturnValue({
      videoListResponse: mockResponse,
      loading: false,
      error: null,
      getTravelVideoList: mockGetTravelVideoList,
    });
    renderMainPage();
    const pageTwoButton = await screen.findByRole('button', { name: '2' });
    await user.click(pageTwoButton);
    expect(mockGetTravelVideoList).toHaveBeenLastCalledWith(expect.objectContaining({ pageNumber: 1 }));
  });

  it('정렬 옵션 변경 시 데이터를 다시 요청해야 합니다.', async () => {
    const user = userEvent.setup();
    mockedUseTravelVideoList.mockReturnValue({
      videoListResponse: { content: videoList, totalPages: 5 },
      loading: false,
      error: null,
      getTravelVideoList: mockGetTravelVideoList,
    });
    renderMainPage();

    // 해결책: '아래 화살표' 아이콘을 기준으로 트리거를 찾습니다.
    const downArrowIcon = screen.getByAltText('아래 화살표');
    const dropdownTrigger = downArrowIcon.closest('[role="button"]');
    expect(dropdownTrigger).toBeInTheDocument();

    await user.click(dropdownTrigger!);

    const viewCountOption = await screen.findByRole('button', { name: '조회순' });
    fireEvent.click(viewCountOption);

    await waitFor(() => {
      expect(mockGetTravelVideoList).toHaveBeenLastCalledWith(expect.objectContaining({ sortField: 'viewCount' }));
    });
  });
});
