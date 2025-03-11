import { screen, waitFor } from '@testing-library/react';
import { describe, it, expect, beforeAll, vi } from 'vitest';
import rtlRender from '../../Render';
import GlobalHeader from '../../../components/common/GlobalHeader/GlobalHeader';
import { colors } from '../../../styles/Theme';

beforeAll(() => {
  Object.defineProperty(window, 'matchMedia', {
    writable: true,
    value: vi.fn().mockImplementation((query) => ({
      matches: false,
      media: query,
    })),
  });
});

const CustomGlobalHeader = () => {
  return (
    <GlobalHeader
      color={colors.WHITE}
      isIconVisible={true}
    />
  );
};

describe('여행 코스 디테일 페이지', () => {
  it('글로벌 헤더가 렌더링된다.', async () => {
    rtlRender(<CustomGlobalHeader />);

    await waitFor(() => {
      expect(screen.getByTestId('icon-img')).toHaveAttribute('alt', '로그인 아이콘');
    });

    screen.debug();
  });
});
