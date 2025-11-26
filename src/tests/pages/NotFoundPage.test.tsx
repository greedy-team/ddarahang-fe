import { screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import NotFoundPage from '../../pages/NotFound/NotFoundPage';
import rtlRender from '../Render';
import { useNavigate } from 'react-router-dom';

const mockedNavigate = vi.fn();
vi.mock('react-router-dom', async (importOriginal) => {
  const actual = await importOriginal<typeof import('react-router-dom')>();
  return {
    ...actual,
    useNavigate: () => mockedNavigate,
  };
});

describe('Page: NotFoundPage', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('안내 문구와 "홈으로" 버튼을 올바르게 렌더링해야 합니다.', () => {
    rtlRender(<NotFoundPage />);

    expect(screen.getByText('요청하신 페이지를 찾을 수 없습니다.')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: '홈으로' })).toBeInTheDocument();
  });

  it('"홈으로" 버튼 클릭 시 메인 페이지("/")로 이동해야 합니다.', () => {
    rtlRender(<NotFoundPage />);
    const homeButton = screen.getByRole('button', { name: '홈으로' });

    fireEvent.click(homeButton);

    expect(mockedNavigate).toHaveBeenCalledWith('/');
  });
});
