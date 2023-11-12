/* This code is setting up the Redux store for a TypeScript application using the Redux Toolkit
library. */
import { configureStore, combineReducers } from "@reduxjs/toolkit";
import bookSlice, { BookState } from "./booksSlice";
import selectedBookSlice, { SelectedBookState } from "./selectedBookSlice";
import tempBookSlice, { TempBookState } from "./tempBookSlice";

interface RootState {
  books: BookState;
  selectedBook: SelectedBookState;
  tempBook: TempBookState;
}

const rootReducer = combineReducers<RootState>({
  books: bookSlice,
  selectedBook: selectedBookSlice,
  tempBook: tempBookSlice,
});

export const store = configureStore({
  reducer: rootReducer,
});
