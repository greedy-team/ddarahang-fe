import { StyledCircleButton } from './CircleButton.style';

interface CircleButtonProps {
  iconPath: string;
  iconAlt: string;
  color: string;
  text?: string | null;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const CircleButton = ({ iconPath, iconAlt, text, color, onClick }: CircleButtonProps) => {
  return (
    <StyledCircleButton
      color={color}
      onClick={onClick}
    >
      <img
        src={iconPath}
        alt={iconAlt}
      />
      <p>{text}</p>
    </StyledCircleButton>
  );
};

export default CircleButton;
