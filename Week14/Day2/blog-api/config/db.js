import { Pool } from 'pg';
import dotenv from "dotenv";

// PostgreSQL connection pool
dotenv.config();

const {PGDATABASE, PGHOST, PGPASSWORD, PGPORT, PGUSER} = process.env;
const pool = new Pool({
        host: PGHOST,
        port: PGPORT,
        user: PGUSER,
        database: PGDATABASE,
        password: PGPASSWORD,
        ssl: { rejectUnauthorized: false},
});


export default { pool };
