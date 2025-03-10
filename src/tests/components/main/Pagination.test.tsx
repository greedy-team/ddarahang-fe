import { screen, waitFor } from '@testing-library/react';
import { describe, it, expect, beforeAll, vi } from 'vitest';
import rtlRender from '../../Render';
import Pagination from '../../../components/main/Pagination/Pagination';
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
});

const CustomPagination = () => {
  const onPageClick = () => {};

  return (
    <Pagination
      color={colors.WHITE}
      totalPageNumber={5}
      currentPageNumber={1}
      onPageClick={onPageClick}
    />
  );
};

describe('메인페이지 페이지네이션', () => {
  it('정렬 드롭 다운 클릭 시 조회순, 최신순 옵션이 나온다', async () => {
    rtlRender(<CustomPagination />);

    await waitFor(() => {
      expect(screen.getByText('1')).toBeInTheDocument;
      expect(screen.getByText('2')).toBeInTheDocument;
      expect(screen.getByText('3')).toBeInTheDocument;
      expect(screen.getByText('4')).toBeInTheDocument;
      expect(screen.getByText('5')).toBeInTheDocument;
    });
  });
});
