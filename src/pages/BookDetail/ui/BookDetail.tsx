import React, {useEffect, useState} from 'react'
import cn from "classnames";
import cls from './BookDetail.module.scss'
import {Header} from "features/Header";
import {useParams} from "react-router-dom";
import {BookSchemaApi, getAllBook, IAllBookSchema} from "entities/AllBook";
import {useSelector} from "react-redux";
import axios from "axios";

interface BookDetailProps {
    className?: string
}
export const BookDetail  = ({className}: BookDetailProps) => {
  const idParams = useParams().id
  const AllBooks: IAllBookSchema = useSelector(getAllBook)
  const book: BookSchemaApi[] = AllBooks.data.filter((el: BookSchemaApi) => el.idb == idParams)

  let {id,  authors, title, description, image, price, like} = book[0]

  useEffect(() => {
    axios.put(`https://63332d20433198e79dc0dd8c.mockapi.io/book/${id}`, {like: ++like})
      .then()
      .catch();
  }, []);

  return (
    <>
      <Header />
      <div className={cn(cls.book)}>
        <div className={cn('container')}>
          <div className={cn(cls.book_wrapper)}>
            <div className={cn(cls.book_peak)}>
              <div className={cn(cls.book_peak_img)}><img src={image} alt="Book"/></div>

            </div>
            <div className={cn(cls.line)}></div>
            <div className={cn(cls.book_info)}>
              <div className={cn(cls.book_info_author)}></div>
              <h2 className={cn(cls.book_info_title)}>
                {title}
              </h2>
              <div className={cn(cls.book_info_price)}>
                ${price}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}