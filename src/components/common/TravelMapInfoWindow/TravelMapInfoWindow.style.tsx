import styled from 'styled-components';
import { colors } from '../../../styles/Theme';

export const MapInfoWindowContainer = styled.div`
  width: 200px;
  font-weight: 500;
  word-break: keep-all;
`;

export const BodyContent = styled.div`
  font-size: 14px;
  line-height: 1.5;
  overflow: hidden;
  text-overflow: ellipsis;
  color: ${colors.BLACK};

  p {
    color: ${colors.BLACK};
  }
`;

export const StyledGoogleLink = styled.p`
  margin-top: 1px;
  border: none;
`;

export const GoogleLink = styled.a`
  color: ${colors.GREY_400};
  font-weight: bold;

  &:hover {
    color: ${colors.PRIMARY};
  }
`;
