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
  return (
    <SelectedPanelProvider>
      <TabPanel oneDayCourse={mockOneDayCourses} />
    </SelectedPanelProvider>
  );
};

describe('여행 코스 디테일 페이지', () => {
  it('여행 코스 장소 패널이 렌더링 된다.', async () => {
    rtlRender(<CustomTabpanel />);

    await waitFor(() => {
      mockOneDayCourses.forEach((course) => {
        expect(screen.getByText(course.placeName)).toBeInTheDocument();
      });
    });

    screen.debug();
  });
});
