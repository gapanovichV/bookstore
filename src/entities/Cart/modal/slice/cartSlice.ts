import {createSlice, PayloadAction, Slice} from '@reduxjs/toolkit';
import {ICartScheme} from "entities/Cart";

export const LOCAL_STORAGE_CART_KEY: string = 'cartBook'

const defaultList = (localStorage.getItem(LOCAL_STORAGE_CART_KEY)) || '[]';
const initialState: ICartScheme = {cart: JSON.parse(defaultList)}



export const CartSlice  = createSlice({
  name: 'carts',
  initialState,
  reducers: {
    addBookToCart: (state) => {

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
