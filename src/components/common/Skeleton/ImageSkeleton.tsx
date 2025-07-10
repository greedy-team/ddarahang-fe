import Skeleton from './Skeleton';

interface ImageSkeletonProps {
  width?: string;
  height?: string;
  borderRadius?: string;
  aspectRatio?: string;
}

const ImageSkeleton = ({ width = '100%', height, borderRadius = '8px', aspectRatio = '16/9' }: ImageSkeletonProps) => {
  return (
    <Skeleton
      width={width}
      height={height}
      borderRadius={borderRadius}
      aspectRatio={aspectRatio}
    />
  );
};

export default ImageSkeleton;
