import { Overlay } from './DialogOverlay.style';

interface IDialogOverlay {
  children: React.ReactNode;
  onClose: () => void;
}

function DialogOverlay({ children, onClose }: IDialogOverlay) {
  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return <Overlay onClick={handleBackdropClick}>{children}</Overlay>;
}

export default DialogOverlay;
