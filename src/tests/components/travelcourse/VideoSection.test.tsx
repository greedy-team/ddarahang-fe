import { screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import VideoSection from '../../../components/detail/Video/VideoSection';
import { mockTravelCourse } from '../../data/mockData';
import rtlRender from '../../Render';

const CustomVideoSection = () => (
  <VideoSection
    isMobileMapVisible={false}
    isMobile={false}
    setIsMobileMapVisible={() => {}}
    videoUrl={mockTravelCourse.videoUrl}
    travelCourse={mockTravelCourse}
  />
);

describe('여행 코스 비디오 섹션', () => {
  it('비디오 플레이어와 영상 정보를 렌더링해야 합니다.', () => {
    rtlRender(<CustomVideoSection />);

    const videoId = mockTravelCourse.videoUrl.split('v=')[1];
    const videoPlayer = screen.getByTestId('video-player');

    expect(videoPlayer).toBeInTheDocument();
    expect(videoPlayer).toHaveAttribute('src', `https://www.youtube.com/embed/${videoId}`);

    expect(screen.getByText(mockTravelCourse.title)).toBeInTheDocument();
    expect(screen.getByText(mockTravelCourse.creator)).toBeInTheDocument();
  });
});
