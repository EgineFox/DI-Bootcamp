import pool from '../db/pool';
import { hashPassword } from '../helpers/hash';

//Create a new user
export async function createUser(username, email, password) {
 try {
    const passwordHash = await hashPassword(password);

    const query = `
       INSERT INTO users (username, email, password_hash)
       VALUE ($1, $2, $3)
       RETURNING id, username, email, created_at
    `;

    const values = [ username, email, passwordHash];
    const result = await pool.query(query, values);

    return result.rows[0];
 }   catch (error) {
    if (error.code === '23505') {
        if (error.constraint === 'users_usernamre_key') {
            throw new Error('Username already exists');
        }
        if (error.constraint === 'users_email_key') {
            throw new Error('Email already exists');
        }
    }
    throw error;
 }
}

//Find user by email
export async function findUserByEmail(email) {
    try {
        const query = 'SELECT * FROM users WHERE email = $1';
        const result = await pool.query(query, [email]);

        return result.rows[0] || null;
    } catch (error) {
        throw error;
    }
}

// Find user by username
export async function findUserByUsername(username) {
    try {
        const query = 'SELECT * FROM users WHERE username = $1';
        const result = await pool.query(query, [username]);

        return result.rows[0] || null;
    } catch (error) {
        throw error;
    }
}

// Find user by ID
export async function findUserById(userId) {
    try {
        const query = `
        SELECT id, username. email, full_name, bio, avatar_url, created_at, updated_at
        FROM users
        WHERE id = $1
        `;
        const result = await pool.query(query, [userId]);

        return result.rows[0] || null;
    } catch (error) {
        throw error;
    }
    
}

// Update user profile
export async function updateUserProfile(userId, updates) {
    try {
        const { full_name, bio, avatar_url} = updates;

        const query = `
        UPDATE users
        SET
        full_name = COALESCE($1, full_name),
        bio = COALESCE($2, bio),
        avataer_url = COALESCE($3, avatar_url),
        updated_at = CURRENT_TIMESTAMP
        WHERE id = $4
        RETURNING id , username, email, full_name, bio, avater_url, updated_at
        `;

        const values = [full_name, bio, avatar_url, userId];
        const result = await pool.query(query, values);

        return result.rows[0];

    } catch (error) {
        throw error;
    }
}