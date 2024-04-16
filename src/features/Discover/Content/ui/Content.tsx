import React from 'react'
import cn from "classnames";
import cls from './Content.module.scss'
import {Card, SizeCard} from "entities/Card";
import {useSelector} from "react-redux";
import {BookSchemaApi, getAllBook, IAllBookSchema} from "entities/AllBook";
import { NavLink} from "react-router-dom";
import {RoutePath} from "app/App";


interface ContentProps {
    className?: string
}
export const Content  = ({className}: ContentProps) => {
  const books: IAllBookSchema = useSelector(getAllBook)
  return (
    <div className={cn(cls.content, className)}>
      <div className={cn(cls.header)}>
        Showing 1 - 9 items out of a total of ? million books
        <div className={cn(cls.dropdown)}>Sort by:  DROPDOWN </div>
      </div>
      <div className={cn(cls.book_list)}>
        {
          books.data.map((book: BookSchemaApi) => (
            <NavLink key={book.idb} to={`${RoutePath.BOOK}/${book.idb}`}>
              <Card  {...book} sizeCard={SizeCard.LARGE}/>
            </NavLink>
          ))
        }
      </div>
      <div className={cn(cls.pagination)}>
        PAGINATION
      </div>
    </div>
  );
}