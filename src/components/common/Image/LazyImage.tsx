import { useLazyLoadImage } from '../../../hooks/image/useLazyLoadImage';
import { StyledLazyImage } from './LazyImage.style';

interface LazyImageProps {
  src: string;
  alt: string;
  width?: string;
  height?: string;
  placeholder?: string;
  ratio?: string;
  borderRadius?: string;
  useSkeleton?: boolean;
}

const LazyImage = ({
  src,
  alt,
  placeholder,
  width,
  height,
  ratio,
  borderRadius = '0px',
  useSkeleton = true,
}: LazyImageProps) => {
  const { imgRef, isLoaded, isInView } = useLazyLoadImage();

  const shouldShowSkeleton = useSkeleton && !placeholder && !isLoaded;

  return (
    <StyledLazyImage
      ref={imgRef}
      src={isInView ? src : placeholder || ''}
      alt={alt}
      $width={width}
      $height={height}
      $aspectRatio={ratio}
      $borderRadius={borderRadius}
      $isLoaded={isLoaded}
      $shouldShowSkeleton={shouldShowSkeleton}
    />
  );
};

export default LazyImage;
