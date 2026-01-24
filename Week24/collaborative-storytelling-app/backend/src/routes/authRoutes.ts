import express from "express"
import { register, login, refreshAccessToken } from "../controllers/authController.js"  // Add .js

const router = express.Router()

// POST /api/auth/register - Register a new user
router.post("/register", register)

// POST /api/auth/login - Login existing user
router.post("/login", login)

// POST /api/auth/refresh - Refresh access token
router.post("/refresh", refreshAccessToken)

export default router