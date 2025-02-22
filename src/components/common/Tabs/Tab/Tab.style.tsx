import styled from 'styled-components';
import { colors, size } from '../../../../styles/Theme';

export const TabContainer = styled.div`
  width: 50vw;
  height: 70px;
  display: flex;
  flex-direction: row;
  background-color: ${colors.GRAY_200};
  color: ${colors.GRAY_300};
  font-size: ${size.SIZE_008};
`;

export const TabList = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: ${size.SIZE_006} ${size.SIZE_012};
`;

export const TabItem = styled.li`
  list-style: none;
  display: flex;
  flex-direction: row;
  cursor: pointer;
  font-size: ${size.SIZE_009};
  width: 100px;
  font-family: 'Pretendard-SemiBold', sans-serif;
  border-right: 2px solid ${colors.GRAY_300};
  transition: all 0.3s ease;

  &:hover {
    color: ${colors.GREY_500};
  }
`;
