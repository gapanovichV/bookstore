import * as process from "process";
import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit';
import {IAdminSchema} from "entities/AdminBook";
import axios from "axios";
import {GoogleBook} from "entities/AdminBook/model/types/adminBookPanel";

const initialState: IAdminSchema = {totalItems: [], status: null}

const API = process.env.API_GOOGLE
const KEY = process.env.API_GOOGLE_KEY

export const fetchBook = createAsyncThunk(
  'admin/fetchBook',
  async (name: string, { rejectWithValue })=> {
    try {
      const res = await axios.get(
        `https://www.googleapis.com/books/v1/volumes?q=${name}&key=${KEY}`);
      return res.data
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

export const AdminBookSlice = createSlice({
  name: 'admin',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchBook.pending, (state, action) => {
      state.status = 'loading';
    });
    builder.addCase(fetchBook.fulfilled, (state, action: PayloadAction<GoogleBook>) => {
      console.log("1", action.payload)
      state.totalItems = action.payload.items
      state.status = 'ok';
    });
    builder.addCase(fetchBook.rejected, (state, action) => {
      state.status = 'error';
    });
  },
});

export const { actions: adminBookActions } = AdminBookSlice;
export const { reducer: adminBookReducer } = AdminBookSlice;
