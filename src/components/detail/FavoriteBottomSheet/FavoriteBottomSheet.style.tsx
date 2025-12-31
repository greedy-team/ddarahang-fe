import styled from 'styled-components';
import { colors, size } from '../../../styles/Theme';

export const FavoriteTitle = styled.span`
  color: ${colors.PRIMARY};
  padding-right: 4px;
`;

export const FavoriteListItem = styled.li<{ $isSelected: boolean }>`
  width: 100%;
  padding: ${size.SIZE_006} ${size.SIZE_006};

  border-radius: ${size.SIZE_005};

  background-color: ${({ $isSelected }) => ($isSelected ? colors.SECONDARY : colors.WHITE)};

  display: flex;
  flex-direction: column;
  gap: ${size.SIZE_005};

  cursor: pointer;

  h4 {
    font-size: ${size.SIZE_009};
    font-weight: 600;
    margin: 0;
  }

  p {
    font-size: ${size.SIZE_008};
    color: ${colors.GREY_500};
    margin: 0;
  }

  &:active {
    opacity: 0.8;
  }
`;

export const FavoriteToast = styled.div`
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
