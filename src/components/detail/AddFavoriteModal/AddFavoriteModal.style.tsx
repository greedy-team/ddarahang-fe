import styled from 'styled-components';
import { colors, size } from '../../../styles/Theme';

export const FavoriteOverlay = styled.div<{ $isVisible: boolean }>`
  position: fixed;
  inset: 0;

  display: flex;
  justify-content: flex-end;

  opacity: ${(p) => (p.$isVisible ? 1 : 0)};
  pointer-events: ${(p) => (p.$isVisible ? 'auto' : 'none')};

  transition: opacity 0.25s ease;
`;

export const AddFavoriteContainer = styled.div<{ $isVisible: boolean }>`
  width: ${size.SIZE_024};
  height: 100vh;
  background: ${colors.WHITE};

  box-shadow: -4px 0 10px rgba(0, 0, 0, 0.1);

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  transform: translateX(${(p) => (p.$isVisible ? '0' : '100%')});
  transition: transform 0.25s ease;

  position: relative;
`;

export const AddFavoriteHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${size.SIZE_011};
  font-size: ${size.SIZE_010};
`;

export const AddFavoriteTitle = styled.h2`
  font-size: ${size.SIZE_010};
  color: ${colors.BLACK};
  font-family: 'Pretendard-SemiBold';
  font-weight: bold;
  margin: 0;
`;

export const AddFavoriteCloseButton = styled.button`
  background: none;
  border: none;
  font-size: ${size.SIZE_011};
  cursor: pointer;
`;

export const AddFavoriteListWrapper = styled.div`
  flex: 1;
  overflow-y: auto;
  padding: 0 ${size.SIZE_011};
`;

export const AddFavoriteItem = styled.div<{ $isSelected: boolean }>`
  background-color: ${(props) => (props.$isSelected ? colors.GRAY_200 : colors.WHITE)};
  border-radius: ${size.SIZE_007};
  padding: ${size.SIZE_009};
  margin-bottom: ${size.SIZE_009};
  margin-top: ${size.SIZE_009};
  cursor: pointer;
  transition: background-color 0.2s;
  box-shadow: 0 5px ${size.SIZE_008} rgba(0, 0, 0, 0.1);

  font-family: ${(props) => (props.$isSelected ? 'Pretendard-SemiBold' : '')};

  &:hover {
    background-color: ${colors.GRAY_200};
  }
`;

export const AddFavoriteItemName = styled.div`
  font-size: ${size.SIZE_009};
  font-weight: 600;
`;

export const AddFavoriteItemDescContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  margin: 0.25rem 0 0 0;
  width: 100%;
`;

export const AddFavoriteItemDesc = styled.div<{ $size: string }>`
  font-size: ${(props) => props.$size};
  color: ${colors.GREY_500};
  margin-top: ${size.SIZE_004};

  &:first-child {
    margin-bottom: 0.25rem;
  }
`;

export const AddFavoriteFooter = styled.div`
  padding: ${size.SIZE_010} ${size.SIZE_011};
`;

export const AddFavoriteToast = styled.div`
  position: absolute;
  bottom: 50%;
  left: 50%;
  transform: translateX(-50%);
  background-color: ${colors.BLACK};
  color: ${colors.WHITE};
  padding: 0.75rem 1.25rem;
  border-radius: 0.5rem;
  z-index: 1000;
  font-size: 0.875rem;
`;
