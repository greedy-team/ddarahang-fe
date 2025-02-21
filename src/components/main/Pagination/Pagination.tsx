import { useState } from 'react';
import PageButton from '../../common/Button/PageButton/PageButton';
import { PaginationContainer } from './Pagination.style';

interface Pagination {
  color: string;
  pageSize: number;
  onClick: (page: number) => void;
}

const Pagination = ({ color, onClick, pageSize }: Pagination) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null); // 클릭된 버튼의 인덱스 관리

  const handleClick = (index: number) => {
    setActiveIndex(index);
    onClick(index);
  };

  return (
    <PaginationContainer>
      {Array.from({ length: pageSize }, (_, index) => (
        <PageButton
          key={index}
          color={color}
          onClick={() => handleClick(index)}
          text={`${index}`}
          isActive={activeIndex === index}
        />
      ))}
    </PaginationContainer>
  );
};

export default Pagination;
