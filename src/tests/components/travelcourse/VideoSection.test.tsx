import { screen, waitFor } from '@testing-library/react';
import { describe, it, expect, beforeAll, vi } from 'vitest';
import VideoSection from '../../../components/detail/Video/VideoSection';
import { TravelCourse } from '../../../types';
import { mockTravelCourse } from '../../data/mockData';
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

const CustomVideoSection = ({ mockTravelCourse }: { mockTravelCourse: TravelCourse }) => {
  return (
    <VideoSection
      isMobileMapVisible={false}
      isMobile={false}
      setIsMobileMapVisible={() => {}}
      videoUrl={mockTravelCourse.videoUrl}
      travelCourse={mockTravelCourse}
    />
  );
};

describe('여행 코스 디테일 페이지', () => {
  it('여행 코스 페이지로 이동 시 비디오 섹션이 렌더링 된다.', async () => {
    rtlRender(<CustomVideoSection mockTravelCourse={mockTravelCourse} />);

    await waitFor(() =>
      expect(screen.getByTestId('video-player')).toHaveAttribute('src', `https://www.youtube.com/embed/undefined`),
    );

    screen.debug();
  });
});
