import styled from 'styled-components';
import { colors, size } from '../../../styles/Theme';

export const FooterWrapper = styled.footer`
  width: 100vw;
  height: 175px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: ${size.SIZE_006};
  background-color: ${colors.GRAY_200};
  color: ${colors.GREY_400};

  span {
    color: ${colors.GREY_500};
    font-weight: 800;
    font-family: 'Pretendard-SemiBold', sans-serif;
  }

  h4 {
    color: ${colors.GREY_500};
    font-family: 'Pretendard-SemiBold', sans-serif;
  }
`;
