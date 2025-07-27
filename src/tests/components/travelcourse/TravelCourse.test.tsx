import { screen } from '@testing-library/react';
import { describe, it, expect, beforeAll, vi } from 'vitest';
import { SelectedPanelProvider } from '../../../store/SelectedPanelContext';
import { mockOneDayCourses } from '../../data/mockData';
import rtlRender from '../../Render';
import TravelCourse from '../../../components/detail/TravelCourse/TravelCourse';
import { AddFavoriteProvider } from '../../../store/AddFavoriteContext';

beforeAll(() => {
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

  return (
    <SelectedPanelProvider>
      <AddFavoriteProvider>
        <TravelCourse
          totalTravelDays={3}
          selectedTab={1}
          oneDayCourses={mockOneDayCourses}
          setSelectedTab={setSelectedTab}
        />
      </AddFavoriteProvider>
    </SelectedPanelProvider>
  );
};

describe('여행 코스 디테일 페이지의 TravelCourse 컴포넌트', () => {
  it('전체 여행일차 탭과 현재 선택된 날짜의 코스 목록을 렌더링해야 합니다.', () => {
    rtlRender(<CustomTravelCourse />);

    expect(screen.getByText('1일차')).toBeInTheDocument();
    expect(screen.getByText('2일차')).toBeInTheDocument();
    expect(screen.getByText('3일차')).toBeInTheDocument();

    mockOneDayCourses.forEach((course) => {
      expect(screen.getByText(course.placeName)).toBeInTheDocument();
    });
  });
});
