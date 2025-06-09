import { StyledContentsWrapper, StyledErrorMessage } from './ErrorLayout.styled';

interface ErrorLayout {
  errorTitle: string;
  errorDescription?: string;
}

const ErrorLayout = ({ errorTitle, errorDescription }: ErrorLayout) => {
  return (
    <StyledContentsWrapper>
      <StyledErrorMessage>
        <p>{errorTitle}</p>
        <span>{errorDescription}</span>
      </StyledErrorMessage>
    </StyledContentsWrapper>
  );
};

export default ErrorLayout;
