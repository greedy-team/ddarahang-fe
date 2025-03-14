import styled from 'styled-components';
import { colors, size } from '../../../../styles/Theme';

export const SelectOptionListContainer = styled.ul<{ $isCountryOption: boolean; $isOpen: boolean }>`
  position: absolute;
  top: 120%;
  display: block;
  flex-direction: column;
  gap: ${size.SIZE_004};
  background-color: ${colors.WHITE};
  border: 1px solid ${colors.GRAY_200};
  border-radius: ${size.SIZE_008};
  box-shadow: ${size.SIZE_002} ${size.SIZE_002} ${size.SIZE_002} rgba(0, 0, 0, 0.1);
  width: 480px;
  max-height: 29rem;
  padding: ${size.SIZE_006} ${size.SIZE_001};
  overflow-y: scroll;
  overflow-x: hidden;
  box-sizing: border-box;
  transition:
    opacity 0.5s,
    transform 0.5s;

  @media screen and (max-width: 780px) {
    width: 100vw;
    height: 100vh;
    position: fixed;
    left: 0;
    top: 0;
    max-height: 100vh;
    border-radius: 0;
    z-index: 9999;
  }

  ${(props) =>
    props.$isCountryOption
      ? ''
      : `
        right: 0;
    `}

  ${(props) =>
    props.$isOpen
      ? `
        opacity: 1;
        transform: translateY(0);
        z-index: 12; 
        pointer-events: auto;
      `
      : `
        opacity: 0;
        transform: translateY(-10px);
        pointer-events: none;
      `}
`;

export const MobileTitle = styled.h3`
  display: none;

  @media screen and (max-width: 780px) {
    display: block;
    font-size: ${size.SIZE_011};
    font-weight: 700;
    padding: ${size.SIZE_006};
    border-bottom: 1px solid ${colors.GRAY_200};
  }
`;
