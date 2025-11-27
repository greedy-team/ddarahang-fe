import { useNavigate } from 'react-router-dom';
import { StyledLogo } from './Logo.style';
import { useSelectOptionContext } from '../../../hooks/context/useSelectOptionContext';
import LogoText from '../../../assets/logo-text.svg';
import LogoImage from '../../../assets/logo-image.webp';

interface LogoProps {
  isMainHeader?: boolean;
  setCurrentPageNumber?: (currentPageNumber: number) => void;
}

const Logo = ({ isMainHeader = true, setCurrentPageNumber }: LogoProps) => {
  const route = useNavigate();
  const { setSelectedOption } = useSelectOptionContext();

  const handleLogoClick = () => {
    route('/');
    isMainHeader &&
      setSelectedOption({
        isCountryOption: true,
        countryName: '대한민국',
        selectedOptionLabel: '서울',
      });
    if (setCurrentPageNumber) setCurrentPageNumber(1);
  };

  return (
    <StyledLogo onClick={handleLogoClick}>
      <img
        src={LogoImage}
        alt='따라행 로고'
        width={55}
        height={50}
      />
      <img
        src={LogoText}
        alt='따라행 로고 텍스트'
        width={60}
        height={25}
      />
    </StyledLogo>
  );
};

export default Logo;
