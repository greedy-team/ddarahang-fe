import styled from 'styled-components';
import { size } from '../../../../styles/Theme';
import { MOBILE_MAP_BREAKPOINT } from '../../../../constants/size';

interface PanelsProps {
  $isScrollPanels?: boolean;
}

export const Panels = styled.div<PanelsProps>`
  width: 100%;
  height: 100%;
  padding: ${size.SIZE_008};
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${size.SIZE_011};

  @media screen and (max-width: ${MOBILE_MAP_BREAKPOINT}px) {
    max-height: 20rem;
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
  height: 100vh;
  align-items: center;
  flex-direction: column;
  font-weight: 800;
  font-size: ${size.SIZE_009};
  gap: ${size.SIZE_005};
`;
