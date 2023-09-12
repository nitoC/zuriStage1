import pg from "pg";
import dotenv from 'dotenv';
dotenv.config()

const password = process.env.DBPASS;
const port = process.env.DBPORT;

const pool = new pg.Pool({
  connectionString: process.env.DBConfigLink,
  ssl: {
      rejectUnauthorized: false
  }
})


export default pool;