const { Pool } = require('pg');
require('dotenv').config();

/**Create pool of connections with PostgreSQL */
const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: {
        rejectUnauthorized: false
    }
});

// checking connection
pool.on('connect', () => {
    console.log('Connected to database');
});

pool.on('error', (err) => {
    console.error('Unexpected error on idle client', err);
    process.exit(-1);
});

// Test query

const testConnection = async () => {
    try {
        const result = await pool.query('SELECT NOW()');
        console.log('Database time:' , result.rows[0].now);
        return true;
          
    } catch (error) {
        console.error('Database connection tast failed', error);
        return false;        
    }
};

module.exports = {
    pool,
    testConnection
};