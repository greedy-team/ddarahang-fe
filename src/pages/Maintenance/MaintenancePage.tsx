import Logo from '../../components/common/Logo/Logo';
import { Container, Title, Subtitle, Button } from './MaintenancePage.style';

const MaintenancePage = () => {
  return (
    <Container>
      <Logo />
      <Title>서비스가 준비중이에요...</Title>
      <Subtitle>보다 좋은 서비스 제공을 위해 개발 중입니다... ⚙️</Subtitle>
      <Subtitle>불편을 끼쳐드려 죄송합니다.</Subtitle>
      <Button>돌아가기</Button>
    </Container>
  );
};

export default MaintenancePage;
