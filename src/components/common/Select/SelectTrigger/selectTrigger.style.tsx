import styled from 'styled-components';
import { colors, size } from '../../../../styles/Theme';

export const SelectTriggerButton = styled.div<{ $isFocus: boolean }>`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: ${size.SIZE_002};
  width: 100%;
  height: 100%;
  background-color: ${colors.WHITE};
  border-radius: ${size.SIZE_007};
  border: none;
  transition: background-color 0.5s ease;

  &:hover {
    background-color: ${colors.GRAY_200};
  }

  @media screen and (max-width: 780px) {
    width: 100%;
    justify-content: flex-start;
    height: ${size.SIZE_017};
    border-radius: 0;
  }

  ${({ $isFocus }) =>
    $isFocus
      ? `
        border: 1px solid ${colors.PRIMARY};
        background: ${colors.SECONDARY};
        &:hover {
            background-color: ${colors.SECONDARY}
        }
      `
      : `
      border: none;
      `}

  @media screen and (max-width: 1080px) {
    justify-content: center;
  }
`;

export const SelectLabel = styled.span`
  color: ${colors.GREY_400};
  font-size: ${size.SIZE_008};
`;

export const SelectOption = styled.span`
  color: ${colors.GREY_800};
  font-size: 1.125rem;
  font-family: 'Pretendard-SemiBold', sans-serif;
`;

export const SelectTextWrapper = styled.button`
  display: flex;
  width: 100%;
  padding: ${size.SIZE_009};
  background-color: transparent;
  border: none;
  flex-direction: column;
  align-items: flex-start;
  gap: ${size.SIZE_003};
`;

export const CircleButtonWrapper = styled.div`
  padding-right: ${size.SIZE_006};
  @media screen and (max-width: 780px) {
    display: none;
  }
`;
