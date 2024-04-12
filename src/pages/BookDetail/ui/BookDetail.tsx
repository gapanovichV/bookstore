import React, {useEffect, useState} from 'react'
import axios from "axios";
import cn from "classnames";
import cls from './BookDetail.module.scss'
import {Header} from "features/Header";
import {useParams} from "react-router-dom";
import {BookSchemaApi, getAllBook, IAllBookSchema} from "entities/AllBook";
import {useDispatch, useSelector} from "react-redux";
import {countries} from "shared/lib/utils/countries";
import dateFormat from "dateformat";
import {Button, SizeButton, VariantButton} from "shared/Button";
import Minus from 'shared/assets/icon/Minus.svg'
import Plus from 'shared/assets/icon/Plus.svg'
import Cart from 'shared/assets/icon/Cart.svg'
import {AppDispatch, StateSchema} from 'app/providers/StoreProvider';
import {ThunkDispatch} from "@reduxjs/toolkit";
import {CartSlice} from "entities/Cart";


interface BookDetailProps {
    className?: string
}

interface InfoProductProps {
  className?: string
  label: string
  value: string | number | string[]
}
export const BookDetail  = ({className}: BookDetailProps) => {
  const dispatch = useDispatch<AppDispatch>();
  const idParams = useParams().id
  const AllBooks: IAllBookSchema = useSelector(getAllBook)
  const [countProduct, setCountProduct] = useState<number>(1)
  const book: BookSchemaApi[] = AllBooks.data.filter((el: BookSchemaApi) => el.idb == idParams)

  let {id, authors, idb,
    title, isbn,
    description, image,
    price, like,
    pageCount, language, publishedDate,
    publisher, categories, quantity} = book[0]

  useEffect(() => {
    axios.put(`https://63332d20433198e79dc0dd8c.mockapi.io/book/${id}`, {like: ++like})
      .then()
      .catch();
  }, []);

  const handleClickMinus = () => {
    if (countProduct === 1) return
    setCountProduct(countProduct - 1)
  }

  const handleClickPus = () => {
    if (countProduct >= quantity) return
    setCountProduct(countProduct + 1 )
  }
  const handleClickAddBook = (idb: string) => {
    const priceAllBook = countProduct * price
    dispatch(CartSlice.actions.addBookToCart({idb, countProduct, priceAllBook}))
    setCountProduct(1)
  }

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
              <div className={cn(cls.book_info_product)}>
                <InfoProduct className={cn(cls.book_info_product)} label={"Stock"} value={quantity} />
                <div className={cn(cls.book_info_product_count)}>
                  <div className={cn(cls.book_info_product_count_label, cls.label)}>Add Product</div>
                  <div className={cn(cls.book_info_product_count_value)}>
                    <button onClick={handleClickMinus} className={cn(cls.count_btn)}><Minus/></button>
                    <div className={cn(cls.count)}>{countProduct}</div>  {/* TODO: Change to input */}
                    <button onClick={handleClickPus} className={cn(cls.count_btn)}><Plus/></button>
                  </div>
                </div>
                <InfoProduct className={cn(cls.book_info_product)} label={"Total Price"} value={`$${countProduct * price}`} />
              </div>
              <Button className={cn(cls.book_info_addBook)} onClick={() => handleClickAddBook(idb)} rightIcon={true} variantBtn={VariantButton.FILL} sizeBtn={SizeButton.MEDIUM}>GET BOOK <Cart/></Button>
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
      <div className={cn(cls.infoProduct_label, cls.label)}>{label}</div>
      <div className={cn(cls.infoProduct_value, cls.value)}>{value}</div>
    </div>
  )
}

