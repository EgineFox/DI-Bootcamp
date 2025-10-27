import express from 'express';
import { getAllBooks, getBookById, createBook } from '../controllers/booksController.js';

const router = express.Router();

router.get('/', getAllBooks);               // GET /api/books
router.get('/:bookId', getBookById);        // GET /api/books/:bookId
router.post('/', createBook);               // POST /api/books

export default router;