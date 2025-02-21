import PageButton from '../../common/Button/PageButton/PageButton';
import { PaginationContainer } from './Pagination.style';

interface Pagination {
  color: string;
  size: string;
  pageSize: number;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const Pagination = ({ color, size, onClick, pageSize }: Pagination) => {
  return (
    <PaginationContainer>
      {Array.from({ length: pageSize }, (_, index) => (
        <PageButton
          key={index}
          color={color}
          size={size}
          onClick={onClick}
          text={`${index}`} // 버튼에 숫자 표시
        />
      ))}
    </PaginationContainer>
  );
};

export default Pagination;
