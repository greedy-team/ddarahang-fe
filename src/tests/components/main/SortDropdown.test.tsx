import { screen, waitFor } from '@testing-library/react';
import { describe, it, expect, beforeAll, vi } from 'vitest';
import SortDropdown from '../../../components/main/SortDropdown/SortDropdown';
import rtlRender from '../../Render';
import { SortOptionProvider } from '../../../store/SortOptionContext';

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

const CustomSortDropDown = () => {
  const onSubmitDropdown = () => {};

  return (
    <SortOptionProvider>
      <SortDropdown onSubmitDropdown={onSubmitDropdown} />
    </SortOptionProvider>
  );
};

describe('정렬 드롭 다운 컴포넌트', () => {
  it('정렬 드롭 다운 클릭 시 조회순, 최신순 옵션이 나온다', async () => {
    rtlRender(<CustomSortDropDown />);

    await waitFor(() => {
      expect(screen.getByText('조회순')).toBeInTheDocument();
      expect(screen.getByText('최신순')).toBeInTheDocument();
    });
  });
});
