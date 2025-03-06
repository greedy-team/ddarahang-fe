import { MemoryRouter } from 'react-router-dom';
import { render, screen, waitFor } from '@testing-library/react';
import { describe, it, expect, beforeAll, vi } from 'vitest';
import useGetTravelCourse from '../../hooks/quries/useGetTravelCourse';
import VideoSection from '../../components/detail/Video/VideoSection';

beforeAll(() => {
  Object.defineProperty(window, 'matchMedia', {
    writable: true,
    value: vi.fn().mockImplementation((query) => ({
      matches: false,
      media: query,
      onchange: null,
      addListener: vi.fn(),
      removeListener: vi.fn(),
      addEventListener: vi.fn(),
      removeEventListener: vi.fn(),
      dispatchEvent: vi.fn(),
    })),
  });
});

const rtlRender = (ui: any) => {
  const Wrapper = ({ children }: any) => <MemoryRouter initialEntries={['/travelcourse/1']}>{children}</MemoryRouter>;
  return render(ui, { wrapper: Wrapper });
};

const TravelCourse = () => {
  const { travelCourse } = useGetTravelCourse(1);

  if (!travelCourse) return null;
  return (
    <VideoSection
      videoUrl={travelCourse.videoUrl}
      travelCourse={travelCourse}
    />
  );
};

const getTravelVideo = async (id: number) => {
  const response = await fetch(`/api/travelcourse/${id}`);
  if (!response.ok) {
    throw new Error('Failed to fetch product');
  }
  return response.json();
};

describe('여행 코스 디테일 페이지', () => {
  describe('비디오 섹션 테스트', () => {
    it('여행 코스 페이지로 이동 시 비디오 섹션이 렌더링 된다.', async () => {
      const mockTravelCourse = {
        travelCourseId: 1,
        travelDays: 3,
        videoUrl: 'https://example.com/video',
      };

      const mockResponse = {
        ok: true,
        json: async () => mockTravelCourse,
        status: 200,
        headers: new Headers(),
      };

      vi.spyOn(global, 'fetch').mockResolvedValue(mockResponse as Response);

      const product = await getTravelVideo(1);
      expect(product).toEqual(mockTravelCourse);

      rtlRender(<TravelCourse />);

      waitFor(() => {
        const videoElement = screen.getByRole('video');
        expect(videoElement).toHaveAttribute('src', 'https://example.com/video');
      });

      expect(global.fetch).toHaveBeenCalledWith('/api/travelcourse/1');

      vi.restoreAllMocks();
    });
  });
});
