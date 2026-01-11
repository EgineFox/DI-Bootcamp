import bcrypt from 'bcrypt';

const SALT_ROUNDS = 10;

// Hash a password
export async function hashPassword(password) {
    try {
        const salt = await bcrypt.genSalt(SALT_ROUNDS);
        const hashedPassword = await bcrypt.hash(password, salt);
        return hashedPassword;
    } catch (error) {
        throw new Error('Error hashing password');
    }
}

// Compare password with hash
export async function comparePassword(password, hash) {
    try {
        const isMath = await bcrypt.compare(password, hash);
        return isMath;

    } catch (error) {
        throw new Error (' Error comparing passwords');
    }
}