import { createSlice, PayloadAction } from "@reduxjs/toolkit";

/* The code is defining a Redux slice for managing temporary book data in a Redux store. */
interface Book {
  id: string;
  title: string;
  description: string;
  image: object;
  price: number;
  author: string;
  publisher: string;
}

export interface TempBookState {
  tempBook: Book | null;
}

const initialState: TempBookState = {
  tempBook: null,
};

const tempBookSlice = createSlice({
  name: "tempBook",
  initialState,
  reducers: {
    setTempBook(state, action: PayloadAction<Book | null>) {
      state.tempBook = action.payload;
    },
  },
});

export const { setTempBook } = tempBookSlice.actions;

export default tempBookSlice.reducer;

export const tempBookSelector = (state: { tempBook: TempBookState }) =>
  state.tempBook.tempBook;
