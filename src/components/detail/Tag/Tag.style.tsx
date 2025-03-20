import styled from 'styled-components';
import { colors, size } from '../../../styles/Theme';
import { TagType } from '../../../types';

const backgroundColors = {
  음식: '#FFD0BE',
  관광: '#DAF7DA',
  쇼핑: '#FCE8E6',
  숙박: '#EAEAFF',
  카페: '#FFEBBD',
  기타: colors.GRAY_200,
};

export const StyledTag = styled.div<{ category: TagType }>`
  width: ${size.SIZE_016};
  height: ${size.SIZE_010};
  border-radius: ${size.SIZE_006};
  background-color: ${({ category }) => backgroundColors[category] || colors.GRAY_200};
  font-size: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
