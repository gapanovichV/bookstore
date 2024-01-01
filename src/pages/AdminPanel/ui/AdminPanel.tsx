import React, {useState} from 'react'
import {useDispatch, useSelector} from "react-redux";
import cn from "classnames";

import cls from './AdminPanel.module.scss'

import {Button, SizeButton, VariantButton} from "shared/Button";
import {BookSchema, fetchBook, getAllBook, IAdminSchema} from "entities/AdminBook";
import {AppDispatch} from "app/providers/StoreProvider";
import {fixImage} from "shared/lib/utils/image";

interface AdminPanelProps {
    className?: string
}
export const AdminPanel  = ({className}: AdminPanelProps) => {
  const books: IAdminSchema = useSelector(getAllBook)
  const dispatch = useDispatch<AppDispatch>();
  const [searchName, setSearchName] = useState('')

  const handleClickSearch = () => {
    dispatch(fetchBook(searchName))
  }
  return (
    <div className={cn(cls.admin_panel, className)}>
        <div className={cn('container')}>
          <div className={cn(cls.admin_search)}>
            <input className={cn(cls.admin_input)} type="text" placeholder='Name' value={searchName} onChange={e => setSearchName(e.target.value)}/>
            <Button variantBtn={VariantButton.FILL} sizeBtn={SizeButton.LARGE} onClick={handleClickSearch}>Search</Button>
          </div>
          <div className={cn(cls.card_wrapper)}>
            {
              books?.totalItems && books.totalItems.map((book) => (
                <div key={book.id} className={cn(cls.admin_card)}>
                  <div className={cn(cls.image)}>
                    <img src={fixImage(book.volumeInfo.imageLinks?.smallThumbnail)} alt="Image"/>
                  </div>
                  <p>{book.volumeInfo.title}</p>
                  <Button variantBtn={VariantButton.LINE} sizeBtn={SizeButton.MEDIUM}>Edit</Button>
                </div>
              ))
            }
          </div>
        </div>
    </div>
  );
}