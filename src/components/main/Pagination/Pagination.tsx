import PageButton from '../../common/Button/PageButton/PageButton';
import { PaginationContainer } from './Pagination.style';
import NextPageButton from '../../common/Button/CircleButton/CircleButton';
import { colors, size } from '../../../styles/Theme';

interface PaginationProps {
  color: string;
  totalPageNumber: number;
  currentPageNumber: number;
  onPageClick: (currentPage: number) => void;
}

const Pagination = ({ color, onPageClick, totalPageNumber, currentPageNumber }: PaginationProps) => {
  return (
    <PaginationContainer>
      {Array.from({ length: totalPageNumber }, (_, index) => (
        <PageButton
          key={index}
          color={color}
          onClick={() => onPageClick(index + 1)}
          text={`${index + 1}`}
          isActive={currentPageNumber === index + 1}
        />
      ))}
      <NextPageButton
        color={colors.WHITE}
        size={size.SIZE_013}
        iconPath='./icon/next.svg'
        iconAlt='다음 페이지 넘어가기 아이콘'
        onClick={() => {}}
      />
    </PaginationContainer>
  );
};

export default Pagination;
