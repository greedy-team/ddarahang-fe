import { screen, waitFor } from '@testing-library/react';
import { describe, it, expect, beforeAll, vi } from 'vitest';
import TravelVideoList from '../../../components/main/TravelVideoList/TravelVideoList';
import rtlRender from '../../Render';
import { videoList } from '../../data/mockData';

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

  global.IntersectionObserver = vi.fn(function () {
    return {
      observe: vi.fn(),
      unobserve: vi.fn(),
      disconnect: vi.fn(),
      takeRecords: vi.fn().mockReturnValue([]),
      root: null,
      rootMargin: '0px',
      thresholds: [],
    };
  }) as unknown as typeof IntersectionObserver;
});

const CustomTravelVideoList = ({ mockVideoList }: any) => {
  return (
    <TravelVideoList
      videoList={mockVideoList}
      isFavoritePage={false}
    />
  );
};

describe('메인 페이지', () => {
  describe('셀렉 박스 테스트 ', () => {
    it('사용자가 선택한 지역의 데이터가 없는 경우 안내 문구가 나온다.', async () => {
      rtlRender(<CustomTravelVideoList mockVideoList={videoList} />);

      await waitFor(() => {
        expect(screen.getByText('서울 여행 코스 추천, 데이트 코스')).toBeInTheDocument();
        expect(screen.getByText('부산 여행 코스 추천, 데이트 코스')).toBeInTheDocument();
      });

      screen.debug();
    });
  });
});
