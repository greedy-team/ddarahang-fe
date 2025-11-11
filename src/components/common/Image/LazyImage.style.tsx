import styled from 'styled-components';
import { colors } from '../../../styles/Theme';

interface LazyImageProps {
  $width?: string;
  $height?: string;
  $aspectRatio?: string;
  $borderRadius?: string;
  $isLoaded?: boolean;
  $shouldShowSkeleton?: boolean;
}

export const StyledLazyImage = styled.img<LazyImageProps>`
  width: ${(props) => props.$width || '100%'};
  height: ${(props) => props.$height || 'auto'};
  aspect-ratio: ${(props) => props.$aspectRatio || 'auto'};
  border-radius: ${(props) => props.$borderRadius || '0px'};
  transition: opacity 0ms ease;
  opacity: ${(props) => (props.$isLoaded ? 1 : 0)};

  ${(props) =>
    props.$shouldShowSkeleton &&
    `
    background-color: ${colors.GRAY_200};
    background-image: linear-gradient(90deg, ${colors.GRAY_200} 25%, ${colors.GRAY_300} 50%, ${colors.GRAY_200} 75%);
    background-size: 468px 100%;
    animation: skeleton-shimmer 1.5s ease-in-out infinite;
  `}
`;
