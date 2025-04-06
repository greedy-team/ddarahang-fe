import { TagType } from '../../../types';
import RectangleButton from '../../common/Button/RectangleButton/RectangleButton';
import { UnselectedFavoriteTab } from './FavoriteTab.style';

interface FavoriteTabProps {
  tag: TagType | '전체';
  selectedTagTab: TagType;
  setSelectedTagTab: React.Dispatch<React.SetStateAction<TagType | '전체'>>;
}

const FavoriteTabItem = ({ tag, selectedTagTab, setSelectedTagTab }: FavoriteTabProps) => {
  const isSelected = tag === selectedTagTab;
  const ariaLabel = `${tag} 탭 ${isSelected ? '선택됨' : '선택 안됨'}`;

  return isSelected ? (
    <RectangleButton
      text={tag}
      onClick={() => {
        setSelectedTagTab(tag);
      }}
    />
  ) : (
    <UnselectedFavoriteTab
      onClick={() => {
        setSelectedTagTab(tag);
      }}
      aria-label={ariaLabel}
    >
      {tag}
    </UnselectedFavoriteTab>
  );
};

export default FavoriteTabItem;
