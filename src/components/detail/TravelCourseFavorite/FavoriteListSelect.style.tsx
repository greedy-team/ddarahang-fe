import styled from 'styled-components';
import { colors, size } from '../../../styles/Theme';

export const Container = styled.div<{ $isVisible: boolean }>`
  width: ${size.SIZE_024};
  height: 90%;
  background-color: ${colors.WHITE};
  border-radius: ${size.SIZE_010};
  box-shadow: 0 0 ${size.SIZE_010} rgba(0, 0, 0, 0.1);
  display: ${(props) => (props.$isVisible ? 'flex' : 'none')};
  flex-direction: column;
  justify-content: space-between;
  position: absolute;
  margin: 20px;
  top: 6.125rem;
  z-index: 10;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${size.SIZE_011};
  font-size: ${size.SIZE_010};
`;

export const Title = styled.h2`
  font-size: ${size.SIZE_010};
  color: ${colors.BLACK};
  font-family: 'Pretendard-SemiBold';
  font-weight: bold;
  margin: 0;
`;

export const CloseButton = styled.button`
  background: none;
  border: none;
  font-size: ${size.SIZE_011};
  cursor: pointer;
`;

export const ListWrapper = styled.div`
  flex: 1;
  overflow-y: auto;
  padding: 0 ${size.SIZE_011};
`;

export const TravelItem = styled.div<{ $isSelected: boolean }>`
  background-color: ${(props) => (props.$isSelected ? '#f1f1f1' : '#f9f9f9')};
  border-radius: ${size.SIZE_007};
  padding: ${size.SIZE_009};
  margin-bottom: ${size.SIZE_009};
  margin-top: ${size.SIZE_009};
  cursor: pointer;
  transition: background-color 0.2s;
  box-shadow: 0 5px ${size.SIZE_008} rgba(0, 0, 0, 0.1);

  &:hover {
    background-color: ${colors.GRAY_200};
  }
`;

export const TravelName = styled.div`
  font-size: ${size.SIZE_009};
  font-weight: 600;
`;

export const TravelDescContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3px;
  margin: 3px 0 0 0;
  width: 100%;
`;

export const TravelDesc = styled.div<{ $size: string }>`
  font-size: ${(props) => props.$size};
  color: ${colors.GREY_500};
  margin-top: ${size.SIZE_004};

  &:first-child {
    margin-bottom: 3px;
  }
`;

export const Footer = styled.div`
  padding: ${size.SIZE_010} ${size.SIZE_011};
`;

export const SaveButton = styled.button`
  width: 100%;
  background-color: ${colors.WHITE};
  color: ${colors.PRIMARY};
  border: none;
  border-radius: ${size.SIZE_007};
  padding: ${size.SIZE_007};
  font-size: ${size.SIZE_009};
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.2s;
  box-shadow: 0 5px ${size.SIZE_008} rgba(0, 0, 0, 0.1);

  &:hover {
    background-color: ${colors.GRAY_200};
  }
`;
