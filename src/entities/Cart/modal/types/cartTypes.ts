export interface ICartScheme {
  cart: BookCartScheme[]
}

export interface BookCartScheme {
  idb: string
  countProduct: number
  priceAllBook: number
}