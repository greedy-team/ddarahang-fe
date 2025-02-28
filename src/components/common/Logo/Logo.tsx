import { useNavigate } from 'react-router-dom';
import { StyledLogo } from './Logo.style';

const Logo = () => {
  const route = useNavigate();

  return (
    <StyledLogo
      onClick={() => {
        route('/');
      }}
    >
      따라<span>여</span>행
    </StyledLogo>
  );
};

export default Logo;
