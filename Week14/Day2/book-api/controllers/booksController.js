import { fetchAllBooks, fetchBookById, insertBook } from '../models/booksModel.js';

export const getAllBooks = async (req, res, next) => {
  try {
    const result = await fetchAllBooks();
    res.json(result.rows);
  } catch (err) {
    next(err);
  }
};

export const getBookById = async (req, res, next) => {
  try {
    const bookId = req.params.bookId;
    const result = await fetchBookById(bookId);
    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'Book not found' });
    }
    res.status(200).json(result.rows[0]);
  } catch (err) {
    next(err);
  }
};

export const createBook = async (req, res, next) => {
  try {
    const { title, author, published_year } = req.body;
    const result = await insertBook(title, author, published_year);
    res.status(201).json(result.rows[0]);
  } catch (err) {
    next(err);
  }
};