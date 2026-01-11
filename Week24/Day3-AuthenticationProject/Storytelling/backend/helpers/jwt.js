import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

const JWT_SECRET = process.env.JWT_SECRET;
const JWT_EXPIRES_IN = '7d';

// Generate JWT for user
export function generateToken(userId, username) {
    try {
        const payload = {
            userId,
            username
        };

        const token = jwt.sign(payload, JWT_SECRET, {
            expireIn: JWT_EXPIRES_IN,
        });

        return token;
    } catch (error) {
        throw new Error ('Error generating token');
    }
}

// Verify JWT
export function verifyToken(token) {
    try {
        const decoded = jwt.verify(token, JWT_SECRET);
        return decoded;
    } catch (error) {
        if (error.name === 'TokenExpiredError') {
            throw new Error('Token expired');
        }
        throw new Error('Invalid token');
    }
}

