import { TagType } from '../../../types';
import { StyledTag } from './Tag.style';

interface TagProps {
  tagName: TagType;
}

const Tag = ({ tagName }: TagProps) => {
  return <StyledTag category={tagName}>#{tagName}</StyledTag>;
};

export default Tag;
