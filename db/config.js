import pg from "pg";
import dotenv from 'dotenv';
dotenv.config()

const password = process.env.DBPASS;
const port = process.env.DBPORT;
console.log(password)
console.log(typeof password)
console.log(port)

const pool = new pg.Pool({
  host: 'localhost',
  database: 'hngbackend',
  user: 'postgres',
  password,
  port,
  max: 20
})


export default pool;