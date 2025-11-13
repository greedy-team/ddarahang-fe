import styled, { css } from 'styled-components';
import { colors } from '../../../styles/Theme';

interface LazyImageProps {
  $width?: string;
  $height?: string;
  $aspectRatio?: string;
  $borderRadius?: string;
  $isLoaded?: boolean;
}

export const StyledLazyImage = styled.img<LazyImageProps>`
  width: ${({ $width }) => $width || '100%'};
  height: ${({ $height }) => $height || 'auto'};
  aspect-ratio: ${({ $aspectRatio }) => $aspectRatio || 'auto'};
  border-radius: ${({ $borderRadius }) => $borderRadius || '0px'};
  object-fit: cover;

  opacity: ${({ $isLoaded }) => ($isLoaded ? 1 : 0.2)};
  transition: opacity 0.4s ease;

  ${({ $isLoaded }) =>
    !$isLoaded &&
    css`
      background-color: ${colors.GRAY_200};
      background-image: linear-gradient(90deg, ${colors.GRAY_200} 25%, ${colors.GRAY_300} 50%, ${colors.GRAY_200} 75%);
      background-size: 400% 100%;
      animation: skeleton-shimmer 1.2s ease-in-out infinite;
    `}

  @keyframes skeleton-shimmer {
    0% {
      background-position: 100% 0;
    }
    100% {
      background-position: 0 0;
    }
  }
`;
