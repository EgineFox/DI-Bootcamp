const express = require('express');
const router = express.Router();
// Sample in-memory database for storing to-do items
const todos = [];

// Get all to-do items
router.get('/', (req, res) => {
    res.status(200).json(todos);
})
// Add a new to-do item
router.post('/', (req, res) => {
    const { text, isDone } = req.body;
    const newTask = {
        id: todos.length+1,
        text: req.body.text,
        isDone: Boolean(isDone)
    };
    todos.push(newTask);
    res.status(201).json(newTask);
})

// Update a to-do item by ID
router.put('/:id', (req, res) => {
    const id = Number(req.params.id);
    const index = todos.findIndex(t=> t.id ===id);
    if (index === -1) {
    return res.status(404).json({ error: `Task with id ${id} not found` });
  }

    const updatedTask = {
        id: id,
        text: req.body.text,
        isDone:  req.body.isDone
    };
   
        todos[index] = updatedTask;

    res.status(200).json(`Task id =${id} updated`);
})

// Delete a to-do item by ID
router.delete('/:id', (req, res) => {
    const id = Number(req.params.id);
    const index = todos.findIndex(t=> t.id ===id);
    
    if (index === -1) {
        return res.status(404).json({ error: `Task with id ${id} not found` });
    }
    todos.splice(index, 1);
    res.status(200).json({message:`Task id =${id} deleted`});
})

router.use((req, res) => {
  res.status(404).send(`
    <h1>404 - Page Not Found</h1>
    <p>The page you're looking for doesn't exist.</p>
  `);
});

router.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send(`
    <h1>500 - Internal Server Error</h1>
    <p>Something went wrong on the server.</p>
  `);
});

module.exports = router;