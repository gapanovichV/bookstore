import React, {useState} from 'react'
import cn from "classnames";
import cls from './AdminModal.module.scss'
import {BookSchemaGoogle} from "entities/AdminBook";
import {Button, SizeButton, VariantButton} from "shared/Button";
import axios from "axios";
import {BookSchemaApi} from "entities/AllBook";

interface AdminModalProps {
  className?: string
  book: BookSchemaGoogle
  onClose: () => void
}

interface TextFieldProps {
  data: BookSchemaApi
  label: string
  name: string
  def: string | string[] | number
  setData: ({}: BookSchemaApi) => void
}


export const AdminModal  = ({className, book, onClose}: AdminModalProps) => {
const [ data, setData ] = useState<BookSchemaApi>({
  id: 0,
  idb: book.id,
  title: book.volumeInfo.title,
  image: book.volumeInfo.imageLinks.thumbnail,
  price: 0,
  quantity: 0,
  description: book.volumeInfo.description,
  authors: book.volumeInfo.authors,
  isbn: book.volumeInfo.industryIdentifiers[0].identifier,
  like: 0,
  createdDate: new Date().getTime()
  });

  const handleClickAddBook = async () => {
    //TODO: Отправка данных
    axios.post("https://63332d20433198e79dc0dd8c.mockapi.io/book", data)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
    onClose()
  }
  return (
    <div className={cn(cls.AdminModal, className)}>
      <form id="adminModal">
        <h2 className={cn(cls.title)}>Add Book</h2>
        <div className={cn(cls.listGroup)}>
          <TextField data={data} def={data.title} label={"Title"} name={'title'} setData={setData}/>
          <TextField data={data} def={data.authors} label={"Authors"} name={"authors"} setData={setData}/>
        </div>
        <div className={cn(cls.listGroup)}>
          <div className={cn(cls.textField)}>
            <label className={cn(cls.label)} htmlFor={"description"}>Description*</label>
            <textarea className={cn(cls.input, cls.textarea)} onChange={e => setData({...data, description: e.target.value})}
                   id={"description"}
                   defaultValue={data.description}
            />
          </div>
        </div>
        <div className={cn(cls.listGroup)}>
          <TextField data={data} def={data.isbn} label={"Isb (10 or 13 digits)"} name={'isbn'} setData={setData}/>
          <TextField data={data} def={data.price} label={"Price"} name={'price'} setData={setData}/>
          <TextField data={data} def={data.quantity} label={"Quantity in Stock"} name={'quantity'} setData={setData}/>
        </div>
        <div className={cn(cls.listGroup)}>
          <TextField data={data} def={data.image} label={"Image URL"} name={'image'} setData={setData}/>
        </div>
      </form>
      <Button onClick={handleClickAddBook} variantBtn={VariantButton.LINE} sizeBtn={SizeButton.MEDIUM}>ADD</Button>
    </div>
  );
}

export const TextField = ({setData, data, name, label, def}: TextFieldProps) => {
  return (
      <div className={cn(cls.textField)}>
        <label className={cn(cls.label)} htmlFor={name}>{label}*</label>
        <input className={cn(cls.input)} onChange={e => setData({...data, [name]: e.target.value})}
                  id={name}
                  defaultValue={def}
        />
      </div>
  )
}
