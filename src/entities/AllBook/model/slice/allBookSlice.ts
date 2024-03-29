import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit'
import axios from "axios";
import {IAllBookSchema} from "entities/AllBook";


const initialState: IAllBookSchema = {data: [], status: '', id: 0}

export const fetchAllBook = createAsyncThunk(
  'admin/fetchAllBook',
  async (_, { rejectWithValue })=> {
    try {
      const res = await axios.get(
        `https://63332d20433198e79dc0dd8c.mockapi.io/book`);
      return res.data
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

export const AllBookSlice = createSlice({
  name: 'allBook',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchAllBook.pending, (state, action) => {
      state.status = 'loading'
    })
    builder.addCase(fetchAllBook.fulfilled, (state, action) => {
      state.data = action.payload
      state.status = 'ok'
    })
    builder.addCase(fetchAllBook.rejected, (state, action) => {
      console.log("r", action.payload)
    });
  },
})

export const { actions: allBookActions } = AllBookSlice;
export const { reducer: allBookReducer } = AllBookSlice;