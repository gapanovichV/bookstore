export interface ICartScheme {
  cart: BookCartScheme[]
}

interface BookCartScheme {
  id: number
  idb: string
  title: string
  image: string
  price: number
  quantity: number
  isbn: string
  count: number
}