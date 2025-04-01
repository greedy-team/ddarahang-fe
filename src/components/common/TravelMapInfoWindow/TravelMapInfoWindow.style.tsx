import styled from 'styled-components';
import { colors, size } from '../../../styles/Theme';

export const MapInfoWindowContainer = styled.div`
  width: 12.5rem;
  font-weight: 500;
  word-break: keep-all;
`;

export const BodyContent = styled.div`
  font-size: ${size.SIZE_008};
  line-height: 1.5;
  overflow: hidden;
  text-overflow: ellipsis;
  color: ${colors.BLACK};

  p {
    color: ${colors.BLACK};
  }
`;

export const StyledGoogleLink = styled.p`
  margin-top: ${size.SIZE_002};
  border: none;
`;

export const GoogleLink = styled.a`
  color: ${colors.GREY_400};
  font-weight: bold;

  &:hover {
    color: ${colors.PRIMARY};
  }
`;
