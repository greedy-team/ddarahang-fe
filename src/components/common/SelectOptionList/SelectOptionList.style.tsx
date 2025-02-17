import styled from 'styled-components';
import { size, colors } from '../../../styles/Theme';

export const SelectOptionListContainer = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: ${size.SIZE_001};
  background-color: ${colors.WHITE};
  width: 20rem;
  padding: 0;
  height: 145px;
  border-radius: ${size.SIZE_006};
`;
