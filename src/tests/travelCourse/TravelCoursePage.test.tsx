import { screen, waitFor } from '@testing-library/react';
import { describe, it, expect, beforeAll, vi } from 'vitest';
import VideoSection from '../../components/detail/Video/VideoSection';
import TabPanel from '../../components/common/Tabs/TabPanel/TabPanel';
import { TravelCourse } from '../../types';
import { SelectedPanelProvider } from '../../store/SelectedPanelContext';
import { mockOneDayCourses, mockTravelCourse } from '../mockData';
import rtlRender from '../render';

beforeAll(() => {
  Object.defineProperty(window, 'matchMedia', {
    writable: true,
    value: vi.fn().mockImplementation((query) => ({
      matches: false,
      media: query,
    })),
  });
});

const CustomVideoSection = ({ mockTravelCourse }: { mockTravelCourse: TravelCourse }) => {
  return (
    <VideoSection
      videoUrl={mockTravelCourse.videoUrl}
      travelCourse={mockTravelCourse}
    />
  );
};

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
  describe('여행 코스 디테일 테스트', () => {
    it('여행 코스 페이지로 이동 시 비디오 섹션이 렌더링 된다.', async () => {
      rtlRender(<CustomVideoSection mockTravelCourse={mockTravelCourse} />);

      waitFor(() =>
        expect(screen.getByTestId('video-player')).toHaveAttribute('src', `https://www.youtube.com/embed/:videoId`),
      );

      vi.restoreAllMocks();
    });
  });

  describe('여행 코스 패널 테스트', () => {
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
});
