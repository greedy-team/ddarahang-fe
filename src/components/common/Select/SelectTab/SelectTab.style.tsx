import styled from 'styled-components';
import { colors, size } from '../../../../styles/Theme';

export const SelectTabContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: ${size.SIZE_002};
  width: 100%;
  height: ${size.SIZE_017};
  background-color: ${colors.WHITE};
  border: 1px solid ${colors.GRAY_200};
  border-right: none;
  border-radius: ${size.SIZE_008};
  box-shadow:
    inset 0 0 0 1px ${colors.GRAY_200},
    ${size.SIZE_003} ${size.SIZE_003} ${size.SIZE_004} rgba(0, 0, 0, 0.1);
  z-index: 5;

  @media screen and (max-width: 780px) {
    flex-direction: column;
    gap: ${size.SIZE_004};
    height: auto;
    padding: ${size.SIZE_004};
    border-radius: ${size.SIZE_006};
  }
`;

export const MobileButton = styled.button`
  display: none;

  @media screen and (max-width: 780px) {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${colors.PRIMARY};
    color: ${colors.WHITE};
    font-size: ${size.SIZE_010};
    border: none;
    font-weight: 600;
    border-radius: ${size.SIZE_005};
    height: ${size.SIZE_016};
  }
`;
