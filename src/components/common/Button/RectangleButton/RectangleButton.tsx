import { StyledRectangleButton } from './RectangleButton.style';

interface RectangleButtonProps {
  text?: string | null;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const RectangleButton = ({ text, onClick }: RectangleButtonProps) => {
  return (
    <StyledRectangleButton onClick={onClick}>
      <p>{text}</p>
    </StyledRectangleButton>
  );
};

export default RectangleButton;
