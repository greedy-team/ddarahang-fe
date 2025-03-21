import styled from 'styled-components';
import { colors, size } from '../../styles/Theme';

export const StyledMainPageLayout = styled.div`
  min-height: 100vh;
  width: 100vw;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;

  gap: ${size.SIZE_006};
`;

export const StyledContentsWrapper = styled.div`
  display: flex;
  min-height: 30rem;
  flex-direction: column;
  align-items: center;
  gap: ${size.SIZE_006};
`;

export const StyledErrorMessage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${size.SIZE_005};
  font-family: 'Pretendard-SemiBold';
  margin-top: ${size.SIZE_010};
  font-size: ${size.SIZE_009};

  span {
    font-family: 'Pretendard-Regular';
    color: ${colors.GREY_400};
    font-size: ${size.SIZE_008};
  }
`;
