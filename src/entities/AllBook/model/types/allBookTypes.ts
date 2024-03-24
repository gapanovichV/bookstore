export interface IAllBookSchema {
  id: number
  status: string
  data: BookSchemaApi[]
}

export interface BookSchemaApi {
  id: number
  idb: number
  title: string
  image: string
  price: number
  quantity: number
  description: string
  authors: string[]
  isbn: string
}