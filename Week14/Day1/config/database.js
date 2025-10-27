import dotenv from "dotenv";

dotenv.config();
import {Pool} from 'pg';
console.log(process.env);

const {PGDATABASE, PGHOST, PGPASSWORD, PGPORT, PGUSER} = process.env;
const pool = new Pool({
        host: PGHOST,
        port: PGPORT,
        user: PGUSER,
        database: PGDATABASE,
        password: PGPASSWORD,
        ssl: { rejectUnauthorized: false},
});

