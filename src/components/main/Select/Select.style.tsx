import styled from 'styled-components';

export const SelectContainer = styled.div<{ $isOpen: boolean }>`
  display: flex;
  flex-direction: row;
  position: relative;
  transition: all 0.8s;
  width: 60%;

  ${({ $isOpen }) =>
    $isOpen &&
    `
    &::before {
      content: '';
      position: fixed;
      top: 0;
      left: 0;
      width: 100vw;
      height: 100vh;
      background: rgba(0, 0, 0, 0.2); 
      z-index: 10; 
    }
  `}
`;
