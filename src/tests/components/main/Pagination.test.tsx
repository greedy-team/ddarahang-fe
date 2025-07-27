import { screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import rtlRender from '../../Render';
import Pagination from '../../../components/main/Pagination/Pagination';
import { colors } from '../../../styles/Theme';

describe('Component: Pagination', () => {
  it('전달된 총 페이지 수만큼 페이지 버튼을 렌더링해야 합니다.', () => {
    rtlRender(
      <Pagination
        color={colors.WHITE}
        totalPageNumber={5}
        currentPageNumber={1}
        onPageClick={() => {}}
      />,
    );
    expect(screen.getByRole('button', { name: '1' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: '5' })).toBeInTheDocument();
    expect(screen.queryByRole('button', { name: '6' })).not.toBeInTheDocument();
  });

  it('페이지 버튼 클릭 시 onPageClick 함수가 올바른 페이지 번호와 함께 호출되어야 합니다.', () => {
    const onPageClickMock = vi.fn();
    rtlRender(
      <Pagination
        color={colors.WHITE}
        totalPageNumber={5}
        currentPageNumber={1}
        onPageClick={onPageClickMock}
      />,
    );
    const pageThreeButton = screen.getByRole('button', { name: '3' });
    fireEvent.click(pageThreeButton);
    expect(onPageClickMock).toHaveBeenCalledWith(3);
  });
});
