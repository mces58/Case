import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getBooksApi } from "../apis/getBooksApi";

/* The code is defining an interface `Book` which represents the structure of a book object. It has
properties such as `id`, `title`, `description`, `image`, `price`, `author`, and `publisher`. */
interface Book {
  id: string;
  title: string;
  description: string;
  image: object;
  price: number;
  author: string;
  publisher: string;
}

export interface BookState {
  books: Book[];
  loading: boolean;
}

export const getBooks = createAsyncThunk(
  "books",
  async (params: { search: string }) => {
    return getBooksApi(params.search);
  }
);

export const getBook = createAsyncThunk(
  "book",
  async (params: { updatedBooks: [] }) => {
    return getBooksApi(params.updatedBooks);
  }
);

const initialState: BookState = {
  books: [],
  loading: false,
};

const bookSlice = createSlice({
  name: "books",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getBooks.pending, (state) => {
        state.loading = true;
      })
      .addCase(getBooks.fulfilled, (state, action) => {
        state.loading = false;
        state.books = action.payload;
      });
  },
});

export default bookSlice.reducer;

export const booksSelector = (state: any) => state.books.books;
