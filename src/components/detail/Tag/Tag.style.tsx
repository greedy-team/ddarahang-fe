import styled from 'styled-components';
import { colors, size } from '../../../styles/Theme';
import { TagType } from '../../../types';

const backgroundColors = {
  음식: '#FFD0BE',
  관광: '#DAF7DA',
  쇼핑: '#FCE8E6',
  숙박: '#EAEAFF',
  카페: '#FFEBBD',
  기타: '#E1E1E1',
};

export const StyledTag = styled.p<{ category: TagType }>`
  width: ${size.SIZE_016};
  height: ${size.SIZE_011};
  border-radius: ${size.SIZE_008};
  background-color: ${({ category }) => backgroundColors[category] || colors.GRAY_200};
  font-size: ${size.SIZE_007};
  display: flex;
  align-items: center;
  justify-content: center;
`;
