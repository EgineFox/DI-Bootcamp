import db from '../config/db.js';
const pool = db.pool;

export async function getAllPosts(limit = 10, offset = 0) {
  return await pool.query('SELECT * FROM posts ORDER BY id LIMIT $1 OFFSET $2', [limit, offset]);
}

export async function getPostById(id) {
  return await pool.query('SELECT * FROM posts WHERE id = $1', [id]);
}

export async function createPost(title, content) {
  return await pool.query('INSERT INTO posts (title, content) VALUES ($1, $2) RETURNING *', [title, content]);
}

export async function updatePost(id, title, content) {
  return await pool.query('UPDATE posts SET title = $1, content = $2 WHERE id = $3 RETURNING *', [title, content, id]);
}

export async function deletePost(id) {
  return await pool.query('DELETE FROM posts WHERE id = $1 RETURNING *', [id]);
}

export default {
  getAllPosts,
  getPostById,
  createPost,
  updatePost,
  deletePost
};
