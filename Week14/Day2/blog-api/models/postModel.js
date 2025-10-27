import db from '../config/db.js';
const pool = db.pool;

export const getAllPosts = () => pool.query('SELECT * FROM posts');
export const getPostById = (id) => pool.query('SELECT * FROM posts WHERE id = $1', [id]);
export const createPost = (title, content) =>
  pool.query('INSERT INTO posts (title, content) VALUES ($1, $2) RETURNING *', [title, content]);
export const updatePost = (id, title, content) =>
  pool.query('UPDATE posts SET title = $1, content = $2 WHERE id = $3 RETURNING *', [title, content, id]);
export const deletePost = (id) => pool.query('DELETE FROM posts WHERE id = $1 RETURNING *', [id]);

export default {
  getAllPosts,
  getPostById,
  createPost,
  updatePost,
  deletePost
};
