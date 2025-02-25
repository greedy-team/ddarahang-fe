import styled from 'styled-components';
import { colors, size } from '../../../styles/Theme';

export const SelectTabContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: ${size.SIZE_002};
  width: 60rem;
  height: ${size.SIZE_017};
  background-color: ${colors.WHITE};
  border: 2px solid ${colors.GRAY_200};
  border-right: none;
  border-radius: ${size.SIZE_008};
  box-shadow: ${size.SIZE_003} ${size.SIZE_003} ${size.SIZE_004} rgba(0, 0, 0, 0.1);
`;
