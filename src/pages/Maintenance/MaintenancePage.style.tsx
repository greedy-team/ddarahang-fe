import styled from 'styled-components';
import { colors, size } from '../../styles/Theme';

export const Container = styled.div`
  display: flex;
  flex-direction: column; /* 요소들을 세로 정렬 */
  text-align: center;
  align-items: center;
  justify-content: center;
  height: 100vh;
  padding: ${size.SIZE_016};
  background: ${colors.WHITE};
  gap: ${size.SIZE_010};
`;

export const Title = styled.h2`
  color: ${colors.BLACK};
  font-weight: bold;
`;

export const Subtitle = styled.p`
  color: ${colors.GREY_400};
`;

export const Button = styled.button`
  background: ${colors.WHITE};
  color: ${colors.PRIMARY};
  padding: ${size.SIZE_006} ${size.SIZE_010};
  border: none;
  border-radius: ${size.SIZE_005};
  transition: all 0.3s ease;
  cursor: pointer;

  box-shadow: 2px 4px 8px rgba(0, 0, 0, 0.1);

  &:hover {
    background: ${colors.SECONDARY};
    box-shadow: 4px 6px 12px rgba(0, 0, 0, 0.15);
  }
`;
