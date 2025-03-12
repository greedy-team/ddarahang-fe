import { useLazyLoadImage } from '../../../hooks/image/useLazyLoadImage';

interface LazyImageProps {
  src: string;
  alt: string;
  width?: string;
  height?: string;
  placeholder?: string;
  ratio?: string;
  borderRadius?: string;
}

const LazyImage = ({ src, alt, placeholder, width, height, ratio, borderRadius = '0px' }: LazyImageProps) => {
  const { imgRef, isLoaded } = useLazyLoadImage();

  return (
    <img
      ref={imgRef}
      src={isLoaded ? src : placeholder || ''}
      alt={alt}
      style={{
        width,
        height,
        aspectRatio: ratio,
        borderRadius,
        transition: 'opacity 0.5s',
        opacity: isLoaded ? 1 : 0.2,
      }}
    />
  );
};

export default LazyImage;
