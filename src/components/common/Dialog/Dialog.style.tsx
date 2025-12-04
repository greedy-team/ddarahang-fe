import styled from 'styled-components';
import { size } from '../../../styles/Theme';

export const BottomSheetContainer = styled.div`
  width: 100%;
  max-width: 480px;
  min-height: 300px;
  display: flex;
  flex-direction: column;
  gap: ${size.SIZE_008};

  background: white;
  border-radius: 24px 24px 0 0;
  padding: ${size.SIZE_012};
  padding-top: ${size.SIZE_008};

  box-shadow: 0 -4px 16px rgba(0, 0, 0, 0.12);
  animation: slideUp 0.25s ease-out;

  @keyframes slideUp {
    from {
      transform: translateY(100%);
    }
    to {
      transform: translateY(0);
    }
  }
`;

export const HandleBar = styled.div`
  width: 48px;
  height: 5px;
  background: #ddd;
  border-radius: 4px;
  margin: 0 auto ${size.SIZE_012};
`;
