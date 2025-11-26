import { screen } from '@testing-library/react';
import { describe, it, expect, vi, beforeAll } from 'vitest';
import rtlRender from '../../Render';
import Header from '../../../components/main/Header/Header';
import { SelectOptionProvider } from '../../../store/SelectOptionContext';
import { SortOptionProvider } from '../../../store/SortOptionContext';
import { AddFavoriteProvider } from '../../../store/AddFavoriteContext';

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

const renderHeaderWithProviders = () =>
  rtlRender(
    <SelectOptionProvider>
      <SortOptionProvider>
        <AddFavoriteProvider>
          <Header
            onSubmitOption={() => {}}
            setCurrentPageNumber={() => {}}
          />
        </AddFavoriteProvider>
      </SortOptionProvider>
    </SelectOptionProvider>,
  );

describe('Component: Header', () => {
  it('메인 페이지의 제목과 부제를 올바르게 렌더링해야 합니다.', () => {
    renderHeaderWithProviders();
    expect(screen.getByText('어디로 여행을 떠나시나요?')).toBeInTheDocument();
    expect(screen.getByText('따라만 하면 준비 끝! 유튜브 여행 영상으로 코스를 둘러보세요.')).toBeInTheDocument();
  });
});
