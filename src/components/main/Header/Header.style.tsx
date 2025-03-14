import styled from 'styled-components';
import { colors, size } from '../../../styles/Theme';

export const HeaderWrapper = styled.header`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${size.SIZE_010};
  padding: ${size.SIZE_012};
  font-family: 'Pretendard-SemiBold', sans-serif;
  border-bottom: 2px solid ${colors.GRAY_200};

  h1 {
    font-family: 'Pretendard-Bold', sans-serif;
  }

  p {
    font-family: 'Pretendard-Regular', sans-serif;
    color: ${colors.GREY_400};
  }

  @media screen and (max-width: 780px) {
    h1 {
      display: none;
    }

    p {
      font-size: ${size.SIZE_009};
      color: ${colors.BLACK};
    }
  }
`;
