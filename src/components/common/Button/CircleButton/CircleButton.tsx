import { StyledCircleButton } from './CircleButton.style';

interface CircleButtonProps {
  iconPath: string;
  iconAlt: string;
  color: string;
  size: string;
  text?: string | null;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const CircleButton = ({ iconPath, iconAlt, text, color, size, onClick }: CircleButtonProps) => {
  return (
    <StyledCircleButton
      $color={color}
      $size={size}
      onClick={onClick}
    >
      <img
        data-testid='icon-img'
        src={iconPath}
        alt={iconAlt}
      />
      <p>{text}</p>
    </StyledCircleButton>
  );
};

export default CircleButton;
