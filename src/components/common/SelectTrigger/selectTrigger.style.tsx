import styled from 'styled-components';
import { colors, size } from '../../../styles/Theme';

export const SelectTriggerButton = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 20px;
  gap: ${size.SIZE_001};
  width: 20rem;
  height: 70px;
  background-color: ${colors.WHITE};
  border: ${size.SIZE_001} solid ${colors.GRAY_200};
  border-radius: ${size.SIZE_006};
`;

export const SelectLabel = styled.span`
  color: ${colors.GREY_400};
  font-size: ${size.SIZE_006};
`;

export const SelectOption = styled.span`
  color: ${colors.GREY_800};
  font-size: ${size.SIZE_008};
`;
