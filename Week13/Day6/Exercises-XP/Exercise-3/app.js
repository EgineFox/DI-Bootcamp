const express = require('express');
const app = express();

const booksRouter = require('./routes/books');

app.use(express.json());

// Mount the books router at /books
app.use('/books', booksRouter);

// Global 404 handler
app.use((req, res) => {
  res.status(404).json({ error: 'Route not found' });
});

// Global error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Internal Server Error' });
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});