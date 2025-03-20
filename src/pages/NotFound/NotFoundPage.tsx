import { useNavigate } from 'react-router-dom';
import RectangleButton from '../../components/common/Button/RectangleButton/RectangleButton';
import { Container, Title, Subtitle } from './NotFoundPage.style';

const NotFoundPage = () => {
  const route = useNavigate();
  return (
    <Container>
      <img
        src='/Logo.jpeg'
        alt='로고'
        width={100}
        height={100}
      />
      <Title>요청하신 페이지를 찾을 수 없습니다. </Title>
      <Title>불편을 드려 죄송합니다.</Title>
      <Subtitle>존재하지 않는 주소이거나, 요청하신 페이지의 주소가 변경, 삭제되어 찾을 수 없습니다.</Subtitle>
      <Subtitle>불편을 끼쳐드려 죄송합니다.</Subtitle>
      <RectangleButton
        onClick={() => route('/')}
        text='홈으로'
      />
    </Container>
  );
};

export default NotFoundPage;
