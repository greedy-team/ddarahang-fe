import styled from 'styled-components';
import { colors, size } from '../../../styles/Theme';

export const FavoriteListSelectContainer = styled.div<{ $isVisible: boolean }>`
  width: ${size.SIZE_024};
  height: 90%;
  background-color: ${colors.WHITE};
  border-radius: ${size.SIZE_010};
  display: flex;
  box-shadow: 0 0 ${size.SIZE_010} rgba(0, 0, 0, 0.1);
  flex-direction: column;
  justify-content: space-between;
  position: absolute;
  margin: 1.25rem;
  top: 6.125rem;
  z-index: 10;

  opacity: ${(props) => (props.$isVisible ? 1 : 0)};
  visibility: ${(props) => (props.$isVisible ? 'visible' : 'hidden')};
  transform: ${(props) => (props.$isVisible ? 'translateY(0)' : 'translateY(20px)')};
  pointer-events: ${(props) => (props.$isVisible ? 'auto' : 'none')};
  transition:
    opacity 0.3s ease,
    transform 0.3s ease,
    visibility 0.3s;
`;

export const FavoriteListSelectHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${size.SIZE_011};
  font-size: ${size.SIZE_010};
`;

export const FavoriteListSelectTitle = styled.h2`
  font-size: ${size.SIZE_010};
  color: ${colors.BLACK};
  font-family: 'Pretendard-SemiBold';
  font-weight: bold;
  margin: 0;
`;

export const FavoriteListSelectCloseButton = styled.button`
  background: none;
  border: none;
  font-size: ${size.SIZE_011};
  cursor: pointer;
`;

export const FavoriteListSelectListWrapper = styled.div`
  flex: 1;
  overflow-y: auto;
  padding: 0 ${size.SIZE_011};
`;

export const FavoriteListSelectItem = styled.div<{ $isSelected: boolean }>`
  background-color: ${(props) => (props.$isSelected ? colors.GRAY_200 : colors.WHITE)};
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

export const FavoriteListSelectItemName = styled.div`
  font-size: ${size.SIZE_009};
  font-weight: 600;
`;

export const FavoriteListSelectItemDescContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  margin: 0.25rem 0 0 0;
  width: 100%;
`;

export const FavoriteListSelectItemDesc = styled.div<{ $size: string }>`
  font-size: ${(props) => props.$size};
  color: ${colors.GREY_500};
  margin-top: ${size.SIZE_004};

  &:first-child {
    margin-bottom: 0.25rem;
  }
`;

export const FavoriteListSelectFooter = styled.div`
  padding: ${size.SIZE_010} ${size.SIZE_011};
`;

export const FavoriteListSelectSaveButton = styled.button`
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
  box-shadow: 0 0.25rem ${size.SIZE_008} rgba(0, 0, 0, 0.1);

  &:hover {
    background-color: ${colors.GRAY_200};
  }
`;

export const FavoriteListSelectToast = styled.div`
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
