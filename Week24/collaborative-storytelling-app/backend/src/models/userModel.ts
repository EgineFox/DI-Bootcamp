import pool from "../db/pool.ts"
import { User } from "../../../types/index.js"

// Create a new user in the database
export const createUser = async (
    username: string,
    email: string,
    passwordHash: string
): Promise<User> => {
    const query = `
    INSERT INTO Users (username, email, password_hash)
    VALUES ($1, $2, $3)
    RETURNING id, username, email, created_at
    `

    const values = [username, email, passwordHash];
    const result = await pool.query(query, values);
    return result.rows[0]
}

// Find user by email
export const findUserByEmail = async (email: string) : Promise<User | null> => {
    const query = `SELECT * FROM Users WHERE email = $1`
    const result = await pool.query(query, [email])
    return result.rows[0] || null
}

// Find user by ID
export const findUserById = async (id: number): Promise<User | null> => {
    const query = `SELECT id, username, email, created_at FROM Users WHERE id = $1`
    const result = await pool.query(query, [id])
    return result.rows[0] || null
}