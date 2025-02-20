import styled from 'styled-components';
import { colors, size } from '../../../styles/Theme';

export const SelectTriggerButton = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: ${size.SIZE_010};
  gap: ${size.SIZE_002};
  width: ${size.SIZE_022};
  height: ${size.SIZE_016};
  background-color: ${colors.WHITE};
  border-radius: ${size.SIZE_008};
  border: none;
`;

export const SelectLabel = styled.span`
  color: ${colors.GREY_400};
  font-size: ${size.SIZE_007};
`;

export const SelectOption = styled.span`
  color: ${colors.GREY_800};
  font-size: ${size.SIZE_009};
`;
