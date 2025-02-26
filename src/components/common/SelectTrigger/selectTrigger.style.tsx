import styled from 'styled-components';
import { colors, size } from '../../../styles/Theme';

export const SelectTriggerButton = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: ${size.SIZE_010};
  gap: ${size.SIZE_002};
  width: 50%;
  height: 100%;
  background-color: ${colors.WHITE};
  border-radius: ${size.SIZE_008};
  border: none;

  transition: background-color 0.5s ease;

  &:hover {
    background-color: ${colors.GRAY_200};
  }
`;

export const SelectLabel = styled.span`
  color: ${colors.GREY_400};
  font-size: ${size.SIZE_008};
`;

export const SelectOption = styled.span`
  color: ${colors.GREY_800};
  font-size: ${size.SIZE_009};
  font-family: 'Pretendard-SemiBold', sans-serif;
`;

export const SelectTextWrapper = styled.div`
  display: flex;
  min-width: 200px;
  flex-direction: column;
  align-items: flex-start;
`;
