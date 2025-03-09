import { MemoryRouter } from 'react-router-dom';
import { render, screen, waitFor } from '@testing-library/react';
import { describe, it, expect, beforeAll, vi } from 'vitest';
import TravelVideoList from '../../components/main/TravelVideoList/TravelVideoList';

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

const rtlRender = (ui: any, options?: any) => {
  const Wrapper = ({ children }: any) => <MemoryRouter>{children}</MemoryRouter>;
  return render(ui, { wrapper: Wrapper, ...options });
};

const CustomTravelVideoList = ({ mockVideoList }: any) => {
  return (
    <TravelVideoList
      videoNumberInPage={8}
      videoList={mockVideoList}
      currentPageNumber={1}
    />
  );
};

describe('메인 페이지', () => {
  describe('셀렉 박스 테스트 ', () => {
    it('사용자가 선택한 지역의 데이터가 없는 경우 안내 문구가 나온다.', async () => {
      const videoList = [
        {
          travelCourseId: 1,
          title: '서울 여행 코스 추천, 데이트 코스',
          creator: 'creator1',
          uploadDate: '2025-03-09',
          viewCount: 20000,
          thumbnailUrl: 'https://example.com/video/12345',
        },
        {
          travelCourseId: 2,
          title: '부산 여행 코스 추천, 데이트 코스',
          creator: 'creator2',
          uploadDate: '2025-03-09',
          viewCount: 20000,
          thumbnailUrl: 'https://example.com/video/12345',
        },
      ];

      rtlRender(<CustomTravelVideoList mockVideoList={videoList} />);

      await waitFor(() => {
        expect(screen.getByText('서울 여행 코스 추천, 데이트 코스')).toBeInTheDocument();
        expect(screen.getByText('부산 여행 코스 추천, 데이트 코스')).toBeInTheDocument();
      });
    });
  });
});
