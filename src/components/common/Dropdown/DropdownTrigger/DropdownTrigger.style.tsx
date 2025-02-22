import styled from 'styled-components';
import { colors, size } from '../../../../styles/Theme';

export const StyledDropDownTrigger = styled.button`
  width: ${size.SIZE_019};
  height: 2.25rem;
  background-color: ${colors.WHITE};
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: ${size.SIZE_009};
  border-radius: ${size.SIZE_004};
  padding: ${size.SIZE_006};
  border: 1px solid ${colors.GRAY_300};

  & > svg:active {
    fill: ${colors.GRAY_200};
  }
`;
