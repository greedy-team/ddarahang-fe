import styled from 'styled-components';
import { size } from '../../../../styles/Theme';

export const Panels = styled.div`
  width: 100%;
  max-height: 31.25rem;
  height: auto;
  overflow-y: auto;
  overflow-x: hidden;
  padding: ${size.SIZE_008};
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${size.SIZE_011};

  @media screen and (max-width: 780px) {
    max-height: unset;
    height: auto;
    overflow-y: unset;
  }
`;

export const StyledWarningMessage = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  font-weight: 800;
`;

export const TabErrorMessage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-weight: 800;
  font-size: ${size.SIZE_009};
  gap: ${size.SIZE_005};
`;
