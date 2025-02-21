import { StyledPageButton } from './PageButton.style';

interface PageButtonProps {
  color: string;
  size: string;
  text?: string | null;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const PageButton = ({ text, color, size, onClick }: PageButtonProps) => {
  return (
    <StyledPageButton
      color={color}
      size={size}
      onClick={onClick}
    >
      <p>{text}</p>
    </StyledPageButton>
  );
};

export default PageButton;
