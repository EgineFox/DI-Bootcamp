const express = require('express');
const router = express.Router();

// In-memory storage for books
const books = [
  {
    id: 1,
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    yearPub: 1960
  },
  {
    id: 2,
    title: "1984",
    author: "George Orwell",
    yearPub: 1949
  },
  {
    id: 3,
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    yearPub: 1925
  }
];

// GET all books
router.get('/', (req, res) => {
  res.status(200).json(books);
});

// POST a new book
router.post('/', (req, res) => {
  const { title, author, yearPub } = req.body;

  if (
    !title || typeof title !== 'string' ||
    !author || typeof author !== 'string' ||
    !yearPub || typeof yearPub !== 'number'
  ) {
    return res.status(400).json({ error: 'Fields "title", "author" (string) and "yearPub" (number) are required' });
  }

  const newBook = {
    id: Date.now(),
    title,
    author,
    yearPub
  };

  books.push(newBook);
  res.status(201).json(newBook);
});

// PUT (partial update) a book by ID
router.put('/:id', (req, res) => {
  const id = Number(req.params.id);
  const index = books.findIndex(book => book.id === id);

  if (index === -1) {
    return res.status(404).json({ error: `Book with id ${id} not found` });
  }

  const { title, author, yearPub } = req.body;

  if (title !== undefined) {
    if (typeof title !== 'string') {
      return res.status(400).json({ error: 'Field "title" must be a string' });
    }
    books[index].title = title;
  }

  if (author !== undefined) {
    if (typeof author !== 'string') {
      return res.status(400).json({ error: 'Field "author" must be a string' });
    }
    books[index].author = author;
  }

  if (yearPub !== undefined) {
    if (typeof yearPub !== 'number') {
      return res.status(400).json({ error: 'Field "yearPub" must be a number' });
    }
    books[index].yearPub = yearPub;
  }

  res.status(200).json(books[index]);
});

// DELETE a book by ID
router.delete('/:id', (req, res) => {
  const id = Number(req.params.id);
  const index = books.findIndex(book => book.id === id);

  if (index === -1) {
    return res.status(404).json({ error: `Book with id ${id} not found` });
  }

  books.splice(index, 1);
  res.status(200).json({ message: `Book with id ${id} has been deleted` });
});

module.exports = router;