const express = require('express');
const router = express.Router();

// In-memory storage for to-do items
let todos = [];

// GET all to-do items
router.get('/', (req, res) => {
  res.status(200).json(todos);
});

// POST a new to-do item
router.post('/', (req, res) => {
  const { text, isDone = false } = req.body;

  if (!text || typeof text !== 'string') {
    return res.status(400).json({ error: 'Field "text" is required and must be a string' });
  }

  const newTodoItem = {
    id: Date.now(), // Safer ID generation
    text,
    isDone: Boolean(isDone)
  };

  todos.push(newTodoItem);
  res.status(201).json(newTodoItem);
});

// PUT (partial update) a to-do item by ID
router.put('/:id', (req, res) => {
  const id = Number(req.params.id);
  const todoIndex = todos.findIndex(item => item.id === id);

  if (todoIndex === -1) {
    return res.status(404).json({ error: `Task with id ${id} not found` });
  }

  const { text, isDone } = req.body;

  if (text !== undefined) {
    if (typeof text !== 'string') {
      return res.status(400).json({ error: 'Field "text" must be a string' });
    }
    todos[todoIndex].text = text;
  }

  if (isDone !== undefined) {
    todos[todoIndex].isDone = Boolean(isDone);
  }

  res.status(200).json(todos[todoIndex]);
});

// DELETE a to-do item by ID
router.delete('/:id', (req, res) => {
  const id = Number(req.params.id);
  const todoIndex = todos.findIndex(item => item.id === id);

  if (todoIndex === -1) {
    return res.status(404).json({ error: `Task with id ${id} not found` });
  }

  todos.splice(todoIndex, 1);
  res.status(200).json({ message: `Task with id ${id} has been deleted` });
});

module.exports = router;