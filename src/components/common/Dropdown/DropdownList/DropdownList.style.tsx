import styled from 'styled-components';
import { colors, size } from '../../../../styles/Theme';

export const DropdownListUl = styled.ul<{ $isOpen: boolean }>`
  list-style: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: ${size.SIZE_003};
  border-radius: ${size.SIZE_004};
  border: 1px solid ${colors.GRAY_300};
  background-color: ${colors.WHITE};
  gap: ${size.SIZE_002};
  width: ${size.SIZE_019};
  height: 5rem;
  position: absolute;
  top: 120%;
  z-index: 10;

  transition: all 1s;

  ${({ $isOpen }) =>
    $isOpen
      ? `
        opacity: 1;
        transform: translateY(0);
        z-index: 11; 
        pointer-events: auto;
      `
      : `
        opacity: 0;
        transform: translateY(-10px);
        pointer-events: none;
      `}
`;
