import { createPortal } from 'react-dom';
import { useEffect, useId } from 'react';
import DialogOverlay from './DialogOverlay';

import { BottomSheetContainer, HandleBar } from './Dialog.style';
import styled from 'styled-components';
import { size } from '../../../styles/Theme';

interface IDialogMain {
  children: React.ReactNode;
  isOpen?: boolean;
  title?: string;
  onClose: () => void;
}

function Dialog({ children, isOpen, onClose }: IDialogMain) {
  if (!isOpen) return null;

  const titleId = useId();

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  return createPortal(
    <DialogOverlay onClose={onClose}>
      <BottomSheetContainer
        role='dialog'
        aria-modal='true'
        aria-labelledby={titleId}
      >
        <HandleBar />

        {children}
      </BottomSheetContainer>
    </DialogOverlay>,
    document.body,
  );
}

const DialogTitle = ({ children }: { children: React.ReactNode }) => {
  return <StyledDialogTitle>{children}</StyledDialogTitle>;
};

const DialogBody = ({ children }: { children: React.ReactNode }) => {
  return <DialogContent>{children}</DialogContent>;
};

const DialogActions = ({ children }: { children: React.ReactNode }) => {
  return <DialogFooter>{children}</DialogFooter>;
};

export default Object.assign(Dialog, {
  Title: DialogTitle,
  Body: DialogBody,
  Actions: DialogActions,
});

const StyledDialogTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: bold;
  margin: 0 0 1rem 0;
`;

const DialogContent = styled.div`
  flex: 1;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: ${size.SIZE_010};

  padding: 0;
  margin: 0;
`;

const DialogFooter = styled.div`
  padding: 1rem 0 0 0;
  margin: 0;
  width: 100%;
`;
