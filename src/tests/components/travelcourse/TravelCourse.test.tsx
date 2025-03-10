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
});

const CustomTravelCourse = () => {
  const onClickPanel = () => {};
  const onClickTab = () => {};

  return (
    <SelectedPanelProvider>
      <TravelCourse
        totalTravelDays={3}
        selectedTab={1}
        oneDayCourses={mockOneDayCourses}
        onClickPanel={onClickPanel}
        onClickTab={onClickTab}
      />
    </SelectedPanelProvider>
  );
};

describe('여행 코스 디테일 페이지', () => {
  it('여행 코스 목록이 렌더링 된다.', async () => {
    rtlRender(<CustomTravelCourse />);

    await waitFor(() => {
      expect(screen.getByText('DAY1')).toBeInTheDocument();
      expect(screen.getByText('DAY2')).toBeInTheDocument();
      expect(screen.getByText('DAY3')).toBeInTheDocument();
    });

    screen.debug();
  });
});
