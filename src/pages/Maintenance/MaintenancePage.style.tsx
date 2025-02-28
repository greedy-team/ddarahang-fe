import styled from 'styled-components';
import { colors, size } from '../../styles/Theme';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;

  padding: ${size.SIZE_016};
  background: ${colors.WHITE};
  gap: ${size.SIZE_010};
`;

export const Title = styled.h2`
  color: ${colors.BLACK};
  font-size: ${size.SIZE_013};
  font-family: 'Pretendard-Bold';
`;

export const Subtitle = styled.p`
  color: ${colors.GREY_400};
  font-size: ${size.SIZE_010};
`;
