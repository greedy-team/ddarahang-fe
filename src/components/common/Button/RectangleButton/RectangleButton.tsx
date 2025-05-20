import { StyledRectangleButton, SaveButtonStyle } from './RectangleButton.style';

interface RectangleButtonProps {
  text?: string | null;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  variant?: 'default' | 'save';
}

const RectangleButton = ({ text, onClick, variant }: RectangleButtonProps) => {
  const ButtonComponent = variant === 'save' ? SaveButtonStyle : StyledRectangleButton;

  return (
    <ButtonComponent onClick={onClick}>
      <p>{text}</p>
    </ButtonComponent>
  );
};

export default RectangleButton;
