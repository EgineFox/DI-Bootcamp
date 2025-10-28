import express from 'express';
const router = express.Router();

import {
  getPosts,
  getPost,
  createPost,
  updatePost,
  deletePost,
  validatePost
} from '../controllers/postsController.js';

router.get('/', getPosts);
router.get('/:id', getPost);
router.post('/', validatePost, createPost);
router.put('/:id', validatePost, updatePost);
router.delete('/:id', deletePost);

const asyncHandler = fn => (req, res, next) => {
  Promise.resolve(fn(req, res, next)).catch(next);
};
router.get('/', asyncHandler(getPosts));

export default router;