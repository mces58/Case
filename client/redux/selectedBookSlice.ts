import { createSlice, PayloadAction } from "@reduxjs/toolkit";

/* This code is defining a Redux slice for managing the selected book state in a Redux store. */
interface Book {
  id: string;
  title: string;
  description: string;
  image: object;
  price: number;
  author: string;
  publisher: string;
}

export interface SelectedBookState {
  selectedBook: Book | null;
}

const initialState: SelectedBookState = {
  selectedBook: null,
};

const selectedBookSlice = createSlice({
  name: "selectedBook",
  initialState,
  reducers: {
    setSelectedBook(state, action: PayloadAction<Book | null>) {
      state.selectedBook = action.payload;
    },
  },
});

export const { setSelectedBook } = selectedBookSlice.actions;

export default selectedBookSlice.reducer;

export const selectedBookSelector = (state: {
  selectedBook: SelectedBookState;
}) => state.selectedBook.selectedBook;
