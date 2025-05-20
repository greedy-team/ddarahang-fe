import { TagType } from '../../../types';
import { StyledTag } from './Tag.style';

interface TagProps {
  tagName: TagType;
}

const Tag = ({ tagName }: TagProps) => {
  return (
    <StyledTag
      aria-label='장소 태그'
      category={tagName}
    >
      #{tagName}
    </StyledTag>
  );
};

export default Tag;
