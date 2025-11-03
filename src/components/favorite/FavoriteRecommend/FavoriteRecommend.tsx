import { StyledFavoriteRecommend } from './FavoriteRecommend.styled';
import TravelVideoList from '../../main/TravelVideoList/TravelVideoList';
import Loading from '../../common/Loading/Loading';
import { Suspense } from 'react';
import { TitleWrapper } from '../../../pages/Favorite/FavoritePage.style';
import { useSelectOptionContext } from '../../../hooks/context/useSelectOptionContext';

import { DEFAULT_REGION_OPTION } from '../../../constants/options';

const FavoriteRecommend = () => {
  const { selectedOption } = useSelectOptionContext();

  return (
    <StyledFavoriteRecommend>
      <TitleWrapper>
        <p>
          {selectedOption.selectedOptionLabel !== DEFAULT_REGION_OPTION
            ? selectedOption.selectedOptionLabel
            : selectedOption.countryName}
          (으)로 떠나시나요?
        </p>
        <h3>
          {selectedOption.selectedOptionLabel !== DEFAULT_REGION_OPTION
            ? selectedOption.selectedOptionLabel
            : selectedOption.countryName}
          추천 영상
        </h3>

        <Suspense fallback={<Loading loading={true} />}>
          <TravelVideoList isFavoritePage={true} />
        </Suspense>
      </TitleWrapper>
    </StyledFavoriteRecommend>
  );
};

export default FavoriteRecommend;
