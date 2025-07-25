import { StyledRectangleButton } from './RectangleButton.style';

interface RectangleButtonProps {
  text?: string | null;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  variant?: 'default' | 'blue';
  size?: 'large' | 'small';
}

const RectangleButton = ({ text, onClick, variant, size }: RectangleButtonProps) => {
  return (
    <StyledRectangleButton
      onClick={onClick}
      $variant={variant}
      $size={size}
    >
      <p>{text}</p>
    </StyledRectangleButton>
  );
};

export default RectangleButton;
