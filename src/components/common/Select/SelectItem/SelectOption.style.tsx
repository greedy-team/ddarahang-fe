import styled from 'styled-components';
import { size, colors } from '../../../../styles/Theme';

export const Option = styled.li`
  list-style: none;
  display: flex;
  flex-direction: row;
  width: 95%;
  padding: ${size.SIZE_007};
  border-radius: ${size.SIZE_006};
  background-color: ${colors.WHITE};
  gap: ${size.SIZE_006};
  align-items: center;
  margin-left: ${size.SIZE_006};
  transition: background-color 0.5s ease;

  &:hover {
    background-color: ${colors.SECONDARY};
    cursor: pointer;
  }
`;

export const LocationLabelWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: ${size.SIZE_003};
  font-family: 'Pretendard-SemiBold', sans-serif;
`;

export const LocationTypeText = styled.span`
  color: ${colors.GREY_500};
  font-size: ${size.SIZE_007};
  font-family: 'Pretendard-Regular', sans-serif;
`;
