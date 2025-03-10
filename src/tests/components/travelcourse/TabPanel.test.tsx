import { screen, waitFor } from '@testing-library/react';
import { describe, it, expect, beforeAll, vi } from 'vitest';
import TabPanel from '../../../components/common/Tabs/TabPanel/TabPanel';
import { SelectedPanelProvider } from '../../../store/SelectedPanelContext';
import { mockOneDayCourses } from '../../data/mockData';
import rtlRender from '../../Render';

beforeAll(() => {
  Object.defineProperty(window, 'matchMedia', {
    writable: true,
    value: vi.fn().mockImplementation((query) => ({
      matches: false,
      media: query,
    })),
  });
});

const CustomTabpanel = () => {
  const onClickPanel = () => {};

  return (
    <SelectedPanelProvider>
      <TabPanel
        oneDayCourse={mockOneDayCourses}
        onClickPanel={onClickPanel}
      />
    </SelectedPanelProvider>
  );
};

describe('여행 코스 디테일 페이지', () => {
  it('여행 코스 목록이 렌더링 된다.', async () => {
    rtlRender(<CustomTabpanel />);

    waitFor(() => {
      mockOneDayCourses.forEach((course) => {
        expect(screen.getByText(course.placeName)).toBeInTheDocument();
        expect(screen.getByText(course.address)).toBeInTheDocument();
      });
    });

    vi.restoreAllMocks();
  });
});
