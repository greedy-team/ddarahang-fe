import { useLazyLoadImage } from '../../../hooks/image/useLazyLoadImage';

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
    <img
      ref={imgRef}
      src={isInView ? src : placeholder || ''}
      alt={alt}
      style={{
        width,
        height,
        aspectRatio: ratio,
        borderRadius,
        transition: 'opacity 0.5s',
        opacity: isLoaded ? 1 : 0.2,
        backgroundColor: shouldShowSkeleton ? '#e2e8f0' : 'transparent',
        backgroundImage: shouldShowSkeleton ? 'linear-gradient(90deg, #e2e8f0 25%, #cbd5e1 50%, #e2e8f0 75%)' : 'none',
        backgroundSize: shouldShowSkeleton ? '468px 100%' : 'auto',
        animation: shouldShowSkeleton ? 'skeleton-shimmer 1.5s ease-in-out infinite' : 'none',
      }}
    />
  );
};

export default LazyImage;
