import PageButton from '../../common/Button/PageButton/PageButton';
import { PaginationContainer } from './Pagination.style';
import NextPageButton from '../../common/Button/CircleButton/CircleButton';
import { colors, size } from '../../../styles/Theme';
import { useState } from 'react';
import { PAGE_SIZE } from '../../../constants/size';

interface PaginationProps {
  color: string;
  totalPageNumber: number;
  currentPageNumber: number;
  onPageClick: (movePageNumber: number) => void;
}

const Pagination = ({ color, onPageClick, currentPageNumber, totalPageNumber }: PaginationProps) => {
  const initCurrentPageGroup = Math.floor(currentPageNumber / PAGE_SIZE);
  const [currentPageGroup, setCurrentPageGroup] = useState(initCurrentPageGroup);

  const startPage = currentPageGroup * PAGE_SIZE + 1;
  const endPage = Math.min(startPage + PAGE_SIZE - 1, totalPageNumber);
  const hasNextGroup = endPage < totalPageNumber;
  const hasPrevGroup = startPage > 1;

  const handlePageClick = (pageNumber: number) => {
    onPageClick(pageNumber);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNextGroup = () => {
    if (hasNextGroup) {
      setCurrentPageGroup((prev) => prev + 1);
    }
  };

  const handlePrevGroup = () => {
    if (hasPrevGroup) {
      setCurrentPageGroup((prev) => prev - 1);
    }
  };

  return (
    <PaginationContainer>
      {hasPrevGroup && (
        <NextPageButton
          color={colors.WHITE}
          size={size.SIZE_013}
          iconPath='./icon/prev.svg'
          iconAlt='이전 페이지 그룹'
          onClick={handlePrevGroup}
        />
      )}
      {Array.from({ length: endPage - startPage + 1 }, (_, index) => (
        <PageButton
          key={startPage + index}
          color={color}
          onClick={() => handlePageClick(startPage + index)}
          text={`${startPage + index}`}
          isActive={currentPageNumber === startPage + index}
        />
      ))}
      {hasNextGroup && (
        <NextPageButton
          color={colors.WHITE}
          size={size.SIZE_013}
          iconPath='./icon/next.svg'
          iconAlt='다음 페이지 그룹'
          onClick={handleNextGroup}
        />
      )}
    </PaginationContainer>
  );
};

export default Pagination;
