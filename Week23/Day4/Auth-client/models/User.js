const { pool } = require('../config/database');

class User {
    // create new user
    static async create({ username, password, email = null, fullname = null, bio = null, avatar = null }) {
        const query = `
                      INSERT INTO users (username, password, email, full_name, bio, avatar)
                      VALUES ($1, $2, $3, $4, $5, $6)
                      RETURNING id, username, email, full_name as "fullName", bio, avatar,
                      created_at as "createdAt", updated_at as "updatedAt"
                      `;

        const values = [username, password, email, fullname, bio, avatar];

        try {
            const result = await pool.query(query, values);
            return result.rows[0];
        } catch (error) {
            throw error;
        }
    }

    // search user by username
    static async findByUsername(username) {
        const query = `
              SELECT id, username, password, email, full_name as "fullName", bio, avatar,
              created_at as "createdAt", update_at as "updatedAt"
              FROM users
              WHERE username = $1
        `;

        try {
            const result = await pool.query(query, [username]);
            return result.rows[0] || null;
        } catch (error) {
            throw error;
        }
    }
    // search user by user ID
    static async findByID(id) {
        const query = `
              SELECT id, username, password, email, full_name as "fullName", bio, avatar,
              created_at as "createdAt", update_at as "updatedAt"
              FROM users
              WHERE id = $1
        `;

        try {
            const result = await pool.query(query, [id]);
            return result.rows[0] || null;
        } catch (error) {
            throw error;
        }
    };
    // search user by user email
    static async findByEmail(email) {
        const query = `
              SELECT id, username, password, email, full_name as "fullName", bio, avatar,
              created_at as "createdAt", update_at as "updatedAt"
              FROM users
              WHERE email = $1
        `;

        try {
            const result = await pool.query(query, [email]);
            return result.rows[0] || null;
        } catch (error) {
            throw error;
        }
    }

    // refresh user
    static async update(id, updates) {
        const allowedFields = ['email', 'fullname', 'bio', 'avater'];
        const updatesFields = [];
        const values = [];

        let valueIndex = 1;

        Object.keys(updates).forEach(key => {
            if (allowedFields.includes(key)) {
                const dbField = key === 'fullName' ? 'full_name' : key;
                updatesFields.push(`${dbField} = $${valueIndex}`);
                values.push(updates[key]);
                valueIndex++;
            }
        });

        if (updatesFields.length === 0) {
            throw new Error('No valid fields to update');
        }

        values.push(id);

        const query = `
             UPDATE users
             SET ${updatesFields.join(', ')}
             WHERE id = $${valueIndex}
             RETURNING id, username, email, full_name as "fullname", bio, avatar, created_at as "createdAt", updated)at as "updatedAt"
        `;

        try {
            const result = await pool.query(query, values);
            return result.rows[0];
        } catch (error) {
            throw error;
        }
    }
    /** DELETE user */
    static async delete(id) {
        const query = 'DELETE FROM users WHERE id = $1 RETUTNING id';

        try {
            const result = await pool.query(query, [id]);
            return result.rows[0] || null;
            } catch (error) {
                throw error;
            }
    }

    /**Get all users (only admin) */
    static async findAll( limit = 50, offset = 0) {
        const query = `
        SELECT id, username, email, full_name as "fullName", bio, avatar, created_at
        `
    }

}