import { screen, waitFor } from '@testing-library/react';
import { describe, it, expect, beforeAll, vi } from 'vitest';
import rtlRender from '../../Render';
import Header from '../../../components/main/Header/Header';
import { colors } from '../../../styles/Theme';

beforeAll(() => {
  Object.defineProperty(window, 'matchMedia', {
    writable: true,
    value: vi.fn().mockImplementation((query) => ({
      matches: false,
      media: query,
      onchange: null,
      addListener: vi.fn(),
      removeListener: vi.fn(),
      addEventListener: vi.fn(),
      removeEventListener: vi.fn(),
      dispatchEvent: vi.fn(),
    })),
  });

  global.IntersectionObserver = vi.fn(function () {
    return {
      observe: vi.fn(),
      unobserve: vi.fn(),
      disconnect: vi.fn(),
      takeRecords: vi.fn().mockReturnValue([]), // 🚀 `takeRecords()` 추가
      root: null,
      rootMargin: '0px',
      thresholds: [],
    };
  }) as unknown as typeof IntersectionObserver;
});

const CustomHeader = () => {
  const onSubmitOption = () => {};
  const setCurrentPageNumber = () => {};

  return (
    <Header
      color={colors.WHITE}
      onSubmitOption={onSubmitOption}
      setCurrentPageNumber={setCurrentPageNumber}
    />
  );
};

describe('메인페이지 헤더 컴포넌트', () => {
  it('메인페이지 헤더에 표시되는 글자를 확인할 수 있다.', async () => {
    rtlRender(<CustomHeader />);

    await waitFor(() => {
      expect(screen.getByText('어디로 여행을 떠나시나요?')).toBeInTheDocument();
      expect(screen.getByText('따라만 하면 준비 끝! 유튜브 여행 영상으로 코스를 둘러보세요.')).toBeInTheDocument();
    });

    screen.debug();
  });
});
