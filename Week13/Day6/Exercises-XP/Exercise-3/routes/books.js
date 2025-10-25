const express = require('express');
const router = express.Router();

// Sample in-memory database for storing books
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

// Get all books
router.get('/', (req, res) =>{
    res.json(books);
})

// Add a new book
router.post('/', (req, res) =>{
   const { title, author, yearPub } = req.body;
   if (!title || !author || !yearPub) {
       return res.status(400).json({ error: 'Missing required fields' });
    }
    const newBook = {id: books.length + 1, title, author, yearPub};
    books.push(newBook);
    res.status(201).json(newBook);
})

// Update a book by ID
router.put('/:id', (req, res) =>{
    const id = Number(req.params.id);
    const index = books.findIndex(b=> b.id === id)
    const { title, author, yearPub } = req.body;
    if (!title || !author || !yearPub) {
        return res.status(400).json({ error: 'Missing required fields' });
        };
   const updBook = {
        id,
        title: req.body.title,
        author: req.body.author,
        yearPub: req.body.yearPub
    };
    if (index != -1) {
        books[index] = updBook;
        res.status(200).json(updBook);
    } else {
        return res.status(404).json({ error: `Book with id ${id} not found` });
    }
})

// Delete a book by ID
router.delete('/:id', (req, res) =>{
    const id = Number(req.params.id);
    const index = books.findIndex(b=> b.id === id);
    if (index != -1) {
    books.splice(index, 1);
    res.status(200).json({ message: `Book with id ${id} deleted` });
    } else {
 return res.status(404).json({ error: `Book with id ${id} not found` });
    }
})

module.exports = router;