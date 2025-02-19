import styled from 'styled-components';
import { colors, size } from '../../../styles/Theme';

export const SelectTabContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: ${size.SIZE_001};
  width: 45rem;
  height: 70px;
  background-color: ${colors.WHITE};
  border: 1px solid ${colors.GRAY_200};
  border-right: none;
  border-radius: ${size.SIZE_006};
  box-shadow: ${size.SIZE_001} ${size.SIZE_001} ${size.SIZE_002} rgba(0, 0, 0, 0.1);
`;
