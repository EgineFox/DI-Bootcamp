const express = require('express');
const app = express();
app.use(express.json()); // parse json body content - middleware 

let books = [
    {
    id: 1,
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    publishedYear: 1960
  },
  {
    id: 2,
    title: "1984",
    author: "George Orwell",
    publishedYear: 1949
  },
  {
    id: 3,
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    publishedYear: 1925
  },
  {
    id: 4,
    title: "Pride and Prejudice",
    author: "Jane Austen",
    publishedYear: 1813
  },
  {
    id: 5,
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    publishedYear: 1937
  }
];

//Implement the “Read all” route by defining a route at GET /api/books. Send a JSON response with the books array.
app.get('/api/books', (req, res) => {
   res.status(200).json(books);
})


//Implement the “Read” route by defining a route at GET /api/books/:bookId. Extract the bookId parameter from the URL and use it to find the corresponding book in the books array. If the book is found, send a JSON response with the book details and a status code of 200 (OK). If the book is not found, send a 404 status with a “Book not found” message.
app.get('/api/books/:bookId', (req, res) => {
    const id = Number(req.params.bookId);
    const book = books.find((book) => book.id === id);

    if (!book) {
        return res.status(404).send('Book not found');
    }
    res.status(200).json(book);
})

/** Implement the “Create” route at POST /api/books. Use the express.json() middleware to parse JSON body content. Inside the route handler, create a new book object with an incremented ID and the data from the request body. Add the new book to the books array and return a JSON response with the new book and a status code of 201 (Created).*/

app.post('/api/books', (req, res) => {
  if (!req.body.title || !req.body.author || !req.body.publishedYear) {
  return res.status(400).json({ error: 'Missing required fields' });
}
  const newBook = {
    id: books.length+1,
    title: req.body.title,
    author: req.body.author,
    publishedYear: Number(req.body.publishedYear)
  };


  books.push(newBook);
  res.status(201).json(newBook);

})

// universal handle 404 error 
app.use((req, res) => {
  res.status(404).json({ error: 'Route not found' });
});

// handle server error
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Internal Server Error' });
});


app.listen(5000, () => {
    console.log('server is listening on port 5000')
})