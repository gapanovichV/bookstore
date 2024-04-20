import React, {useEffect, useState} from 'react'
import cn from "classnames";
import cls from './Cart.module.scss'
import {Header} from "features/Header";
import {Card} from "features/Cart/Card/ui/Card";
import {useDispatch, useSelector} from "react-redux";
import {CartSlice, getCart, ICartScheme} from "entities/Cart";
import {BookSchemaApi, getAllBook, IAllBookSchema} from "entities/AllBook";
import {AppDispatch} from "app/providers/StoreProvider";


interface CartProps {
  className?: string
}
export const Cart  = ({className}: CartProps) => {
  const dispatch = useDispatch<AppDispatch>();
  const cartBooks: ICartScheme = useSelector(getCart)
  const allBooks: IAllBookSchema = useSelector(getAllBook)
  const [booksInCart, setBooksInCart] = React.useState([])

  const concatCartBookInfo = (cartBooks: ICartScheme, allBooks: IAllBookSchema) => {
    const result = cartBooks.cart.map(booksCart => {
      const withCurrentId = allBooks.data.filter(book => book.idb === booksCart.idb)
      const book = withCurrentId.reduce((acc, curr:BookSchemaApi) => {
        return curr;
      }, {});
      return {...booksCart, ...book} ;
    });
    setBooksInCart(result)
  }

  console.log("@cart", cartBooks, allBooks)

  useEffect( () => {
    concatCartBookInfo(cartBooks, allBooks)
  }, [allBooks.status]);

  const handleClickDeleteBook = (idb: string) => {
    const newArray = booksInCart.filter((book) => book.idb !== idb)
    setBooksInCart(newArray)
    dispatch(CartSlice.actions.delBookFromCart(idb))
  }


  return (
    <>
      <Header />
      <div className={cn('container', cls.container)}>
        <div className={cn(cls.cart, className)}>
          <div className={cn(cls.cart_main)}>
            <div className={cn(cls.cart_main_top)}>
              <h2 className={cn(cls.cart_main_title)}>Your Cart</h2>
              //Checkbox
            </div>
            <div className={cn(cls.cart_main_content)}>
              {
                booksInCart.map((book: BookSchemaApi) =>
                  <Card handleClickDeleteBook={handleClickDeleteBook}  key={book.idb} book={book}  />
                )
              }
            </div>

          </div>
          <aside className={cn(cls.cart_aside)}>
            <h2 className={cn(cls.cart_aside_title)}>Calculation</h2>
          </aside>
        </div>
      </div>
    </>
  )
}