import styled from 'styled-components';
import { size, colors } from '../../../styles/Theme';

export const SelectOptionListContainer = styled.ul<{ isCountryOption: boolean }>`
  position: absolute;
  top: 18%;
  display: block;
  flex-direction: column;
  gap: ${size.SIZE_004};
  background-color: ${colors.WHITE};
  border: 1px solid ${colors.GRAY_200};
  border-radius: ${size.SIZE_008};
  box-shadow: ${size.SIZE_002} ${size.SIZE_002} ${size.SIZE_002} rgba(0, 0, 0, 0.1);
  width: 360px;
  max-height: ${(props) => (props.isCountryOption ? size.SIZE_020 : size.SIZE_022)};
  padding: ${size.SIZE_006} ${size.SIZE_001};
  overflow-y: scroll;
  overflow-x: hidden;
  box-sizing: border-box;

  ${(props) =>
    props.isCountryOption
      ? ''
      : `
        right: 0;
    `}
`;
