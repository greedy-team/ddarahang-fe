import { BrowserRouter, RouterProvider } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import { describe, it, expect, beforeAll, vi } from 'vitest';
import useSubmitOption from '../../hooks/select/useSubmitOption';
import TravelVideoList from '../../components/main/TravelVideoList/TravelVideoList';
import { SelectOptionProvider } from '../../store/SelectOptionContext';
import { router } from '../../router';
import { useEffect } from 'react';

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

const rtlRender = (ui: any, options?: any) => {
  const Wrapper = ({ children }: any) => (
    <BrowserRouter>
      <SelectOptionProvider>
        <RouterProvider router={router} />
        {children}
      </SelectOptionProvider>
    </BrowserRouter>
  );
  return render(ui, { wrapper: Wrapper, ...options });
};

const Main = () => {
  const { getTravelVideoList, videoList } = useSubmitOption();

  useEffect(() => {
    getTravelVideoList({
      filter: 'default',
      countryName: '대한민국',
      regionName: '서울',
    });
  }, []);

  return (
    <TravelVideoList
      videoNumberInPage={8}
      videoList={videoList}
      currentPageNumber={1}
    />
  );
};

describe('메인 페이지', () => {
  describe('셀렉 박스 테스트 ', () => {
    it('사용자가 선택한 지역의 데이터가 없는 경우 안내 문구가 나온다.', async () => {
      rtlRender(<Main />);

      const message = await screen.findByText('여행 데이터가 존재하지 않습니다.');
      expect(message).toBeInTheDocument();
    });
  });
});
