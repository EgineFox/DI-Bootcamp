// controllers/postsController.js
import {
  getAllPosts,
  getPostById,
  createPost as createPostModel,
  updatePost as updatePostModel,
  deletePost as deletePostModel
} from '../models/postModel.js';

export const getPosts = async (req, res, next) => {
  try {
    const result = await getAllPosts();
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