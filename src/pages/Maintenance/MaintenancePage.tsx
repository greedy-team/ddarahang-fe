import RectangleButton from '../../components/common/Button/RectangleButton/RectangleButton';
import Logo from '../../components/common/Logo/Logo';
import { Container, Title, Subtitle } from './MaintenancePage.style';

interface MaintenancePageProps {
  color: string;
  text: string;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const MaintenancePage = ({ color, text, onClick }: MaintenancePageProps) => {
  return (
    <Container>
      <Logo />
      <Title>서비스가 준비중이에요...</Title>
      <Subtitle>보다 좋은 서비스 제공을 위해 개발 중입니다... ⚙️</Subtitle>
      <Subtitle>불편을 끼쳐드려 죄송합니다.</Subtitle>
      <RectangleButton
        color={color}
        onClick={onClick}
        text={text}
      />
    </Container>
  );
};

export default MaintenancePage;
