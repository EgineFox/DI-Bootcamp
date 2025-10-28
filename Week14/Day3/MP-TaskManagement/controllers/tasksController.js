import fs from 'fs';
import path from 'path';

import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const filePath = path.join(__dirname, '../models/tasks.json');



// Utility: safely read tasks
const readTasks = () => {
  try {
    if (!fs.existsSync(filePath)) {
      fs.writeFileSync(filePath, '[]', 'utf-8');
    }
    const data = fs.readFileSync(filePath, 'utf-8');
    return JSON.parse(data);
  } catch (error) {
    throw new Error('Failed to read tasks file');
  }
};

// Utility: safely write tasks
const writeTasks = (tasks) => {
  try {
    fs.writeFileSync(filePath, JSON.stringify(tasks, null, 2), 'utf-8');
  } catch (error) {
    throw new Error('Failed to write tasks file');
  }
};

export const getAllTasks = (req, res) => {
  try {
    const tasks = readTasks();
    res.status(200).json(tasks);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getSpecTask = (req, res) => {
  try {
    console.log('Received taskId:', req.params.id);

    const taskId = parseInt(req.params.id);
    if (isNaN(taskId)) {
      return res.status(400).json({ error: 'Invalid task ID' });
    }

    const tasks = readTasks();
    const task = tasks.find(task => task.id === taskId);

    if (!task) {
      return res.status(404).json({ error: 'Task not found' });
    }

    res.status(200).json(task);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const createTask = (req, res) => {
  try {
    const { title } = req.body;
    if (!title || typeof title !== 'string') {
      return res.status(400).json({ error: 'Title is required and must be a string' });
    }

    const tasks = readTasks();
    const newTask = {
      id: Date.now(),
      title,
      completed: false
    };

    tasks.push(newTask);
    writeTasks(tasks);

    res.status(201).json(newTask);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const deleteTask = (req, res) => {
  try {
      
      const taskId = parseInt(req.params.id);
      console.log('Received taskId:', taskId);
    if (isNaN(taskId)) {
      return res.status(400).json({ error: 'Invalid task ID' });
    }

    const tasks = readTasks();
    const updatedTasks = tasks.filter(task => task.id !== taskId);

    if (updatedTasks.length === tasks.length) {
      return res.status(404).json({ error: 'Task not found' });
    }

    writeTasks(updatedTasks);
    res.status(200).json({ message: 'Task deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const updateTask = (req, res) => {
  try {
    const taskId = parseInt(req.params.id);
    const { title, completed } = req.body;

    if (isNaN(taskId)) {
      return res.status(400).json({ error: 'Invalid task ID' });
    }

    const tasks = readTasks();
    const index = tasks.findIndex(task => task.id === taskId);

    if (index === -1) {
      return res.status(404).json({ error: `Task with ID ${taskId} not found` });
    }

    if (title !== undefined) tasks[index].title = title;
    if (completed !== undefined) tasks[index].completed = completed;

    writeTasks(tasks);
    res.status(200).json(tasks[index]);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};