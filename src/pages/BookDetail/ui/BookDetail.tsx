import React from 'react'
import cn from "classnames";
import cls from './BookDetail.module.scss'
import {Header} from "features/Header";
import test1 from "shared/assets/img/test1.png";

interface BookDetailProps {
    className?: string
}
export const BookDetail  = ({className}: BookDetailProps) => {
  return (
    <>
      <Header />
      <div className={cn(cls.book)}>
        <div className={cn('container')}>
          <div className={cn(cls.book_wrapper)}>
            <div className={cn(cls.book_peak)}>
              <div className={cn(cls.book_peak_img)}><img src={test1} alt="Book"/></div>

            </div>
            <div className={cn(cls.line)}></div>
            <div className={cn(cls.book_info)}>
              <div className={cn(cls.book_info_author)}></div>
              <h2 className={cn(cls.book_info_title)}>
                The Stories of Choo Choo: You're Not as Alone as You Think
              </h2>
              <div className={cn(cls.book_info_price)}>
                $19,5
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}