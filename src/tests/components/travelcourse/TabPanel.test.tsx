import { screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import TabPanel from '../../../components/common/Tabs/TabPanel/TabPanel';
import { SelectedPanelProvider } from '../../../store/SelectedPanelContext';
import { AddFavoriteProvider } from '../../../store/AddFavoriteContext';
import { mockOneDayCourses } from '../../data/mockData';
import rtlRender from '../../Render';

const CustomTabPanel = () => (
  <SelectedPanelProvider>
    <AddFavoriteProvider>
      <TabPanel oneDayCourse={mockOneDayCourses} />
    </AddFavoriteProvider>
  </SelectedPanelProvider>
);

describe('여행 코스 탭 패널', () => {
  it('주어진 코스 목록을 렌더링해야 합니다.', () => {
    rtlRender(<CustomTabPanel />);

    mockOneDayCourses.forEach((course) => {
      expect(screen.getByText(course.placeName)).toBeInTheDocument();
    });
  });
});
