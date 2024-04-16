import React from 'react';
import cn from "classnames";
import cls from './Card.module.scss'
import notFound from '/src/shared/assets/img/notFound.png'
import {Button, SizeButton, VariantButton} from "shared/Button";
import Delete from "/src/shared/assets/icon/Delete.svg";
import {BookSchemaApi} from "entities/AllBook";
import {useDispatch} from "react-redux";
import {AppDispatch} from "app/providers/StoreProvider";

interface CardProps {
  className?: string;
  checked?: boolean
  handleClickDeleteBook: (idb: string) => void
  book: BookSchemaApi
}


export const Card = (props: CardProps) => {

  const {className, checked, book, handleClickDeleteBook} = props;

  return (
    <div className={cn(cls.card , className)}>
      <div className={cn(cls.card_info)}>
        <div className={cn(cls.card_info_stock)}>
          //Checkbox
          <div>Stock {book.quantity}</div>
        </div>
        <h4 className={cn(cls.card_info_title)}>
          {book.title}
        </h4>
        <div className={cn(cls.card_info_price)}>
          1 book x <span>${book.price}</span>
        </div>
        <div className={cn(cls.card_info_btn)}>
          <Button className={cn(cls.card_btn_add)} variantBtn={VariantButton.GHOST} sizeBtn={SizeButton.SMALL}>ADD
            ITEM</Button>
          <button onClick={() => handleClickDeleteBook(book.idb)}><Delete/></button>
        </div>
      </div>
      <img className={cn(cls.card_img)} src={notFound} alt="f"/>
    </div>
  );
};
