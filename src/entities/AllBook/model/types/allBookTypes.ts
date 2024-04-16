export interface IAllBookSchema {
  id: number
  status: string
  data: BookSchemaApi[]
}

export interface BookSchemaApi {
  id: number
  idb: string
  title: string
  image: string
  price: number
  quantity: number
  description: string
  authors: string[]
  isbn: string
  like: number
  createdDate: number
  publishedDate: string
  pageCount: number
  language: string
  publisher: string
  categories: string[]
  priceInCart?: number
  countInCart?: number
}