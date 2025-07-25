import styled from 'styled-components';
import { colors } from '../../../styles/Theme';

export const StyledFavoriteTabs = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 0.3rem;
  width: 100%;
  height: 3.5rem;
  padding: 0 1.25rem;
  background-color: ${colors.GRAY_200};
`;
