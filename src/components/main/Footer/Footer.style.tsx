import styled from 'styled-components';
import { colors, size } from '../../../styles/Theme';

export const FooterWrapper = styled.footer`
  width: 100vw;
  height: 175px;
  display: flex;
  justify-content: center;
  flex-direction: row;
  align-items: center;
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

  p {
    display: flex;
    flex-direction: row;
    gap: 10px;
  }
`;

export const FooterBox = styled.div`
  width: 700px;
  padding: 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  @media screen and (max-width: 780px) {
    gap: 10px;
    align-items: center;
    flex-direction: column;
  }
`;

export const TeamLink = styled.a`
  border-bottom: 1px solid ${colors.GRAY_200};
`;

export const FooterContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
