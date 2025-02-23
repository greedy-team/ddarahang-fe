import styled from 'styled-components';
import { colors, size } from '../../../styles/Theme';

export const PlaceCardContainer = styled.li`
  min-width: ${size.SIZE_021};
  width: 100%;
  height: ${size.SIZE_016};
  padding: ${size.SIZE_010};
  display: flex;
  align-items: center;
  border-radius: ${size.SIZE_006};
  border: 1px solid ${colors.GRAY_200};
  box-shadow: ${size.SIZE_003} ${size.SIZE_003} ${size.SIZE_003} rgba(0, 0, 0, 0.1);

  &:hover {
    cursor: pointer;
    background-color: ${colors.GRAY_200};
  }

  &:active {
    border: 1px solid ${colors.PRIMARY};
    color: ${colors.PRIMARY};
    background-color: ${colors.SECONDARY};
    font-weight: 700;
    font-family: 'Pretendard-SemiBold', sans-serif;
  }
`;

export const PlaceCardWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 80%;
  gap: ${size.SIZE_010};
`;

export const PlaceCircleStep = styled.div`
  width: ${size.SIZE_011};
  height: ${size.SIZE_011};
  font-size: ${size.SIZE_007};
  padding: ${size.SIZE_006};
  color: ${colors.WHITE};
  background-color: ${colors.LIGHT_BLUE};
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: ${size.SIZE_019};
`;
