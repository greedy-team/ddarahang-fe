import { SkeletonContainer } from './Skeleton.style';

interface SkeletonProps {
  width?: string;
  height?: string;
  borderRadius?: string;
  aspectRatio?: string;
  className?: string;
}

const Skeleton = ({ width, height, borderRadius, aspectRatio, className }: SkeletonProps) => {
  return (
    <SkeletonContainer
      $width={width}
      $height={height}
      $borderRadius={borderRadius}
      $aspectRatio={aspectRatio}
      className={className}
    />
  );
};

export default Skeleton;
