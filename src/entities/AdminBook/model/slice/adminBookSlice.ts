import * as process from "process";
import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit';
import {AdminSchema, IAdminSchema} from "entities/AdminBook";
import axios from "axios";

const initialState: IAdminSchema = {totalItems: []}

const API = process.env.API_GOOGLE
const KEY = process.env.API_GOOGLE_KEY

export const fetchBook = createAsyncThunk(
  'admin/fetchAllBook',
  async function (name: string, { rejectWithValue }) {
    try {
      const res = await axios.get(
        `${API}`, {
          params: {
            q: name,
            key: KEY
          }
        }
      );
      return res.data
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);



export const AdminBookSlice = createSlice({
  name: 'admin',
  initialState,
  reducers: {
    addPalette(state, action) {
    },
    delPalette(state, action) {
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchBook.fulfilled, (state, action) => {
    })
    builder.addCase(fetchBook.rejected,(state, action) => {
    })
  },
});

// Action creators are generated for each case reducer function
export const { actions: AdminBookActions } = AdminBookSlice;
export const { reducer: AdminBookReducer } = AdminBookSlice;
