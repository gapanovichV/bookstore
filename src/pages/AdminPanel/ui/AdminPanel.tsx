import React, {useState} from 'react'
import {createPortal} from "react-dom";
import {useDispatch, useSelector} from "react-redux";
import cn from "classnames";
import cls from './AdminPanel.module.scss'
import {Button, SizeButton, VariantButton} from "shared/Button";
import {BookSchemaGoogle, fetchBook, getAdminBook, IAdminSchema} from "entities/AdminBook";
import {AppDispatch} from "app/providers/StoreProvider";
import {fixImage} from "shared/lib/utils/image";
import {Modal} from "shared/Modal";
import {AdminModal} from "features/AdminModal";
import {Header} from "features/Header";

interface AdminPanelProps {
    className?: string
}

export const AdminPanel  = ({className}: AdminPanelProps) => {
  const books: IAdminSchema = useSelector(getAdminBook)
  const dispatch = useDispatch<AppDispatch>();
  const [bookInfo, setBookInfo] = useState<BookSchemaGoogle>({})
  const [openModal, setOpenModal] = useState<boolean>(false)
  const [searchName, setSearchName] = useState<string>('')

  console.log(bookInfo)
  const handleClickSearch = () => dispatch(fetchBook(searchName))
  const handleCloseModal = () => setOpenModal(false)

  const handleOpenModal = (id: string) => {
    setBookInfo(books.totalItems.find(book => book.id === id))
    setOpenModal(true)
  }

  return (
    <>
      <Header />
      <div className={cn(cls.admin_panel, className)}>
        <div className={cn('container')}>
          <div className={cn(cls.admin_search)}>
            <input className={cn(cls.admin_input)}
                   type="text"
                   placeholder='Name'
                   value={searchName}
                   onChange={e => setSearchName(e.target.value)}/>
            <Button variantBtn={VariantButton.FILL}
                    sizeBtn={SizeButton.LARGE}
                    onClick={handleClickSearch}>
              Search
            </Button>
          </div>
          <div className={cn(cls.card_wrapper)}>
            {
              books?.totalItems && books.totalItems.map((book) => (
                  <div key={book.id} className={cn(cls.admin_card)}>
                    <div className={cn(cls.image)}>
                      <img src={fixImage(book.volumeInfo.imageLinks?.smallThumbnail)} alt="Image"/>
                    </div>
                    <p>{book.volumeInfo.title}</p>
                    <Button onClick={() => handleOpenModal(book.id)} variantBtn={VariantButton.LINE} sizeBtn={SizeButton.MEDIUM}>Edit</Button>
                  </div>
              ))
            }
            {openModal && createPortal(
              <Modal isOpen={openModal} onClose={handleCloseModal}>
                <AdminModal onClose={handleCloseModal} book={bookInfo}/>
              </Modal>,
              document.getElementById('app')
            )}
          </div>
        </div>
      </div>
    </>
  );
}