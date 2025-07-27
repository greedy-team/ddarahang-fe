import { renderHook, waitFor, act } from '@testing-library/react';
import { describe, it, expect, vi, afterEach } from 'vitest';
import axios from 'axios';
import useTravelVideoList from '../../../hooks/quries/useGetTravelVideoList';
import { TravelVideoListResponse } from '../../../types';
import { videoList } from '../../data/mockData';

vi.mock('axios');
const mockedAxios = vi.mocked(axios);

describe('Hook: useTravelVideoList', () => {
  afterEach(() => {
    vi.resetAllMocks();
  });

  const initialProps = {
    sortField: 'uploadDate' as const,
    countryName: '대한민국' as const,
    regionName: '서울',
    pageNumber: 0,
  };

  it('초기 데이터 로딩 시 loading 상태를 true로 설정해야 합니다.', () => {
    mockedAxios.get.mockReturnValue(new Promise(() => {}));
    const { result } = renderHook(() => useTravelVideoList(initialProps));

    expect(result.current.loading).toBe(true);
    expect(result.current.error).toBe(null);
    expect(result.current.videoListResponse).toBe(null);
  });

  it('데이터를 성공적으로 불러오면 videoListResponse 상태를 업데이트해야 합니다.', async () => {
    const mockResponse: TravelVideoListResponse = {
      content: videoList,
      totalPages: 1,
      totalElements: 2,
      number: 0,
      size: 10,
      first: true,
      last: true,
    };
    mockedAxios.get.mockResolvedValue({ data: mockResponse });
    const { result } = renderHook(() => useTravelVideoList(initialProps));

    await waitFor(() => {
      expect(result.current.loading).toBe(false);
      expect(result.current.videoListResponse).toEqual(mockResponse);
      expect(result.current.error).toBe(null);
    });
  });

  it('데이터 로딩 중 에러가 발생하면 error 상태를 업데이트해야 합니다.', async () => {
    const errorMessage = 'Network Error';
    mockedAxios.get.mockRejectedValue(new Error(errorMessage));
    const { result } = renderHook(() => useTravelVideoList(initialProps));

    await waitFor(() => {
      expect(result.current.loading).toBe(false);
      expect(result.current.error).toBeInstanceOf(Error);
      expect((result.current.error as Error).message).toBe(errorMessage);
    });
  });

  it('getTravelVideoList 함수 호출 시 새로운 파라미터로 다시 데이터를 요청해야 합니다.', async () => {
    mockedAxios.get.mockResolvedValueOnce({ data: { content: [], totalPages: 1 } });
    const { result } = renderHook(() => useTravelVideoList(initialProps));
    await waitFor(() => expect(result.current.loading).toBe(false));

    const newMockResponse: TravelVideoListResponse = {
      content: [
        {
          travelCourseId: 3,
          title: '제주 여행',
          thumbnailUrl: 'jeju-url',
          creator: '제주 유튜버',
          viewCount: 300,
          uploadDate: '2025-07-23',
        },
      ],
      totalPages: 1,
      totalElements: 1,
      number: 0,
      size: 10,
      first: true,
      last: true,
    };
    mockedAxios.get.mockResolvedValueOnce({ data: newMockResponse });

    const newParams = {
      sortField: 'viewCount' as const,
      countryName: '대한민국' as const,
      regionName: '제주도',
      pageNumber: 0,
    };

    act(() => {
      result.current.getTravelVideoList(newParams);
    });

    await waitFor(() => {
      expect(result.current.videoListResponse).toEqual(newMockResponse);
    });

    expect(mockedAxios.get).toHaveBeenCalledTimes(2);
    expect(mockedAxios.get).toHaveBeenLastCalledWith('/api/v1/travelcourses', { params: newParams });
  });
});
