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
      <img
        src='/icon/Logo.jpeg'
        alt='로고'
        width={55}
        height={50}
      />
      따라행
    </StyledLogo>
  );
};

export default Logo;
