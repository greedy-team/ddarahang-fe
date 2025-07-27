import { screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import SortDropdown from '../../../components/main/SortDropdown/SortDropdown';
import rtlRender from '../../Render';
import { SortOptionProvider } from '../../../store/SortOptionContext';

describe('정렬 드롭 다운 컴포넌트', () => {
  it('기본적으로 현재 정렬 옵션("최신순")을 표시해야 합니다.', () => {
    rtlRender(
      <SortOptionProvider>
        <SortDropdown onSubmitDropdown={() => {}} />
      </SortOptionProvider>,
    );
    const trigger = screen.getByAltText('아래 화살표').closest('button');
    expect(trigger).toHaveTextContent('최신순');
  });

  it('드롭다운을 열고 "조회순"을 클릭하면 onSubmitDropdown 함수가 "viewCount"와 함께 호출되어야 합니다.', async () => {
    const onSubmitDropdownMock = vi.fn();
    rtlRender(
      <SortOptionProvider>
        <SortDropdown onSubmitDropdown={onSubmitDropdownMock} />
      </SortOptionProvider>,
    );

    const trigger = screen.getByAltText('아래 화살표').closest('div[role="button"]');
    expect(trigger).toBeInTheDocument();
    fireEvent.click(trigger!);

    const viewCountOption = await screen.findByRole('button', { name: '조회순' });
    fireEvent.click(viewCountOption);

    expect(onSubmitDropdownMock).toHaveBeenCalledWith('viewCount');
  });
});
