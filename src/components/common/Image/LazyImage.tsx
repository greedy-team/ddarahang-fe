import { useLazyLoadImage } from '../../../hooks/image/useLazyLoadImage';
import ImageSkeleton from '../Skeleton/ImageSkeleton';

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

  const shouldUseSkeleton = useSkeleton && !placeholder;

  return (
    <div
      style={{
        position: 'relative',
        width,
        height,
        aspectRatio: ratio,
        borderRadius,
        overflow: 'hidden',
      }}
    >
      {!isLoaded && shouldUseSkeleton && (
        <ImageSkeleton
          width='100%'
          height='100%'
          borderRadius={borderRadius}
          aspectRatio={ratio}
        />
      )}
      <img
        ref={imgRef}
        src={isInView ? src : placeholder || ''}
        alt={alt}
        style={{
          position: shouldUseSkeleton ? 'absolute' : 'static',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          borderRadius,
          transition: 'opacity 0.5s',
          opacity: isLoaded ? 1 : shouldUseSkeleton ? 0 : 0.2,
        }}
      />
    </div>
  );
};

export default LazyImage;
