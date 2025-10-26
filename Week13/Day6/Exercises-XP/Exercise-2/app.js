const express = require('express');
const app = express();

const todosRouter = require('./routes/todos');

// Middleware to parse JSON request bodies
app.use(express.json());

// Mount the todos router at /todos
app.use('/todos', todosRouter);

// Global 404 handler
app.use((req, res) => {
  res.status(404).json({ error: 'Route not found' });
});

// Global error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Internal Server Error' });
});

// Start the server
app.listen(3000, () => {
  console.log('Server is listening on port 3000');
});