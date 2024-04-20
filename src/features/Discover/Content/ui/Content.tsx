import React, {useEffect, useState} from 'react'
import cn from "classnames";
import cls from './Content.module.scss'
import {Card, SizeCard} from "entities/Card";
import {useDispatch, useSelector} from "react-redux";
import {BookSchemaApi, fetchAllBook, getAllBook, IAllBookSchema} from "entities/AllBook";
import { NavLink} from "react-router-dom";
import {RoutePath} from "app/App";
import {Pagination} from "entities/Pagination";
import {AppDispatch} from "app/providers/StoreProvider";


interface ContentProps {
    className?: string
}
export const Content  = ({className}: ContentProps) => {
  const dispatch = useDispatch<AppDispatch>();
  const {status, data}: IAllBookSchema = useSelector(getAllBook)
  const [currentPage, setCurrentPage] = useState<number>(1);

  const onChangePage = (page: number) => {
    setCurrentPage(page);
  };

  useEffect(() => {
    dispatch(fetchAllBook(currentPage))
  }, [currentPage]);

  const books = data.map((book: BookSchemaApi) => (
    <NavLink key={book.idb} to={`${RoutePath.BOOK}/${book.idb}`}>
      <Card  {...book} sizeCard={SizeCard.LARGE}/>
    </NavLink>
  ))

  return (
    <div className={cn(cls.content, className)}>
      <div className={cn(cls.header)}>
        Showing 1 - 9 items out of a total of ? million books
        <div className={cn(cls.dropdown)}>Sort by:  DROPDOWN </div>
      </div>
      <div className={cn(cls.book_list)}>
        {
          status === "error" ? (
            <div className={cn(cls.error)}>
            <h2>Произошла ошибка 😕</h2>
            <p>К сожалению, не удалось получить книги. Попробуйте повторить попытку позже.</p>
          </div>
          ) : (status === 'loading'? <h2>loading</h2>: books )
        }
      </div>
      <div className={cn(cls.pagination)}>
        <Pagination currentPage={currentPage} onChangePage={onChangePage} />
      </div>
    </div>
  );
}