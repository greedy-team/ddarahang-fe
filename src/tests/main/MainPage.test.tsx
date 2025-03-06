import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import useSubmitOption from '../../hooks/select/useSubmitOption';
import TravelVideoList from '../../components/main/TravelVideoList/TravelVideoList';
import { SelectOptionProvider } from '../../store/SelectOptionContext';
import { RouterProvider } from 'react-router-dom';
import { router } from '../../router';

describe('메인 페이지', () => {
  describe('셀렉 박스 테스트 ', () => {
    const { getTravelVideoList, videoList } = useSubmitOption();

    it('사용자가 선택한 지역의 데이터가 없는 경우 안내 문구가 나온다.', async () => {
      getTravelVideoList({
        filter: 'default',
        countryName: '대한민국',
        regionName: '인천',
      });

      render(
        <SelectOptionProvider>
          <TravelVideoList
            videoNumberInPage={8}
            videoList={videoList}
            currentPageNumber={1}
          />

          <RouterProvider router={router} />
        </SelectOptionProvider>,
      );

      expect(screen.getByText('여행 데이터가 존재하지 않습니다.')).toBeInTheDocument();
    });

    // it('나라, 지역 조회에 성공하면 영상 리스트들이 렌더링 된다.', async () => {
    //   const Wrapper = () => {
    //     const { getTravelVideoList, videoList } = useSubmitOption();

    //     act(() => {
    //       getTravelVideoList({
    //         filter: 'default',
    //         countryName: '대한민국',
    //         regionName: '서울',
    //       });
    //     });

    //     return <MainPage />;
    //   };

    //   render(
    //     <SelectOptionProvider>
    //       <Wrapper />
    //     </SelectOptionProvider>,
    //   );

    //   expect(screen.getByText('여행 데이터가 존재하지 않습니다.')).toBeInTheDocument();
    // });
  });
});
