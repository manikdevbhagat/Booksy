import { createSlice } from "@reduxjs/toolkit";
import { Book } from "../../types";

interface CartState {
  books: { book: Book; quantity: number }[];
  totalItems: number;
}

const initialState: CartState = {
  books: [],
  totalItems: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    clearCart: (state) => {
      state.books = [];
      state.totalItems = 0;
    },
    addToCart: (state, action) => {
      const { book, quantity } = action.payload;
      const existingBook = state.books.filter((el) => el.book.id === book.id);
      if (existingBook.length > 0) {
        state.books = state.books.map((el) => {
          return el.book.id === book.id
            ? { ...el, quantity: el.quantity + quantity }
            : el;
        });
      } else {
        state.books = [...state.books, { book: book, quantity: quantity }];
      }
      state.totalItems = state.totalItems + quantity;
    },
    removeFromCart: (state, action) => {
      const book = action.payload;
      let quantity = 0;
      for (const el of state.books) {
        if (el.book.id === book.id) {
          quantity = el.quantity;
        }
      }
      state.totalItems = state.totalItems - quantity;
      state.books = state.books.filter((el) => el.book.id !== book.id);
    },
    incrementQuantity: (state, action) => {
      const book = action.payload;
      state.books = state.books.map((el) => {
        return el.book.id === book.id
          ? { ...el, quantity: el.quantity + 1 }
          : el;
      });
      state.totalItems = state.totalItems + 1;
    },
    decrementQuantity: (state, action) => {
      const book = action.payload;
      state.books = state.books.map((el) => {
        return el.book.id === book.id
          ? { ...el, quantity: el.quantity - 1 }
          : el;
      });
      state.totalItems = state.totalItems - 1;
    },
  },
});

export const { clearCart, addToCart, incrementQuantity, decrementQuantity, removeFromCart } =
  cartSlice.actions;
export const cartReducer = cartSlice.reducer;