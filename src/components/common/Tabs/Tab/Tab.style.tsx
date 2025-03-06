import styled from 'styled-components';
import { colors, size } from '../../../../styles/Theme';

export const TabContainer = styled.div`
  height: auto;
  padding: 12px 0px;
  display: flex;
  flex-direction: row;
  background-color: ${colors.GRAY_200};
  color: ${colors.GRAY_300};
  font-size: ${size.SIZE_008};
`;

export const TabList = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;

  :last-child {
    border-right: none;
  }
`;

export const TabItem = styled.li`
  list-style: none;
  display: flex;
  flex: 1;
  flex-direction: row;
  justify-content: center;
  cursor: pointer;
  font-size: ${size.SIZE_009};
  font-family: 'Pretendard-SemiBold', sans-serif;
  height: 40px;
  padding-top: 10px;
  padding-bottom: 10px;
  align-items: center;
  position: relative;

  &:not(:last-child)::after {
    content: '';
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
    height: 20px;
    width: 2px;
    background-color: ${colors.GRAY_300};
  }

  &:hover {
    color: ${colors.GREY_500};
  }
`;
