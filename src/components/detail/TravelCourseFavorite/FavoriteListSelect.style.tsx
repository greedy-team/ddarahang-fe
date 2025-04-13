import styled from 'styled-components';
import { colors } from '../../../styles/Theme';

export const Container = styled.div`
  width: 400px;
  height: 600px;
  background-color: ${colors.WHITE};
  border-radius: 20px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: absolute;
  right: 20px;
  top: 100px;
  z-index: 10;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 24px;
  font-size: 18px;
  font-weight: bold;
`;

export const Title = styled.h2`
  font-size: 18px;
  margin: 0;
`;

export const CloseButton = styled.button`
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
`;

export const ListWrapper = styled.div`
  flex: 1;
  overflow-y: auto;
  padding: 0 24px;
`;

export const TravelItem = styled.div`
  background-color: ${colors.WHITE};
  border-radius: 12px;
  padding: 16px;
  margin-bottom: 16px;
  margin-top: 16px;
  cursor: pointer;
  transition: background-color 0.2s;
  box-shadow: 0 4.54px 13.61px rgba(0, 0, 0, 0.1);

  &:hover {
    background-color: ${colors.GRAY_200};
  }
`;

export const TravelName = styled.div`
  font-size: 16px;
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
  margin-top: 4px;

  &:first-child {
    margin-bottom: 3px;
  }
`;

export const Footer = styled.div`
  padding: 20px 24px;
  border-top: 1px solid #eee;
`;

export const SaveButton = styled.button`
  width: 100%;
  background-color: ${colors.WHITE};
  color: ${colors.PRIMARY};
  border: none;
  border-radius: 12px;
  padding: 12px;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.2s;
  box-shadow: 0 4.54px 13.61px rgba(0, 0, 0, 0.1);

  &:hover {
    background-color: ${colors.GRAY_200};
  }
`;
