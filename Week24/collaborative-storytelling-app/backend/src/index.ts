import express from "express"
import dotenv from "dotenv"
import cors from "cors"
import cookieParser from "cookie-parser"
import pool from "./db/pool.ts"

// Load environment variables from .env file
dotenv.config()

// Initialize Express application
const app = express()
const PORT = process.env.PORT || 5000

// Middleware configuration
// Parse incoming JSON requests
app.use(express.json())
// Parse URL-encoded data from forms
app.use(express.urlencoded({ extended: true }))
// Parse cookies from request headers
app.use(cookieParser())
// Enable CORS for frontend communication with credentials support
app.use(cors({
  origin: process.env.FRONTEND_URL || "http://localhost:5173",
  credentials: true,
}))

// Test route - verify API is running
app.get("/", (req: any, res: any) => {
  res.json({ message: "Collaborative Storytelling API is running!" })
})

// Start the server and listen on specified port
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})