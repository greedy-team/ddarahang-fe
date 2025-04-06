import { TAGS } from '../../../constants/tags';
import { TagType } from '../../../types';
import FavoriteTabItem from '../FavoriteTab/FavoriteTab';
import { StyledFavoriteTabs } from './FavoriteTabs.style';

interface FavoriteTabsProps {
  selectedTagTab: TagType;
  setSelectedTagTab: React.Dispatch<React.SetStateAction<TagType | '전체'>>;
}

const FavoriteTabs = ({ selectedTagTab, setSelectedTagTab }: FavoriteTabsProps) => {
  return (
    <StyledFavoriteTabs>
      {TAGS.map((tag) => (
        <FavoriteTabItem
          key={tag}
          tag={tag}
          selectedTagTab={selectedTagTab}
          setSelectedTagTab={setSelectedTagTab}
        />
      ))}
    </StyledFavoriteTabs>
  );
};

export default FavoriteTabs;
