import { screen } from '@testing-library/react';
import { describe, it, expect, beforeAll, vi } from 'vitest';
import TravelVideoList from '../../../components/main/TravelVideoList/TravelVideoList';
import rtlRender from '../../Render';
import { videoList } from '../../data/mockData';
import { NO_DATA_ERROR_MESSAGE } from '../../../constants/messages';

beforeAll(() => {
  global.IntersectionObserver = vi.fn(() => ({
    observe: vi.fn(),
    unobserve: vi.fn(),
    disconnect: vi.fn(),
    takeRecords: () => [],
    root: null,
    rootMargin: '0px',
    thresholds: [],
  }));
});

describe('메인 페이지 비디오 목록', () => {
  it('비디오 목록이 주어지면 유튜브 카드를 렌더링해야 합니다.', () => {
    rtlRender(
      <TravelVideoList
        videoList={videoList}
        isFavoritePage={false}
      />,
    );

    expect(screen.getByText('서울 여행 코스 추천, 데이트 코스')).toBeInTheDocument();
    expect(screen.getByText('부산 여행 코스 추천, 데이트 코스')).toBeInTheDocument();
  });

  it('비디오 목록이 비어있으면 안내 문구가 나와야 합니다.', () => {
    rtlRender(
      <TravelVideoList
        videoList={[]}
        isFavoritePage={false}
      />,
    );

    expect(screen.getByText(NO_DATA_ERROR_MESSAGE)).toBeInTheDocument();
  });
});
