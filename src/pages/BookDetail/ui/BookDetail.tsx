import React, {useEffect, useState} from 'react'
import axios from "axios";
import cn from "classnames";
import cls from './BookDetail.module.scss'
import {Header} from "features/Header";
import {useParams} from "react-router-dom";
import {BookSchemaApi, getAllBook, IAllBookSchema} from "entities/AllBook";
import {useSelector} from "react-redux";
import {countries} from "shared/lib/utils/countries";
import dateFormat from "dateformat";

interface BookDetailProps {
    className?: string
}

interface InfoProductProps {
  className?: string
  label: string
  value: string | number | string[]
}
export const BookDetail  = ({className}: BookDetailProps) => {
  const idParams = useParams().id
  const AllBooks: IAllBookSchema = useSelector(getAllBook)
  const book: BookSchemaApi[] = AllBooks.data.filter((el: BookSchemaApi) => el.idb == idParams)

  let {id, authors,
    title, isbn,
    description, image,
    price, like,
    pageCount, language, publishedDate,
    publisher, categories} = book[0]

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
              <div className={cn(cls.book_info_author)}>{authors[0]}</div>
              <h2 className={cn(cls.book_info_title)}>
                {title}
              </h2>
              <div className={cn(cls.book_info_price)}>
                ${price}
              </div>
              <div className={cn(cls.book_info_line)}></div>

              <div className={cn(cls.book_info_infoProduct)}>
                <InfoProduct label={"Originally published"} value={dateFormat(publishedDate, "yyyy, d mmmm")} />
                <InfoProduct label={"Publisher"} value={publisher} />
                <InfoProduct label={"Language"} value={countries[language && language.toUpperCase()] ?? ""} />
                <InfoProduct label={"ISBN"} value={isbn} />
                <InfoProduct label={"Number of pages"} value={pageCount} />
              </div>
              <InfoProduct className={cn(cls.book_info_categories)} label={"Categories"} value={(categories && categories.join(', ')) ?? ""}/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}


export const InfoProduct = ({label, value, className}: InfoProductProps) => {
  return (
    <div className={cn(cls.infoProduct, className)}>
      <div className={cn(cls.infoProduct_label)}>{label}</div>
      <div className={cn(cls.infoProduct_value)}>{value}</div>
    </div>
  )
}

