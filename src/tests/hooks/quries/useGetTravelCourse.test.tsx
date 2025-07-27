import { renderHook, waitFor } from '@testing-library/react';
import { describe, it, expect, vi, afterEach } from 'vitest';
import axios from 'axios';
import useGetTravelCourse from '../../../hooks/quries/useGetTravelCourse';
import { mockTravelCourse } from '../../data/mockData';
import { TravelCourse } from '../../../types';

vi.mock('axios');
const mockedAxios = vi.mocked(axios);

describe('Hook: useGetTravelCourse', () => {
  afterEach(() => {
    vi.resetAllMocks();
  });

  const videoId = 1;

  it('초기 데이터 로딩 시 loading 상태를 true로 설정해야 합니다.', () => {
    mockedAxios.get.mockReturnValue(new Promise(() => {}));
    const { result } = renderHook(() => useGetTravelCourse(videoId));

    expect(result.current.loading).toBe(true);
    expect(result.current.error).toBe(null);
    expect(result.current.travelCourse).toBeUndefined();
  });

  it('데이터를 성공적으로 불러오면 travelCourse 상태를 업데이트해야 합니다.', async () => {
    const mockResponse: TravelCourse = mockTravelCourse;
    mockedAxios.get.mockResolvedValue({ data: mockResponse });
    const { result } = renderHook(() => useGetTravelCourse(videoId));

    expect(mockedAxios.get).toHaveBeenCalledWith(`/api/v1/travelcourses/${videoId}`);

    await waitFor(() => {
      expect(result.current.loading).toBe(false);
      expect(result.current.travelCourse).toEqual(mockResponse);
      expect(result.current.error).toBe(null);
    });
  });

  it('데이터 로딩 중 에러가 발생하면 error 상태를 업데이트해야 합니다.', async () => {
    const errorMessage = 'Course not found';
    mockedAxios.get.mockRejectedValue(new Error(errorMessage));
    const { result } = renderHook(() => useGetTravelCourse(videoId));

    await waitFor(() => {
      expect(result.current.loading).toBe(false);
      expect(result.current.error).toBeInstanceOf(Error);
      expect((result.current.error as Error).message).toBe(errorMessage);
      expect(result.current.travelCourse).toBeUndefined();
    });
  });
});
