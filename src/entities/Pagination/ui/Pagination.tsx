import React from 'react'
import cn from "classnames";
import cls from './Pagination.module.scss'
import ReactPaginate from "react-paginate";

interface PaginationProps  {
  className?: string
  currentPage: number;
  onChangePage: (page: number) => void;
}

export const Pagination  = (props: PaginationProps) => {

  const {className, currentPage, onChangePage} = props;
  return (
      <ReactPaginate
        breakLabel="..."
        nextLabel="next >"
        onPageChange={(e: {selected: number}) => onChangePage(e.selected + 1)}
        pageRangeDisplayed={5}
        pageCount={3}
        previousLabel="< previous"
        forcePage={currentPage - 1}
        renderOnZeroPageCount={null}
      />
  )
}