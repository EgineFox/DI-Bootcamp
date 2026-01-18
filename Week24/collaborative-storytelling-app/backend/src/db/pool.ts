import pg from "pg";
import dotenv from "dotenv";
import { release } from "node:os";

dotenv.config();

const { Pool } = pg;

// Create aconnection pool for PostgreSQL
const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: process.env.NODE_ENV === "production" ? { rejectUnauthorized: false } : false,
})

// Test database connection
pool.connect((err: Error | null, _client: any, release: ()=> void) => {
    if (err) {
        console.error("Error connecting to the database:", err.stack);
    } else {
        console.log("Database connected successfully");
        release();
    }
        
})

export default pool;