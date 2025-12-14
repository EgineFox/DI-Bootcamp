import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    books: [
        // George Orwell — genre Dystopian
        { id: 1, title: '1984', author: 'George Orwell', genre: 'Dystopian' },
        { id: 2, title: 'Animal Farm', author: 'George Orwell', genre: 'Dystopian' },
        { id: 3, title: 'Homage to Catalonia', author: 'George Orwell', genre: 'Dystopian' },

        // Jane Austen — genre Romance
        { id: 4, title: 'Pride and Prejudice', author: 'Jane Austen', genre: 'Romance' },
        { id: 5, title: 'Sense and Sensibility', author: 'Jane Austen', genre: 'Romance' },
        { id: 6, title: 'Emma', author: 'Jane Austen', genre: 'Romance' },

        // J.R.R. Tolkien — genre Fantasy
        { id: 7, title: 'The Hobbit', author: 'J.R.R. Tolkien', genre: 'Fantasy' },
        { id: 8, title: 'The Fellowship of the Ring', author: 'J.R.R. Tolkien', genre: 'Fantasy' },
        { id: 9, title: 'The Two Towers', author: 'J.R.R. Tolkien', genre: 'Fantasy' },
        { id: 10, title: 'The Return of the King', author: 'J.R.R. Tolkien', genre: 'Fantasy' },

        // Fyodor Dostoevsky — genre Philosophical
        { id: 11, title: 'Crime and Punishment', author: 'Fyodor Dostoevsky', genre: 'Philosophical' },
        { id: 12, title: 'The Brothers Karamazov', author: 'Fyodor Dostoevsky', genre: 'Philosophical' },
        { id: 13, title: 'Notes from Underground', author: 'Fyodor Dostoevsky', genre: 'Philosophical' },

        // Ray Bradbury — genre Dystopian
        { id: 14, title: 'Fahrenheit 451', author: 'Ray Bradbury', genre: 'Dystopian' },
        { id: 15, title: 'The Martian Chronicles', author: 'Ray Bradbury', genre: 'Dystopian' },

    ],

};

const bookSlice = createSlice({
    name: 'books',
    initialState,
    reducers: {
        addBook: (state, action) => {
            state.books.push(action.payload);
        },
        selectBook: (state, action) => {
            state.selectedBook = action.payload;
        },
        updateBook: (state, action) => {
            const { id, title, author, genre } = action.payload;
            const existingBook = state.books.find(book => book.id === id);
            if (existingBook) {
                existingBook.title = title;
                existingBook.author = author;
                existingBook.genre = genre;
            }
        },
        removeBook: (state, action) => {
            state.books = state.books.filter(book => book.id != action.payload);
        }
    },
});

// selectors
export const selectBooks = state => state.books.books;
export const selectRomanceBooks = state => state.books.books.filter(book => book.genre === "Romance");
export const selectHorrorBooks = state => state.books.books.filter(book => book.genre === "Horror");
export const selectScienceFictionBooks = state => state.books.books.filter(book => book.genre === "Science Fiction");
export const selectDystopianBooks = state => state.books.books.filter(book => book.genre === "Dystopian");
export const selectPhilosophicalBooks = state => state.books.books.filter(book => book.genre === "Philosophical");

export const { addBook, selectBook, removeBook, updateBook } = bookSlice.actions;
export default bookSlice.reducer;