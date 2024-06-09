import { Pool } from 'pg';

const pg = new Pool({
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    port: Number(process.env.DB_PORT) || 5000
});

export default pg;