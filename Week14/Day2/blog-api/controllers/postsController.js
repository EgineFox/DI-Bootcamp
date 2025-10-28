// controllers/postsController.js
import {
  getAllPosts,
  getPostById,
  createPost as createPostModel,
  updatePost as updatePostModel,
  deletePost as deletePostModel
} from '../models/postModel.js';

export const getPosts = async (req, res, next) => {
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 10;
  const offset = (page - 1) * limit;

  try {
    const result = await getAllPosts(limit, offset); // Update model to accept limit & offset
    res.json(result.rows);
  } catch (err) {
    next(err);
  }
};

export const getPost = async (req, res, next) => {
  try {
    const result = await getPostById(req.params.id);
    if (result.rows.length === 0) return res.status(404).json({ error: 'Post not found' });
    res.json(result.rows[0]);
  } catch (err) {
    next(err);
  }
};

export const createPost = async (req, res, next) => {
  try {
    const { title, content } = req.body;
    const result = await createPostModel(title, content);
    res.status(201).json(result.rows[0]);
  } catch (err) {
    next(err);
  }
};

export const updatePost = async (req, res, next) => {
  try {
    const { title, content } = req.body;
    const result = await updatePostModel(req.params.id, title, content);
    if (result.rows.length === 0) return res.status(404).json({ error: 'Post not found' });
    res.json(result.rows[0]);
  } catch (err) {
    next(err);
  }
};

export const deletePost = async (req, res, next) => {
  try {
    const result = await deletePostModel(req.params.id);
    if (result.rows.length === 0) return res.status(404).json({ error: 'Post not found' });
    res.json({ message: 'Post deleted successfully' });
  } catch (err) {
    next(err);
  }
};

import { body, validationResult } from 'express-validator';

export const validatePost = [
  body('title').notEmpty().withMessage('Title is required'),
  body('content').notEmpty().withMessage('Content is required'),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  }
];

import fs from 'fs';

function logError(error) {
  fs.appendFile('error.log', `${new Date().toISOString()} - ${error.message}\n`, err => {
    if (err) console.error('Failed to write to log file');
  });
}