import { configureStore, createSlice } from "@reduxjs/toolkit";

// Creazione dello slice per i libri
const booksSlice = createSlice({
	name: "books",
	initialState: {
		books: [],
		showComments: {},
		reviews: [],
		selectedBookId: null,
		selectedBookAsin: null,
	},
	reducers: {
		setBooks: (state, action) => {
			state.books = action.payload;
		},
		toggleShowComments: (state, action) => {
			const { asin, show } = action.payload;
			state.showComments[asin] = show;
		},
		setReviews: (state, action) => {
			state.reviews = action.payload;
		},
		setSelectedBookId: (state, action) => {
			state.selectedBookId = action.payload;
		},
		setSelectedBookAsin: (state, action) => {
			state.selectedBookAsin = action.payload;
		},
	},
});

// Export delle azioni e dei selettori
export const {
	setBooks,
	toggleShowComments,
	setReviews,
	setSelectedBookId,
	setSelectedBookAsin,
} = booksSlice.actions;
export const selectBooks = (state) => state.books.books;
export const selectShowComments = (state) => state.books.showComments;
export const selectReviews = (state) => state.books.reviews;
export const selectSelectedBookId = (state) => state.books.selectedBookId;
export const selectSelectedBookAsin = (state) => state.books.selectedBookAsin;

// Configurazione del negozio Redux
const store = configureStore({
	reducer: {
		books: booksSlice.reducer,
	},
});

export { store };
