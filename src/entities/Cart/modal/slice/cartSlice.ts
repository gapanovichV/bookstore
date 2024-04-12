import {createSlice, current, PayloadAction} from '@reduxjs/toolkit';
import {ICartScheme} from "entities/Cart";

export const LOCAL_STORAGE_CART_KEY: string = 'cartBook'

const defaultList = (localStorage.getItem(LOCAL_STORAGE_CART_KEY)) || '[]';
const initialState: ICartScheme = {cart: JSON.parse(defaultList)}


export const CartSlice  = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addBookToCart: (state, actions: {payload: {idb: string, countProduct: number, priceAllBook: number}}) => {
      const {idb,countProduct, priceAllBook} = actions.payload;
      const bookInCart = state.cart.find((item) => item.idb === idb);

      if (bookInCart) {
        bookInCart.countProduct = bookInCart.countProduct + countProduct;
        bookInCart.priceAllBook = bookInCart.priceAllBook + priceAllBook;
      }
      else {
        state.cart.push({idb, countProduct, priceAllBook})
      }

      localStorage.setItem(LOCAL_STORAGE_CART_KEY, JSON.stringify(state.cart));
    },
    delBookFromCart: (state, action: PayloadAction<string>) => {
      const newCart = state.cart.filter((book) => book.idb !== action.payload)
      state.cart = newCart
      localStorage.setItem(LOCAL_STORAGE_CART_KEY, JSON.stringify(newCart))
    },
  },
});

export const { actions: cartActions } = CartSlice;
export const { reducer: cartReducer } = CartSlice;
