import { StyledRectangleButton } from './RectangleButton.style';

interface RectangleButtonProps {
  color: string;
  text?: string | null;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const RectangleButton = ({ text, color, onClick }: RectangleButtonProps) => {
  return (
    <StyledRectangleButton
      color={color}
      onClick={onClick}
    >
      <p>{text}</p>
    </StyledRectangleButton>
  );
};

export default RectangleButton;
