import { StyledPageButton } from './PageButton.style';

interface PageButtonProps {
  color: string;
  text?: string | null;
  isActive: boolean;
  onClick: () => void;
}

const PageButton = ({ text, color, isActive, onClick }: PageButtonProps) => {
  return (
    <StyledPageButton
      $isActive={isActive}
      $color={color}
      onClick={onClick}
    >
      <p>{text}</p>
    </StyledPageButton>
  );
};

export default PageButton;
