import { screen, waitFor } from '@testing-library/react';
import { describe, it, expect, beforeAll, vi } from 'vitest';
import { SelectedPanelProvider } from '../../../store/SelectedPanelContext';
import { mockOneDayCourses } from '../../data/mockData';
import rtlRender from '../../Render';
import TravelCourse from '../../../components/detail/TravelCourse/TravelCourse';

beforeAll(() => {
  Object.defineProperty(window, 'matchMedia', {
    writable: true,
    value: vi.fn().mockImplementation((query) => ({
      matches: false,
      media: query,
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

const CustomTravelCourse = () => {
  const setSelectedTab = () => {};
  const setSelectedPanel = () => {};

  return (
    <SelectedPanelProvider>
      <TravelCourse
        totalTravelDays={3}
        selectedTab={1}
        oneDayCourses={mockOneDayCourses}
        setSelectedTab={setSelectedTab}
        setSelectedPanel={setSelectedPanel}
      />
    </SelectedPanelProvider>
  );
};

describe('여행 코스 디테일 페이지', () => {
  it('여행 코스 목록이 렌더링 된다.', async () => {
    rtlRender(<CustomTravelCourse />);

    await waitFor(() => {
      expect(screen.getByText('1일차')).toBeInTheDocument();
      expect(screen.getByText('2일차')).toBeInTheDocument();
      expect(screen.getByText('3일차')).toBeInTheDocument();
    });

    screen.debug();
  });
});
