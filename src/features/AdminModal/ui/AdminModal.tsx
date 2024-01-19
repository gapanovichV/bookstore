import React, {useState} from 'react'
import cn from "classnames";
import cls from './AdminModal.module.scss'
import {BookSchemaGoogle} from "entities/AdminBook";

interface AdminModalProps {
  className?: string
  book: BookSchemaGoogle
}

export interface BookScheme {
  id: string
  title: string
  image: string
  price: number
  quantity: number
  description: string
  authors: string[]
  isbn: number
}

interface TextFieldProps {
  data: BookScheme
  label: string
  name: string
  setData: (e: BookScheme) => void
}

export const TextField = ({setData, data, name, label}: TextFieldProps) => {
  console.log("Name", name)
  return (
    <>
      <label htmlFor={name}>{label}</label>
      <input onChange={e => setData({...data, [name]: e.target.value})} id={name} type="text" value={data[name as keyof BookScheme]} />
    </>
  )
}

export const AdminModal  = ({className, book}: AdminModalProps) => {
  const [ data, setData ] = useState<BookScheme>({
    id: book.id,
    title: book.volumeInfo.title,
    image: book.volumeInfo.imageLinks.thumbnail,
    price: 0,
    quantity: 0,
    description: book.volumeInfo.description,
    authors: book.volumeInfo.authors,
    isbn: +book.volumeInfo.industryIdentifiers[0].identifier

  });

  console.log("DATA",data)

  return (
    <div className={cn(cls.AdminModal, className)}>
      <form id="adminModal">
        <h2>Add Book</h2>
        <div>
          <TextField data={data} label={"Label"} name={data.title} setData={setData}/>
          <label htmlFor="title">Title</label>
          <input  id='title' type="text" value={data.title} />
          <label htmlFor="author">Authors</label>
          <input id='author' type="text" value={data.authors} />
        </div>
        <div>
          <label htmlFor="descr">Description</label>
          <input id='descr' type="text" value={data.description} />
        </div>
        <div>
          <label htmlFor="isbn">Isbn (10 or 13 digits)</label>
          <input id='isbn' type="text" value={data.isbn} />
          <label htmlFor="price">Price</label>
          <input id='price' type="number" value={data.price} />
          <label htmlFor="quantity">Quantity in Stock</label>
          <input id='quantity' type="number" value={data.quantity} />
        </div>
        <div>
          <label htmlFor="image">Image URL</label>
          <input id='image' type="text" value={data.image} />
        </div>
      </form>
    </div>
  );
}