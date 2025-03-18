import { useNavigate } from 'react-router-dom';
import { StyledLogo } from './Logo.style';
import { useSelectOptionContext } from '../../../hooks/context/useSelectOptionContext';

interface LogoProps {
  isMainHeader: boolean;
}

const Logo = ({ isMainHeader }: LogoProps) => {
  const route = useNavigate();
  const { setSelectedOption } = useSelectOptionContext();

  const handleLogoClick = () => {
    route('/');
    isMainHeader && setSelectedOption({
      isCountryOption: true,
      countryName: '대한민국',
      selectedOptionLabel: '서울',
    });
  };

  return (
    <StyledLogo onClick={handleLogoClick}>
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
