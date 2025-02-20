import styled from 'styled-components';
import { size, colors } from '../../../styles/Theme';

export const Option = styled.li`
  list-style: none;
  display: flex;
  flex-direction: row;
  width: 22rem;
  height: 3.75rem;
  padding-left: ${size.SIZE_002};
  border-radius: 0.625rem;
  background-color: ${colors.WHITE};
  gap: ${size.SIZE_006};
  align-items: center;
`;

export const Image = styled.img`
  border-radius: ${size.SIZE_002};
`;

export const LocationLabelWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: ${size.SIZE_002};
`;

export const LocationTypeText = styled.span`
  color: ${colors.GREY_500};
  font-size: ${size.SIZE_006};
`;
