import styled from 'styled-components';
import { size, colors } from '../../../styles/Theme';

export const SelectOptionListContainer = styled.ul<{ isCountryOption: boolean }>`
  position: absolute;
  top: 25%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: ${size.SIZE_001};
  background-color: ${colors.WHITE};
  border: 1px solid ${colors.GRAY_200};
  border-radius: ${size.SIZE_006};
  box-shadow: ${size.SIZE_001} ${size.SIZE_001} ${size.SIZE_002} rgba(0, 0, 0, 0.1);
  width: 23rem;
  height: 145px;
  padding: 0;

  ${(props) =>
    props.isCountryOption
      ? ''
      : `
        right: 0;
    `}
`;
