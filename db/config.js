import pg from "pg";
import dotenv from 'dotenv';
dotenv.config()

const pass = process.env.DBPASS ;

const pool = new pg.Pool({
  connectionString: process.env.DBLINK,
  ssl: {
    rejectUnauthorized: false
}
 
})


export default pool;