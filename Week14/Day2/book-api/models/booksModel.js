import pool from '../config/db.js';

export const fetchAllBooks = () => {
  return pool.query('SELECT * FROM books');
};

export const fetchBookById = (id) => {
  return pool.query('SELECT * FROM books WHERE id = $1', [id]);
};

export const insertBook = (title, author, published_year) => {
  return pool.query(
    'INSERT INTO books (title, author, published_year) VALUES ($1, $2, $3) RETURNING *',
    [title, author, published_year]
  );
};