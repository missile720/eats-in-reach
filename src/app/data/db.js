import { Pool } from 'pg';
// Set up the PostgreSQL connection pool
const pool = new Pool({
    connectionString: process.env.POSTGRES_URL,
    ssl: {
        rejectUnauthorized: false,
    },
});


export { pool };