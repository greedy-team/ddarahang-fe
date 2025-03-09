import { MemoryRouter } from 'react-router-dom';
import { render, screen, waitFor } from '@testing-library/react';
import { describe, it, expect, beforeAll, vi } from 'vitest';
import useGetTravelCourse from '../../hooks/quries/useGetTravelCourse';
import VideoSection from '../../components/detail/Video/VideoSection';
import TabPanel from '../../components/common/Tabs/TabPanel/TabPanel';
import { OneDayCourseType } from '../../types';
import { SelectedPanelProvider } from '../../store/SelectedPanelContext';

beforeAll(() => {
  Object.defineProperty(window, 'matchMedia', {
    writable: true,
    value: vi.fn().mockImplementation((query) => ({
      matches: false,
      media: query,
    })),
  });
});

const rtlRender = (ui: any) => {
  const Wrapper = ({ children }: any) => <MemoryRouter initialEntries={['/travelcourse/1']}>{children}</MemoryRouter>;
  return render(ui, { wrapper: Wrapper });
};

const CustomVideoSection = () => {
  const { travelCourse } = useGetTravelCourse(1);

  if (!travelCourse) return null;

  return (
    <VideoSection
      videoUrl={travelCourse.videoUrl}
      travelCourse={travelCourse}
    />
  );
};

const mockOneDayCourses: OneDayCourseType[] = [
  {
    placeName: '제주도 어딘가',
    day: 1,
    orderInday: 1,
    address: '제주특별자치도 제주시',
    position: {
      lat: 33.4996,
      lng: 126.5312,
    },
  },
  {
    placeName: '서울 어딘가',
    day: 2,
    orderInday: 1,
    address: '서울특별시 중구',
    position: {
      lat: 37.5665,
      lng: 126.978,
    },
  },
  {
    placeName: '부산 어딘가',
    day: 3,
    orderInday: 1,
    address: '부산 광역시',
    position: {
      lat: 35.1796,
      lng: 129.0756,
    },
  },
];

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
      rtlRender(<CustomVideoSection />);

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
