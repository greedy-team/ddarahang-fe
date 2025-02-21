import { useState } from 'react';
import PageButton from '../../common/Button/PageButton/PageButton';
import { PaginationContainer } from './Pagination.style';
import NextPageButton from '../../common/Button/CircleButton/CircleButton';
import { colors, size } from '../../../styles/Theme';

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
      <NextPageButton
        color={colors.WHITE}
        size={size.SIZE_011}
        iconPath='./image/next.svg'
        iconAlt='다음 넘어가기 아이콘'
        onClick={() => {}}
      ></NextPageButton>
    </PaginationContainer>
  );
};

export default Pagination;
