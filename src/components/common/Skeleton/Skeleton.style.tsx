import styled, { keyframes } from 'styled-components';
import { colors } from '../../../styles/Theme';

const shimmer = keyframes`
  0% {
    background-position: -468px 0;
  }
  100% {
    background-position: 468px 0;
  }
`;

interface SkeletonProps {
  $width?: string;
  $height?: string;
  $borderRadius?: string;
  $aspectRatio?: string;
}

export const SkeletonContainer = styled.div<SkeletonProps>`
  width: ${(props) => props.$width || '100%'};
  height: ${(props) => props.$height || '1rem'};
  border-radius: ${(props) => props.$borderRadius || '4px'};
  aspect-ratio: ${(props) => props.$aspectRatio || 'auto'};
  background: linear-gradient(90deg, ${colors.GRAY_200} 25%, ${colors.GRAY_300} 50%, ${colors.GRAY_200} 75%);
  background-size: 468px 100%;
  animation: ${shimmer} 1.5s ease-in-out infinite;
  display: block;
`;
