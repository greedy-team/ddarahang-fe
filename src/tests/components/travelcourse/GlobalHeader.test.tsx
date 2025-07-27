import { screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import rtlRender from '../../Render';
import GlobalHeader from '../../../components/common/GlobalHeader/GlobalHeader';

const CustomGlobalHeader = () => (
  <GlobalHeader
    isMobile={false}
    isMainHeader={false}
    isIconVisible={true}
    setCurrentPageNumber={() => {}}
  />
);

describe('글로벌 헤더 컴포넌트', () => {
  it('아이콘이 보이도록 설정하면 "찜한장소" 링크가 렌더링된다.', () => {
    rtlRender(<CustomGlobalHeader />);

    expect(screen.getByText('찜한장소')).toBeInTheDocument();
  });
});
